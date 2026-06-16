import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { addICRow } from '../../utils/icStore';

function formatDate(date) {
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}
import PageLayout from '../layout/PageLayout';
import Breadcrumb from '../layout/Breadcrumb';
import { profiles } from '../../data/profiles';
import ProfilePageHeader from './ProfilePageHeader';
import { Sidebar } from './ProfilePage';
import styles from './profile.module.css';
import secStyles from './ProfileProcessSection.module.css';
import icLogo from '../../assets/integrity-check-logo.png';
import resultStyles from './ProfileIntegrityCheckResults.module.css';

export default function ProfileIntegrityCheckResults() {
  const { profileId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const profile = profiles[profileId];
  if (!profile) return null;

  const [detailsOpen, setDetailsOpen] = useState(true);
  const [weakerOpen, setWeakerOpen] = useState(false);

  const WEAKER_PROFILES = [
    {
      id: 'w1',
      name: 'GAZPROM (U.K.) LIMITED',
      matchScore: '85%',
      description: 'Gazprom (U.K.) Limited is a private holding company based in London, originally established in 1998 as a subsidiary of the Russian state-owned energy giant Gazprom PJSC',
      country: 'United Kingdom',
      address: null,
      website: null,
    },
    {
      id: 'w2',
      name: 'Gazmash, AO',
      matchScore: '72%',
      description: 'Gazmash, AO (now operating as JSC Gazprom Domestic Systems) is a Russian joint-stock company and a subsidiary of PJSC Gazprom',
      country: 'Russia',
      address: 'Primorsky Prospekt, 54. St. Petersburg, Russia',
      website: null,
    },
  ];

  const entity = location.state?.entity || {
    name: 'Open Joint Stock Company Gazprom',
    matchScore: '100%',
    description: 'Gazprom PAO (Public Joint Stock Company Gazprom) is a Russian majority state-owned multinational energy corporation. It is the largest company in Russia by market capitalization as of 2022 and a global leader in natural gas exploration and production.',
    country: 'Russia',
    website: 'https://www.gazprom.ru',
    matchNote: 'Exact match on Open Joint Stock Company Gazprom and location in Russia, aligning with the registered name and headquarters of Open Joint Stock Company Gazprom',
  };

  return (
    <PageLayout>
      <Breadcrumb items={[
        { label: 'Third Parties', to: '/third-parties' },
        { label: profile.name, to: `/profile/${profileId}` },
        { label: 'Integrity Check', to: `/profile/${profileId}/integrity-check` },
        { label: 'Create New Report' },
      ]} />

      <ProfilePageHeader profile={profile} />

      <div className={styles.pageBody}>
        <Sidebar profile={profile} />

        <main className={styles.mainContent}>
          <section className={secStyles.card}>
            <div className={`${secStyles.cardHeader} ${resultStyles.cardHeaderCol}`}>
              <div className={secStyles.cardTitleRow}>
                <h2 className={styles.cardTitle}>Integrity Check Report</h2>
                <div className={secStyles.poweredBy}>
                  POWERED BY
                  <img src={icLogo} alt="Xapien" className={secStyles.poweredByImg} />
                </div>
              </div>
              <button
                type="button"
                className={resultStyles.backToSearch}
                onClick={() => navigate(`/profile/${profileId}/integrity-check/create`)}
              >
                Back to Search
              </button>
            </div>

            <div className={resultStyles.body}>
              {/* Details accordion */}
              <button
                type="button"
                className={resultStyles.accordion}
                onClick={() => setDetailsOpen(o => !o)}
              >
                <span className={resultStyles.accordionLabel}>Exact Match</span>
                <span className="material-icons-outlined" style={{ fontSize: 24, color: 'var(--text-light)', transform: detailsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                  expand_more
                </span>
              </button>

              {detailsOpen && (
                <div className={resultStyles.accordionContent}>
                  <div className={resultStyles.entityCard}>
                    <div className={resultStyles.entityImgPlaceholder} />
                    <div className={resultStyles.entityInfo}>
                      <div className={resultStyles.entityTopRow}>
                        <div className={resultStyles.entityMeta}>
                          <div className={resultStyles.entityNameRow}>
                            <span className={resultStyles.entityName}>{entity.name}</span>
                            <span className={resultStyles.matchTag}>Exact match</span>
                          </div>
                          <p className={resultStyles.entityDesc}>{entity.description}</p>
                          <div className={resultStyles.entityDetailRow}>
                            {entity.country && (
                              <div className={resultStyles.entityDetail}>
                                <span className="material-icons-outlined" style={{ fontSize: 20, color: 'var(--text-light)' }}>public</span>
                                <span className={resultStyles.entityDetailBold}>{entity.country}</span>
                              </div>
                            )}
                            {entity.website && (
                              <div className={resultStyles.entityDetail}>
                                <span className="material-icons-outlined" style={{ fontSize: 20, color: 'var(--text-light)' }}>language</span>
                                <span className={resultStyles.entityDetailLink}>{entity.website}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <button
                          type="button"
                          className={`${styles.btn} ${styles.btnFilled} ${resultStyles.selectBtn}`}
                          onClick={() => {
                            addICRow(profileId, {
                              subject: entity.name,
                              requestor: 'Current User',
                              createdDate: formatDate(new Date()),
                              renewalDate: (() => { const d = new Date(); d.setMonth(d.getMonth() + 2); return formatDate(d); })(),
                              status: 'Pending',
                            });
                            navigate(`/profile/${profileId}/integrity-check`);
                          }}
                        >
                          Select
                        </button>
                      </div>
                      {entity.matchNote && (
                        <div className={resultStyles.matchBanner}>
                          <span className="material-icons-outlined" style={{ fontSize: 24, color: 'var(--text-light)' }}>check_circle</span>
                          <span className={resultStyles.matchBannerText}>{entity.matchNote}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* View weaker profiles accordion */}
              <button
                type="button"
                className={resultStyles.accordion}
                onClick={() => setWeakerOpen(o => !o)}
              >
                <span className={resultStyles.accordionLabel}>View weaker profiles</span>
                <span className="material-icons-outlined" style={{ fontSize: 24, color: 'var(--text-light)', transform: weakerOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                  expand_more
                </span>
              </button>

              {weakerOpen && (
                <div className={resultStyles.accordionContent}>
                  <div className={resultStyles.weakerList}>
                    {WEAKER_PROFILES.map(wp => (
                      <div key={wp.id} className={resultStyles.weakerCard}>
                        <div className={resultStyles.entityImgPlaceholderSmall} />
                        <div className={resultStyles.entityInfo}>
                          <div className={resultStyles.entityTopRow}>
                            <div className={resultStyles.entityMeta}>
                              <div className={resultStyles.entityNameRow}>
                                <span className={resultStyles.entityName}>{wp.name}</span>
                                <span className={`${resultStyles.matchTag} ${resultStyles.matchTagPartial}`}>Partial match</span>
                              </div>
                              <p className={resultStyles.entityDesc}>{wp.description}</p>
                              <div className={resultStyles.entityDetailRow}>
                                {wp.country && (
                                  <div className={resultStyles.entityDetail}>
                                    <span className="material-icons-outlined" style={{ fontSize: 20, color: 'var(--text-light)' }}>public</span>
                                    <span className={resultStyles.entityDetailBold}>{wp.country}</span>
                                  </div>
                                )}
                                {wp.address && (
                                  <div className={resultStyles.entityDetail}>
                                    <span className="material-icons-outlined" style={{ fontSize: 20, color: 'var(--text-light)' }}>pin_drop</span>
                                    <span className={resultStyles.entityDetailBold}>{wp.address}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                            <button
                              type="button"
                              className={`${styles.btn} ${styles.btnFilled} ${resultStyles.selectBtn}`}
                              onClick={() => {
                                addICRow(profileId, {
                                  subject: wp.name,
                                  requestor: 'Current User',
                                  createdDate: formatDate(new Date()),
                                  renewalDate: (() => { const d = new Date(); d.setMonth(d.getMonth() + 2); return formatDate(d); })(),
                                  status: 'Pending',
                                });
                                navigate(`/profile/${profileId}/integrity-check`);
                              }}
                            >
                              Select
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        </main>
      </div>
    </PageLayout>
  );
}
