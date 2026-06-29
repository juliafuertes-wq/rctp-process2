import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta = {
  title: "Catalog/UI Components/Tag",
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj;

const PROPS = [
  { name: "label",    required: true, type: "string",      defaultVal: "—",          desc: "Text shown inside the tag." },
  { name: "onRemove",                 type: "() => void",  defaultVal: "undefined",  desc: "When provided, renders a × button that triggers removal." },
];

const tagStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  padding: "2px 8px",
  borderRadius: "var(--rctp-radius-xs)",
  background: "var(--neutral-100)",
  color: "var(--text-normal)",
  fontSize: 11,
  fontWeight: 500,
  whiteSpace: "nowrap",
};

const removableStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  background: "var(--text-light)",
  border: "1px solid var(--neutral-800)",
  borderRadius: "var(--rctp-radius-sm)",
  height: 24,
  overflow: "hidden",
  padding: "0 4px 0 8px",
  gap: 8,
  fontSize: 14,
  fontWeight: 400,
  color: "var(--neutral-00)",
  whiteSpace: "nowrap",
};

function TagDisplay() {
  const [tags, setTags] = useState(["Finance", "Compliance", "Legal"]);

  return (
    <div style={{ padding: "24px 32px", background: "var(--neutral-00)", minHeight: "100vh" }}>
      {/* Header */}
      <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-normal)", marginBottom: 6, fontFamily: "var(--font-heading)" }}>
        Tag
      </h2>
      <p style={{ fontSize: 13, color: "var(--text-light)", marginBottom: 0 }}>
        Compact label pill used to categorise third parties. Appears in the ThirdParties table and the onboarding Summary section. Optional × button for removable chips.
      </p>
      <div style={{ height: 3, background: "var(--primary-500)", margin: "16px 0 0", borderRadius: 1 }} />

      {/* Live demo */}
      <div style={{ background: "var(--neutral-25)", padding: "16px 20px 20px" }}>
        <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-light)", marginBottom: 16 }}>
          Live Demo
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
          {/* Static tags */}
          <span style={tagStyle}>Paper</span>
          <span style={tagStyle}>Regional</span>
          <span style={tagStyle}>Scranton</span>

          {/* Removable tags */}
          {tags.map((tag) => (
            <span key={tag} style={removableStyle}>
              {tag}
              <button
                style={{ background: "none", border: "none", color: "var(--neutral-00)", cursor: "pointer", fontSize: 14, lineHeight: 1, padding: 0, opacity: 0.8, display: "flex", alignItems: "center" }}
                onClick={() => setTags((prev) => prev.filter((t) => t !== tag))}
              >
                ×
              </button>
            </span>
          ))}
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
  render: () => <TagDisplay />,
};
