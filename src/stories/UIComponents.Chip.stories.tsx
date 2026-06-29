import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Chip from "../components/ui/Chip";

const meta: Meta = {
  title: "Catalog/UI Components/Chip",
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj;

const PROPS = [
  { name: "label",     required: true, type: "string",        defaultVal: "—",       desc: "Text displayed inside the chip." },
  { name: "selected",                  type: "boolean",       defaultVal: "false",   desc: "Selected visual state." },
  { name: "count",                     type: "number | null", defaultVal: "null",    desc: "Trailing count badge; shown when > 0." },
  { name: "showClose",                 type: "boolean",       defaultVal: "false",   desc: "Shows a close × icon (unselected only, no count)." },
  { name: "onClick",                   type: "() => void",    defaultVal: "—",       desc: "Chip click handler." },
  { name: "onClose",                   type: "() => void",    defaultVal: "undefined", desc: "Close icon click handler." },
  { name: "disabled",                  type: "boolean",       defaultVal: "false",   desc: "Disables click and close interactions." },
];

function ChipDisplay() {
  const [selected, setSelected] = useState(false);

  return (
    <div style={{ padding: "24px 32px", background: "var(--neutral-00)", minHeight: "100vh" }}>
      {/* Header */}
      <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-normal)", marginBottom: 6, fontFamily: "var(--font-heading)" }}>
        Chip
      </h2>
      <p style={{ fontSize: 13, color: "var(--text-light)", marginBottom: 0 }}>
        Input chip for filter tags and multi-select inputs. Supports selected state, count badge, and close action.
      </p>
      <div style={{ height: 3, background: "var(--primary-500)", margin: "16px 0 0", borderRadius: 1 }} />

      {/* Live demo */}
      <div style={{ background: "var(--neutral-25)", padding: "16px 20px 20px" }}>
        <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-light)", marginBottom: 16 }}>
          Live Demo
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
          <Chip label="Toggle me" selected={selected} onClick={() => setSelected(v => !v)} />
          <Chip label="With count" count={5} onClick={() => {}} />
          <Chip label="With close" showClose onClick={() => {}} onClose={() => {}} />
          <Chip label="Disabled" disabled onClick={() => {}} />
          <Chip label="Selected" selected />
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
  render: () => <ChipDisplay />,
};
