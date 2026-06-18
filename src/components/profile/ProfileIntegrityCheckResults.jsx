import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { addICRow } from '../../utils/icStore';
import PageLayout from '../layout/PageLayout';
import Breadcrumb from '../layout/Breadcrumb';
import { profiles } from '../../data/profiles';
import ProfilePageHeader from './ProfilePageHeader';
import { Sidebar } from './ProfilePage';
import Button from '../ui/Button';
import styles from './profile.module.css';
import secStyles from './ProfileProcessSection.module.css';
import icLogo from '../../assets/integrity-check-logo.png';
import resultStyles from './ProfileIntegrityCheckResults.module.css';

function formatDate(date) {
  const d = date.getDate();
  const m = date.toLocaleDateString('en-GB', { month: 'short' });
  const y = date.getFullYear();
  return `${d} ${m} ${y}`;
}

export default function ProfileIntegrityCheckResults() {
  const { profileId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const profile = profiles[profileId];
  if (!profile) return null;

  const noExactMatch = location.state?.noExactMatch ?? false;
  const personNoMatch = location.state?.personNoMatch ?? false;
  const typedText = location.state?.typedText ?? '';
  const [detailsOpen, setDetailsOpen] = useState(true);
  const [weakerOpen, setWeakerOpen] = useState(noExactMatch);

  const WEAKER_PROFILES = noExactMatch ? [
    {
      id: 'w1',
      name: 'GAZPROM (U.K.) LIMITED',
      matchScore: '100%',
      description: 'Gazprom (U.K.) Limited is a private holding company based in London, originally established in 1998 as a subsidiary of the Russian state-owned energy giant Gazprom PJSC',
      country: 'United Kingdom',
      address: null,
      website: null,
    },
    {
      id: 'w2',
      name: 'Gazmash, AO',
      matchScore: '100%',
      description: 'Gazmash, AO (now operating as JSC Gazprom Domestic Systems) is a Russian joint-stock company and a subsidiary of PJSC Gazprom',
      country: 'Russia',
      address: 'Primorsky Prospekt, 54. St. Petersburg, Russia',
      website: null,
    },
  ] : [
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
    address: null,
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
                <span className={resultStyles.accordionLabel}>{(noExactMatch || personNoMatch) ? 'Details' : 'Exact Match'}</span>
                <span className="material-icons-outlined" style={{ fontSize: 24, color: 'var(--text-light)', transform: detailsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                  expand_more
                </span>
              </button>

              {detailsOpen && (
                <div className={resultStyles.accordionContent}>
                  {personNoMatch ? (
                    <div className={resultStyles.noMatchWrap}>
                      <p className={resultStyles.noMatchText}>We could not find any organisations using this description:</p>
                      <p className={resultStyles.noMatchSubText}>{typedText}</p>
                      <p className={resultStyles.noMatchHint}><strong>Check the name you typed or add more context.</strong> You can view tips on best practices by clicking See Examples below.</p>
                    </div>
                  ) : noExactMatch ? (
                    <div className={resultStyles.noMatchWrap}>
                      <p className={resultStyles.noMatchText}>We could not find any exact match using this description:</p>
                      <div className={resultStyles.entityDetailRow}>
                        {entity.country && (
                          <div className={resultStyles.entityDetail}>
                            <div className={resultStyles.entityIconWrap}>
                              <span className="material-icons-outlined" style={{ fontSize: 16, color: '#516267' }}>public</span>
                            </div>
                            <span className={resultStyles.entityDetailBold}>{entity.country}</span>
                          </div>
                        )}
                        {entity.website && (
                          <div className={resultStyles.entityDetail}>
                            <div className={resultStyles.entityIconWrap}>
                              <span className="material-icons-outlined" style={{ fontSize: 16, color: '#516267' }}>language</span>
                            </div>
                            <span className={resultStyles.entityDetailLink}>{entity.website}</span>
                          </div>
                        )}
                        {entity.address && (
                          <div className={resultStyles.entityDetail}>
                            <div className={resultStyles.entityIconWrap}>
                              <span className="material-icons-outlined" style={{ fontSize: 16, color: '#516267' }}>pin_drop</span>
                            </div>
                            <span className={resultStyles.entityDetailBold}>{entity.address}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                  <div className={resultStyles.entityCard}>
                    <div className={resultStyles.entityImgPlaceholder} />
                    <div className={resultStyles.entityInfo}>
                      <div className={resultStyles.entityTopRow}>
                        <div className={resultStyles.entityMeta}>
                          <div className={resultStyles.entityNameRow}>
                            <span className={resultStyles.entityName}>{entity.name}</span>
                            <span className={resultStyles.matchTag}>Exact match</span>
                          </div>
                          {entity.description && <p className={resultStyles.entityDesc}>{entity.description}</p>}
                          <div className={resultStyles.entityDetailRow}>
                            {entity.country && (
                              <div className={resultStyles.entityDetail}>
                                <div className={resultStyles.entityIconWrap}>
                                  <span className="material-icons-outlined" style={{ fontSize: 16, color: '#516267' }}>public</span>
                                </div>
                                <span className={resultStyles.entityDetailBold}>{entity.country}</span>
                              </div>
                            )}
                            {entity.website && (
                              <div className={resultStyles.entityDetail}>
                                <div className={resultStyles.entityIconWrap}>
                                  <span className="material-icons-outlined" style={{ fontSize: 16, color: '#516267' }}>language</span>
                                </div>
                                <span className={resultStyles.entityDetailLink}>{entity.website}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <Button
                          variant="filled"
                          style={{ width: 58, alignSelf: 'center', flexShrink: 0 }}
                          onClick={() => {
                            addICRow(profileId, {
                              subject: entity.name,
                              requestor: 'Current User',
                              createdDate: formatDate(new Date()),
                              renewalDate: (() => { const d = new Date(); d.setMonth(d.getMonth() + 2); return formatDate(d); })(),
                              status: 'inprogress',
                            });
                            navigate(`/profile/${profileId}/integrity-check`);
                          }}
                        >
                          Select
                        </Button>
                      </div>
                      {entity.matchNote && (
                        <div className={resultStyles.matchBanner}>
                          <span className="material-icons-outlined" style={{ fontSize: 24, color: 'var(--text-light)' }}>check_circle</span>
                          <span className={resultStyles.matchBannerText}>{entity.matchNote}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  )}
                </div>
              )}

              {/* View weaker profiles accordion */}
              {!personNoMatch && <button
                type="button"
                className={resultStyles.accordion}
                onClick={() => setWeakerOpen(o => !o)}
              >
                <span className={resultStyles.accordionLabel}>View weaker profiles</span>
                <span className="material-icons-outlined" style={{ fontSize: 24, color: 'var(--text-light)', transform: weakerOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                  expand_more
                </span>
              </button>}

              {!personNoMatch && weakerOpen && (
                <div className={resultStyles.accordionContent}>
                  <div className={resultStyles.weakerList}>
                    {WEAKER_PROFILES.map(wp => (
                      <div key={wp.id} className={resultStyles.weakerCard}>
                        <div className={resultStyles.entityInfo}>
                          <div className={resultStyles.entityTopRow}>
                            <div className={resultStyles.entityMeta}>
                              <div className={resultStyles.entityNameRow}>
                                <span className={resultStyles.entityName}>{wp.name}</span>
                                <span className={resultStyles.matchTag}>
                                  Partial match
                                </span>
                              </div>
                              {wp.description && <p className={resultStyles.entityDesc}>{wp.description}</p>}
                              <div className={resultStyles.entityDetailRow}>
                                {wp.country && (
                                  <div className={resultStyles.entityDetail}>
                                    <div className={resultStyles.entityIconWrap}>
                                      <span className="material-icons-outlined" style={{ fontSize: 16, color: '#516267' }}>public</span>
                                    </div>
                                    <span className={resultStyles.entityDetailBold}>{wp.country}</span>
                                  </div>
                                )}
                                {wp.address && (
                                  <div className={resultStyles.entityDetail}>
                                    <div className={resultStyles.entityIconWrap}>
                                      <span className="material-icons-outlined" style={{ fontSize: 16, color: '#516267' }}>pin_drop</span>
                                    </div>
                                    <span className={resultStyles.entityDetailBold}>{wp.address}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                            <Button
                              variant="filled"
                              style={{ width: 58, alignSelf: 'center', flexShrink: 0 }}
                              onClick={() => {
                                addICRow(profileId, {
                                  subject: wp.name,
                                  requestor: 'Current User',
                                  createdDate: formatDate(new Date()),
                                  renewalDate: (() => { const d = new Date(); d.setMonth(d.getMonth() + 2); return formatDate(d); })(),
                                  status: 'inprogress',
                                });
                                navigate(`/profile/${profileId}/integrity-check`);
                              }}
                            >
                              Select
                            </Button>
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
