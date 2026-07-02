import type { Meta, StoryObj } from "@storybook/react";
import Badge from "../components/ui/Badge";

const meta: Meta = {
  title: "Catalog/UI Components/Badge",
  parameters: { layout: "fullscreen" },
  argTypes: {
    label: {
      control: "text",
      description: "Label text for the interactive badge",
    },
    bgColor: {
      control: "color",
      description: "Background color override for the interactive badge",
    },
  },
  args: {
    label: "12",
    bgColor: "#028FBB",
  },
};
export default meta;

type Story = StoryObj<{ label: string; bgColor: string }>;

const STYLES = ["action-required", "no-action", "incomplete", "not-initiated", "completed", "confirmed", "cleared"] as const;

const PROPS = [
  { name: "label",     type: "string | number",                                                                                              defaultVal: "'12'",           desc: "Text shown inside the badge (large size only)." },
  { name: "style",     type: "'action-required' | 'no-action' | 'incomplete' | 'not-initiated' | 'completed' | 'confirmed' | 'cleared'",    defaultVal: "'action-required'", desc: "Pre-defined color scheme." },
  { name: "size",      type: "'large' | 'medium' | 'small'",                                                                                defaultVal: "'large'",        desc: "Controls badge dimensions and whether the label is shown." },
  { name: "shape",     type: "'round' | 'square'",                                                                                          defaultVal: "'round'",        desc: "Applies to large size only." },
  { name: "bgColor",   type: "string",                                                                                                       defaultVal: "undefined",      desc: "CSS color override for background." },
  { name: "textColor", type: "string",                                                                                                       defaultVal: "'#fff'",         desc: "CSS color override for text." },
];

const groupLabel: React.CSSProperties = {
  fontSize: 11,
  textTransform: "none" as const,
  color: "var(--text-light)",
  minWidth: 120,
  flexShrink: 0,
};

const row: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 12,
};

function BadgeDisplay({ label, bgColor }: { label: string; bgColor: string }) {
  return (
    <div style={{ padding: "24px 32px", background: "var(--neutral-00)", minHeight: "100vh" }}>
      {/* Header */}
      <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-normal)", marginBottom: 6, fontFamily: "var(--font-heading)" }}>
        Badge
      </h2>
      <p style={{ fontSize: 13, color: "var(--text-light)", marginBottom: 0 }}>
        Status indicator badge. Seven semantic styles, three sizes, and two shapes (round and square for large).
      </p>
      <div style={{ height: 3, background: "var(--primary-500)", margin: "16px 0 0", borderRadius: 1 }} />

      {/* Live demo */}
      <div style={{ background: "var(--neutral-25)", padding: "16px 20px 20px" }}>
        <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-light)", marginBottom: 16 }}>
          Live Demo
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {STYLES.map((s) => (
            <div key={s} style={row}>
              <span style={groupLabel}>{s}</span>
              <Badge style={s} size="large" shape="round" label="12" />
              <Badge style={s} size="large" shape="square" label="12" />
              <Badge style={s} size="medium" />
              <Badge style={s} size="small" />
            </div>
          ))}
        </div>
      </div>

      {/* Interactive */}
      <div style={{ marginTop: 24, marginBottom: 24 }}>
        <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-light)", marginBottom: 16 }}>
          Interactive
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Badge bgColor={bgColor} size="large" shape="round" label={label} />
          <Badge bgColor={bgColor} size="large" shape="square" label={label} />
          <Badge bgColor={bgColor} size="medium" />
          <Badge bgColor={bgColor} size="small" />
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
                  {p.name}
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
  render: (args) => <BadgeDisplay label={args.label} bgColor={args.bgColor} />,
};
