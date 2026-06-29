import type { Meta, StoryObj } from "@storybook/react";
import styles from "../pages/ComponentCatalog.module.css";

const meta: Meta = {
  title: "Catalog/Profile Atoms/Field Grid",
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj;

const FIELDS = [
  { label: "Entity Legal Name",   value: "Pied Piper Inc." },
  { label: "Registered Country",  value: "🇺🇸 United States" },
  { label: "Entity Type",         value: "Limited Liability Company" },
  { label: "Process Name",        value: "Standard RCTP" },
  { label: "Business Unit",       value: "Technology" },
  { label: "Third Party Owner",   value: "Richard Hendricks" },
  { label: "Tags",                value: "SaaS, US, Regional" },
  { label: "Internal Reference",  value: null },
];

function FieldGridDisplay() {
  return (
    <div style={{ padding: "24px 32px", background: "var(--neutral-00)", minHeight: "100vh" }}>
      {/* Header */}
      <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-normal)", marginBottom: 6, fontFamily: "var(--font-heading)" }}>
        Field Grid
      </h2>
      <p style={{ fontSize: 13, color: "var(--text-light)", marginBottom: 0 }}>
        4-column label/value grid used in the Overview tab of the TP profile. Labels are small-caps primary-500; values are 16px text-normal. Renders empty fields as em-dashes.
      </p>
      <div style={{ height: 3, background: "var(--primary-500)", margin: "16px 0 0", borderRadius: 1 }} />

      {/* Live demo */}
      <div style={{ background: "var(--neutral-25)", padding: "16px 20px 20px" }}>
        <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-light)", marginBottom: 16 }}>
          Live Demo
        </div>
        <div style={{ background: "var(--neutral-00)", border: "1px solid var(--neutral-50)", borderRadius: 4 }}>
          <div className={styles.fieldGrid}>
            {FIELDS.map((f) => (
              <div key={f.label}>
                <div className={styles.fieldLabel}>{f.label}</div>
                <div className={f.value ? styles.fieldValue : styles.fieldValueLight}>
                  {f.value ?? "—"}
                </div>
              </div>
            ))}
          </div>
        </div>
        <p style={{ fontSize: 11, color: "var(--neutral-400)", marginTop: 10 }}>
          Grid is 4-column on desktop. Each cell renders independently — value can be plain text, a flag string, a link, or an overdue badge.
        </p>
      </div>
    </div>
  );
}

export const AllStates: Story = {
  name: "All States",
  render: () => <FieldGridDisplay />,
};
