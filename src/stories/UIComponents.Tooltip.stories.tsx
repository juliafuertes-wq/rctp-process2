import type { Meta, StoryObj } from "@storybook/react";
import styles from "../pages/ComponentCatalog.module.css";

const meta: Meta = {
  title: "Catalog/UI Components/Tooltip",
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj;

const PROPS = [
  { name: "content",   required: true, type: "string",                          defaultVal: "—",        desc: "Text shown in the tooltip bubble." },
  { name: "children",  required: true, type: "ReactNode",                        defaultVal: "—",        desc: "Trigger element — tooltip appears on hover." },
  { name: "direction",                 type: "'top' | 'bottom' | 'left' | 'right'", defaultVal: "'top'", desc: "Which side of the trigger the bubble appears on." },
  { name: "width",                     type: "number",                           defaultVal: "undefined", desc: "Fixed pixel width of the bubble (auto-wraps when set)." },
];

const dirLabel: React.CSSProperties = {
  fontSize: 10,
  color: "var(--text-light)",
};

const dirCol: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 6,
};

function TooltipDisplay() {
  return (
    <div style={{ padding: "24px 32px", background: "var(--neutral-00)", minHeight: "100vh" }}>
      {/* Header */}
      <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-normal)", marginBottom: 6, fontFamily: "var(--font-heading)" }}>
        Tooltip
      </h2>
      <p style={{ fontSize: 13, color: "var(--text-light)", marginBottom: 0 }}>
        CSS-only hover tooltip. Two variants: a compact single-line dot tooltip (sidebar progress dots) and a wider multi-line info tooltip (risk table info icons). Supports four directions: top, bottom, left, right.
      </p>
      <div style={{ height: 3, background: "var(--primary-500)", margin: "16px 0 0", borderRadius: 1 }} />

      {/* Live demo */}
      <div style={{ background: "var(--neutral-25)", padding: "16px 20px 20px" }}>
        <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-light)", marginBottom: 16 }}>
          Live Demo
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 32, padding: "8px 0" }}>

          {/* Dot tooltip */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span style={{ fontSize: 11, color: "var(--text-light)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Dot tooltip</span>
            <div style={{ display: "flex", gap: 48, alignItems: "center", paddingTop: 8, paddingBottom: 8 }}>
              {(["top", "bottom", "left", "right"] as const).map((dir) => (
                <div key={dir} style={dirCol}>
                  <span style={dirLabel}>{dir}</span>
                  <div className={styles.tooltipTrigger}>
                    <div style={{ width: 16, height: 16, borderRadius: "50%", background: "var(--success-500)" }} />
                    <div className={
                      dir === "top"    ? styles.tooltipBubbleSm :
                      dir === "bottom" ? styles.tooltipBubbleSmBottom :
                      dir === "left"   ? styles.tooltipBubbleSmLeft :
                                         styles.tooltipBubbleSmRight
                    }>Approved</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Info tooltip */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span style={{ fontSize: 11, color: "var(--text-light)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Info tooltip</span>
            <div style={{ display: "flex", gap: 48, alignItems: "center", paddingTop: 8, paddingBottom: 8 }}>
              {(["top", "bottom", "left", "right"] as const).map((dir) => (
                <div key={dir} style={dirCol}>
                  <span style={dirLabel}>{dir}</span>
                  <div className={styles.tooltipTrigger}>
                    <span className="material-icons-outlined" style={{ fontSize: 18, color: "var(--text-light)", display: "block", width: 18, height: 18, lineHeight: "18px" }}>info_outline</span>
                    <div className={
                      dir === "top"    ? styles.tooltipBubbleLg :
                      dir === "bottom" ? styles.tooltipBubbleLgBottom :
                      dir === "left"   ? styles.tooltipBubbleLgLeft :
                                         styles.tooltipBubbleLgRight
                    }>Monitored associations being continuously monitored against Risk and Compliance Database</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div style={{ borderBottom: "1px solid var(--neutral-50)", margin: "24px 0" }} />

      {/* Props table */}
      <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 0 }}>
        <thead>
          <tr>
            {["Prop", "Type", "Default", "Description"].map((h) => (
              <th key={h} style={{
                textAlign: "left",
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-light)",
                padding: "8px 16px",
                borderBottom: "1px solid var(--neutral-50)",
              }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {PROPS.map((p, i) => (
            <tr key={p.name} style={{ background: i % 2 === 0 ? "var(--primary-08)" : "var(--neutral-00)" }}>
              <td style={{ padding: "10px 16px", borderBottom: "1px solid var(--neutral-50)" }}>
                <span style={{
                  fontSize: 12,
                  fontFamily: "var(--rctp-font-mono, monospace)",
                  color: "var(--primary-600)",
                  background: "var(--primary-08)",
                  padding: "2px 6px",
                  borderRadius: 3,
                }}>
                  {p.name}{p.required && <span style={{ color: "var(--alert-500)" }}> *</span>}
                </span>
              </td>
              <td style={{ padding: "10px 16px", fontSize: 13, fontFamily: "var(--rctp-font-mono, monospace)", color: "var(--text-light)", borderBottom: "1px solid var(--neutral-50)" }}>
                {p.type}
              </td>
              <td style={{ padding: "10px 16px", fontSize: 13, fontFamily: "var(--rctp-font-mono, monospace)", color: "var(--text-light)", borderBottom: "1px solid var(--neutral-50)" }}>
                {p.defaultVal}
              </td>
              <td style={{ padding: "10px 16px", fontSize: 13, color: "var(--text-normal)", borderBottom: "1px solid var(--neutral-50)" }}>
                {p.desc}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export const AllStates: Story = {
  name: "All States",
  render: () => <TooltipDisplay />,
};
