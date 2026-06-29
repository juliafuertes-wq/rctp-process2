import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { RiskLevelIcon } from "../components/profile/profileAssets";
import profileStyles from "../components/profile/profile.module.css";
import styles from "../pages/ComponentCatalog.module.css";

const meta: Meta = {
  title: "Catalog/Profile Atoms/Profile Page Header",
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj;

const RISKS = ["high", "medium", "low", "pending"] as const;
type Risk = typeof RISKS[number];

const toggleBtn = (active: boolean): React.CSSProperties => ({
  padding: "3px 10px",
  borderRadius: 2,
  fontSize: 11,
  fontWeight: 600,
  cursor: "pointer",
  textTransform: "uppercase",
  letterSpacing: "0.3px",
  background: active ? "var(--primary-500)" : "var(--neutral-25)",
  color: active ? "var(--neutral-00)" : "var(--text-light)",
  border: active ? "none" : "1px solid var(--neutral-100)",
});

function ProfileHeaderDisplay() {
  const [risk, setRisk] = useState<Risk>("low");
  const [scrolled, setScrolled] = useState(false);

  const riskCls =
    risk === "high"    ? profileStyles.tpTopStripHigh :
    risk === "medium"  ? profileStyles.tpTopStripMedium :
    risk === "low"     ? profileStyles.tpTopStripLow :
                         profileStyles.tpTopStripPending;

  const riskBadgeCls =
    risk === "high"    ? profileStyles.badgeHigh :
    risk === "medium"  ? profileStyles.badgeMedium :
    risk === "low"     ? profileStyles.badgeLow :
                         profileStyles.badgePending;

  return (
    <div style={{ padding: "24px 32px", background: "var(--neutral-00)", minHeight: "100vh" }}>
      {/* Header */}
      <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-normal)", marginBottom: 6, fontFamily: "var(--font-heading)" }}>
        Profile Page Header
      </h2>
      <p style={{ fontSize: 13, color: "var(--text-light)", marginBottom: 0 }}>
        Top strip of the TP profile page. Background gradient and right-side color bar change per risk level. Collapses to a 64px slim variant once the user scrolls past 10px.
      </p>
      <div style={{ height: 3, background: "var(--primary-500)", margin: "16px 0 0", borderRadius: 1 }} />

      {/* Live demo */}
      <div style={{ background: "var(--neutral-25)", padding: "16px 20px 20px" }}>
        <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-light)", marginBottom: 16 }}>
          Live Demo
        </div>

        {/* Risk level controls */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <span className={styles.demoGroupLabel}>Risk level</span>
          {RISKS.map((r) => (
            <button key={r} style={toggleBtn(risk === r)} onClick={() => setRisk(r)}>{r}</button>
          ))}
        </div>

        {/* Scroll state controls */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
          <span className={styles.demoGroupLabel}>Scroll state</span>
          {([{ k: false, label: "Expanded" }, { k: true, label: "Scrolled" }] as const).map((s) => (
            <button key={s.label} style={toggleBtn(scrolled === s.k)} onClick={() => setScrolled(s.k)}>{s.label}</button>
          ))}
        </div>

        {/* Header specimen */}
        <div className={`${profileStyles.tpTopStrip} ${riskCls} ${scrolled ? profileStyles.tpTopStripScrolled : ""}`}>
          <div className={profileStyles.tpPageHeader}>
            <span className={profileStyles.tpBack}>
              <span className="material-icons-outlined">chevron_left</span> Back
            </span>
            <div className={profileStyles.tpTitleRow}>
              <div className={profileStyles.tpNameGroup}>
                <h1>Pied Piper Inc.</h1>
                <span className={profileStyles.tpVerified}>
                  <span className="material-icons-outlined">verified</span>
                  Entity Verified
                </span>
              </div>
              <div className={profileStyles.tpBadges}>
                <div className={profileStyles.tpBadgeGroup}>
                  <div className={profileStyles.tpBadgeLabel}>Current status:</div>
                  <div className={`${profileStyles.badge} ${profileStyles.statusApproved} ${profileStyles.badgeBtn}`}>
                    Approved
                    <span className="material-icons-outlined" style={{ fontSize: 16 }}>check_circle</span>
                  </div>
                </div>
                <div className={profileStyles.tpBadgeGroup}>
                  <div className={profileStyles.tpBadgeLabel}>Risk level:</div>
                  <div className={`${profileStyles.badge} ${riskBadgeCls} ${profileStyles.badgeBtn}`}>
                    {risk === "pending" ? "Pending" : risk.charAt(0).toUpperCase() + risk.slice(1)}
                    <RiskLevelIcon level={risk === "pending" ? "low" : risk} size={14} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p style={{ fontSize: 11, color: "var(--neutral-400)", marginTop: 10 }}>
          Risk level buttons toggle the strip variant. Scroll state toggles between the 100px expanded and 64px collapsed forms — in production this happens automatically once window.scrollY &gt; 10.
        </p>
      </div>
    </div>
  );
}

export const AllStates: Story = {
  name: "All States",
  render: () => <ProfileHeaderDisplay />,
};
