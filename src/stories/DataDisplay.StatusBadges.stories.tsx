import type { Meta, StoryObj } from "@storybook/react";
import styles from "../pages/ComponentCatalog.module.css";

const meta: Meta = {
  title: "Catalog/Data Display/Status Badges",
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj;

const STATUS_ENTRIES = [
  { label: "Pending Approval",           bg: "var(--neutral-50)",  color: "var(--text-normal)",  icon: "pending",            tooltip: "Record has not yet had a first approval." },
  { label: "Approved",                   bg: "var(--success-100)", color: "var(--success-900)", icon: "check_circle",       tooltip: "This third party has been approved." },
  { label: "Not Approved",               bg: "var(--alert-100)",   color: "var(--alert-700)",   icon: "dangerous",          tooltip: "Approval was not granted for this third party." },
  { label: "Declined",                   bg: "var(--alert-100)",   color: "var(--alert-700)",   icon: "feedback",           tooltip: "This third party has been declined." },
  { label: "Approved*",                  bg: "var(--warning-100)", color: "var(--warning-900)", icon: "history_toggle_off", tooltip: "Renewal date reached." },
  { label: "Approved - Renewal Required", bg: "var(--warning-100)", color: "var(--warning-900)", icon: "history_toggle_off", tooltip: "Renewal started manually." },
];

function StatusBadgesDisplay() {
  return (
    <div style={{ padding: "24px 32px", background: "var(--neutral-00)", minHeight: "100vh" }}>
      {/* Header */}
      <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-normal)", marginBottom: 6, fontFamily: "var(--font-heading)" }}>
        Status Badges
      </h2>
      <p style={{ fontSize: 13, color: "var(--text-light)", marginBottom: 0 }}>
        Current status chips rendered in the profile header. Defined as STATUS_CONFIG in ProfilePage.jsx. An optional info tooltip variant surfaces a short explanation on hover.
      </p>
      <div style={{ height: 3, background: "var(--primary-500)", margin: "16px 0 0", borderRadius: 1 }} />

      {/* Live demo */}
      <div style={{ background: "var(--neutral-25)", padding: "16px 20px 20px" }}>
        <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-light)", marginBottom: 16 }}>
          Live Demo
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

          {/* Plain badges */}
          <div>
            <div style={{ fontSize: 11, color: "var(--text-light)", marginBottom: 8 }}>Plain</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {STATUS_ENTRIES.map((s) => (
                <span key={s.label} className={styles.demoStatusBadge} style={{ background: s.bg, color: s.color }}>
                  {s.label}
                  <span className="material-icons-outlined" style={{ fontSize: 14, display: "block", width: 14, height: 14, lineHeight: "14px" }}>{s.icon}</span>
                </span>
              ))}
            </div>
          </div>

          {/* With tooltip */}
          <div>
            <div style={{ fontSize: 11, color: "var(--text-light)", marginBottom: 8 }}>With tooltip (hover)</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "flex-start" }}>
              {STATUS_ENTRIES.map((s) => (
                <div key={s.label} className={styles.tooltipTrigger}>
                  <span className={styles.demoStatusBadge} style={{ background: s.bg, color: s.color }}>
                    {s.label}
                    <span className="material-icons-outlined" style={{ fontSize: 14, display: "block", width: 14, height: 14, lineHeight: "14px" }}>{s.icon}</span>
                  </span>
                  <div className={styles.tooltipBubbleLg}>{s.tooltip}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export const AllStates: Story = {
  name: "All States",
  render: () => <StatusBadgesDisplay />,
};
