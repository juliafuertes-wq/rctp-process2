import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Checkbox from "../components/ui/Checkbox";

const meta: Meta = {
  title: "Catalog/Forms/Checkbox",
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj;

const PROPS = [
  { name: "checked", required: true,  type: "boolean",            defaultVal: "—",           desc: "Checked state." },
  { name: "indeterminate",             type: "boolean",            defaultVal: "false",        desc: "Shows a dash instead of a checkmark." },
  { name: "disabled",                  type: "boolean",            defaultVal: "false",        desc: "Makes the control non-interactive." },
  { name: "error",                     type: "boolean",            defaultVal: "false",        desc: "Error state styling." },
  { name: "size",                      type: "'default' | 'small'",defaultVal: "'default'",   desc: "Controls checkbox dimensions." },
  { name: "onChange",                  type: "(e) => void",        defaultVal: "—",           desc: "Change event handler." },
];

const DEMOS = [
  { label: "Unchecked",        checked: false, indeterminate: false, disabled: false, error: false, size: "default" as const },
  { label: "Checked",          checked: true,  indeterminate: false, disabled: false, error: false, size: "default" as const },
  { label: "Indeterminate",    checked: false, indeterminate: true,  disabled: false, error: false, size: "default" as const },
  { label: "Disabled empty",   checked: false, indeterminate: false, disabled: true,  error: false, size: "default" as const },
  { label: "Disabled checked", checked: true,  indeterminate: false, disabled: true,  error: false, size: "default" as const },
  { label: "Error empty",      checked: false, indeterminate: false, disabled: false, error: true,  size: "default" as const },
  { label: "Error checked",    checked: true,  indeterminate: false, disabled: false, error: true,  size: "default" as const },
  { label: "Small unchecked",  checked: false, indeterminate: false, disabled: false, error: false, size: "small" as const },
  { label: "Small checked",    checked: true,  indeterminate: false, disabled: false, error: false, size: "small" as const },
];

function CheckboxDisplay() {
  const [defaultChecked, setDefaultChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [errorChecked, setErrorChecked] = useState(false);
  const [smallChecked, setSmallChecked] = useState(false);

  return (
    <div style={{ padding: "24px 32px", background: "var(--neutral-00)", minHeight: "100vh" }}>
      {/* Header */}
      <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-normal)", marginBottom: 6, fontFamily: "var(--font-heading)" }}>
        Checkbox
      </h2>
      <p style={{ fontSize: 13, color: "var(--text-light)", marginBottom: 0 }}>
        Custom styled checkbox with support for indeterminate state, error state, disabled state, and small size.
      </p>
      <div style={{ height: 3, background: "var(--primary-500)", margin: "16px 0 0", borderRadius: 1 }} />

      {/* Live demo */}
      <div style={{ background: "var(--neutral-25)", padding: "16px 20px 20px", marginTop: 0 }}>
        <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-light)", marginBottom: 16 }}>
          Live Demo
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 40px" }}>
          {DEMOS.map((d) => (
            <div key={d.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Checkbox
                checked={d.checked}
                indeterminate={d.indeterminate}
                disabled={d.disabled}
                error={d.error}
                size={d.size}
                onChange={() => {}}
              />
              <span style={{ fontSize: 13, color: "var(--text-normal)" }}>{d.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive */}
      <div style={{ marginTop: 24, marginBottom: 24 }}>
        <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-light)", marginBottom: 16 }}>
          Interactive
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Checkbox checked={defaultChecked} onChange={(e) => setDefaultChecked(e.target.checked)} />
            <span style={{ fontSize: 13, color: "var(--text-normal)" }}>Default</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Checkbox checked={indeterminate} indeterminate={indeterminate} onChange={(e) => setIndeterminate(e.target.checked)} />
            <span style={{ fontSize: 13, color: "var(--text-normal)" }}>Indeterminate</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Checkbox checked={false} disabled onChange={() => {}} />
            <span style={{ fontSize: 13, color: "var(--text-light)" }}>Disabled</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Checkbox checked={errorChecked} error onChange={(e) => setErrorChecked(e.target.checked)} />
            <span style={{ fontSize: 13, color: "var(--text-normal)" }}>Error</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Checkbox checked={smallChecked} size="small" onChange={(e) => setSmallChecked(e.target.checked)} />
            <span style={{ fontSize: 13, color: "var(--text-normal)" }}>Small</span>
          </div>
        </div>
      </div>
      <div style={{ borderBottom: "1px solid var(--neutral-50)", marginBottom: 24 }} />

      {/* Props table */}
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 24, minWidth: 0 }}>
        <thead>
          <tr style={{ background: "var(--neutral-00)" }}>
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
  render: () => <CheckboxDisplay />,
};
