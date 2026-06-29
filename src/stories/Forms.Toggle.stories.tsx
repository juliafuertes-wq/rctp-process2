import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Toggle from "../components/ui/Toggle";

const meta: Meta = {
  title: "Catalog/Forms/Toggle",
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj;

const PROPS = [
  { name: "value",     required: true,  type: "boolean",            defaultVal: "false",       desc: "Current on/off state." },
  { name: "onChange",                   type: "(value: boolean) => void", defaultVal: "—",    desc: "Called with the new boolean value on click." },
  { name: "labelOn",                    type: "string",             defaultVal: "'Active'",    desc: "Label shown in the on state." },
  { name: "labelOff",                   type: "string",             defaultVal: "'Inactive'",  desc: "Label shown in the off state." },
  { name: "disabled",                   type: "boolean",            defaultVal: "false",       desc: "Disables toggle interaction." },
];

function ToggleDisplay() {
  const [on, setOn] = useState(false);

  return (
    <div style={{ padding: "24px 32px", background: "var(--neutral-00)", minHeight: "100vh" }}>
      {/* Header */}
      <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-normal)", marginBottom: 6, fontFamily: "var(--font-heading)" }}>
        Toggle
      </h2>
      <p style={{ fontSize: 13, color: "var(--text-light)", marginBottom: 0 }}>
        Active / Inactive sliding toggle. Used in onboarding, renewal edit, and row status controls.
      </p>
      <div style={{ height: 3, background: "var(--primary-500)", margin: "16px 0 0", borderRadius: 1 }} />

      {/* Live demo */}
      <div style={{ background: "var(--neutral-25)", padding: "16px 20px 20px" }}>
        <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-light)", marginBottom: 16 }}>
          Live Demo
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 40px", alignItems: "center" }}>
          <Toggle value={on} onChange={setOn} />
          <Toggle value={true} disabled />
          <Toggle value={false} disabled />
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
  render: () => <ToggleDisplay />,
};
