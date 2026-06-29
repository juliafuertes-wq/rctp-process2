import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/ui/Button";

const meta: Meta = {
  title: "Catalog/UI Components/Button",
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj;

const PROPS = [
  { name: "variant",   type: "'outline' | 'filled' | 'text'", defaultVal: "'outline'",  desc: "Visual style of the button." },
  { name: "size",      type: "'sm' | 'md' | 'lg'",            defaultVal: "'md'",       desc: "Height: sm = 26px, md = 32px (default), lg = 38px." },
  { name: "children",  required: true, type: "ReactNode",     defaultVal: "—",          desc: "Button label content." },
  { name: "icon",      type: "string",                         defaultVal: "undefined",  desc: "Material Icons Outlined icon name shown after the label." },
  { name: "...props",  type: "HTMLButtonAttributes",           defaultVal: "—",          desc: "All standard button attributes (onClick, disabled, type, etc.)." },
];

const groupLabel: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "var(--text-light)",
  minWidth: 56,
};

const row: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 12,
};

function ButtonDisplay() {
  return (
    <div style={{ padding: "24px 32px", background: "var(--neutral-00)", minHeight: "100vh" }}>
      {/* Header */}
      <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-normal)", marginBottom: 6, fontFamily: "var(--font-heading)" }}>
        Button
      </h2>
      <p style={{ fontSize: 13, color: "var(--text-light)", marginBottom: 0 }}>
        General-purpose action button. Two visual variants: filled (primary action) and outline (secondary action). Segmented group joins multiple buttons into a single control for mutually exclusive selection.
      </p>
      <div style={{ height: 3, background: "var(--primary-500)", margin: "16px 0 0", borderRadius: 1 }} />

      {/* Live demo */}
      <div style={{ background: "var(--neutral-25)", padding: "16px 20px 20px" }}>
        <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-light)", marginBottom: 16 }}>
          Live Demo
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={row}>
            <span style={groupLabel}>Filled</span>
            <Button variant="filled">Save Changes</Button>
            <Button variant="filled" icon="add">Add Item</Button>
            <Button variant="filled" disabled>Disabled</Button>
          </div>
          <div style={row}>
            <span style={groupLabel}>Outline</span>
            <Button variant="outline">Cancel</Button>
            <Button variant="outline" icon="download">Export</Button>
            <Button variant="outline" disabled>Disabled</Button>
          </div>
          <div style={row}>
            <span style={groupLabel}>Text</span>
            <Button variant="text">View details</Button>
            <Button variant="text" icon="open_in_new">Open</Button>
            <Button variant="text" disabled>Disabled</Button>
          </div>
          <div style={row}>
            <span style={groupLabel}>Sizes</span>
            <Button variant="filled" size="sm">Small</Button>
            <Button variant="filled" size="md">Medium</Button>
            <Button variant="filled" size="lg">Large</Button>
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
  render: () => <ButtonDisplay />,
};
