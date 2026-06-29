import type { Meta, StoryObj } from "@storybook/react";

const TYPE_SPECIMENS = [
  { label: "Heading H1", size: "32px", lineHeight: "40px", weight: "600", family: "Simplon Norm", sample: "Third Party Risk" },
  { label: "Heading H2", size: "28px", lineHeight: "36px", weight: "600", family: "Simplon Norm", sample: "Risk Assessment" },
  { label: "Heading H3", size: "24px", lineHeight: "32px", weight: "600", family: "Simplon Norm", sample: "Due Diligence" },
  { label: "Heading H4", size: "20px", lineHeight: "28px", weight: "500", family: "Simplon Norm", sample: "Screening Results" },
  { label: "Heading H5", size: "18px", lineHeight: "26px", weight: "500", family: "Simplon Norm", sample: "Open Tasks" },
  { label: "Body Large",  size: "16px", lineHeight: "24px", weight: "400", family: "Roboto",       sample: "These existing records have a similar name to the one being created." },
  { label: "Body Medium", size: "14px", lineHeight: "22px", weight: "400", family: "Roboto",       sample: "All progress will be lost. You will be redirected to the Third Parties tab." },
  { label: "Body Small",  size: "13px", lineHeight: "20px", weight: "400", family: "Roboto",       sample: "Select one of the options to configure the onboarding process." },
  { label: "Caption",     size: "12px", lineHeight: "18px", weight: "400", family: "Roboto",       sample: "Showing results 1–20 of 140 third parties" },
  { label: "Label Large",  size: "14px", lineHeight: "20px", weight: "500", family: "Roboto",      sample: "TASK TYPE" },
  { label: "Label Medium", size: "12px", lineHeight: "18px", weight: "500", family: "Roboto",      sample: "CURRENT STATUS" },
  { label: "Label Small",  size: "11px", lineHeight: "16px", weight: "600", family: "Roboto",      sample: "RISK LEVEL" },
];

function TypographyDisplay() {
  return (
    <div style={{ padding: "24px 32px", background: "var(--neutral-25)", minHeight: "100vh" }}>
      <h2 style={{ fontSize: 22, fontWeight: 500, color: "var(--text-normal)", marginBottom: 4, fontFamily: "var(--font-heading)" }}>
        Typography
      </h2>
      <p style={{ fontSize: 13, color: "var(--text-light)", marginBottom: 20 }}>
        Type scale specimens. Fonts: Simplon Norm (headings), Roboto (body/labels), Source Code Pro (mono).
      </p>

      <div style={{ background: "var(--neutral-00)", border: "1px solid var(--neutral-50)", borderRadius: 4 }}>
        <div style={{ padding: 16 }}>
          {TYPE_SPECIMENS.map((spec) => (
            <div
              key={spec.label}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 16,
                padding: "6px 0",
                borderBottom: "1px solid var(--neutral-50)",
              }}
            >
              <div style={{ minWidth: 220, display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: "var(--text-light)", textTransform: "uppercase", letterSpacing: "0.4px" }}>
                  {spec.label}
                </span>
                <span style={{ fontSize: 11, color: "var(--neutral-400)", fontFamily: "var(--rctp-font-mono, monospace)" }}>
                  {spec.size} / {spec.lineHeight} / {spec.weight} / {spec.family}
                </span>
              </div>
              <span
                style={{
                  fontSize: spec.size,
                  lineHeight: spec.lineHeight,
                  fontWeight: spec.weight,
                  fontFamily: spec.family === "Simplon Norm" ? "var(--font-heading)" : "var(--font-body)",
                  color: "var(--text-normal)",
                }}
              >
                {spec.sample}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const meta: Meta = {
  title: "Catalog/Design Tokens/Typography",
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;

type Story = StoryObj;

export const AllTypography: Story = {
  name: "All Typography",
  render: () => <TypographyDisplay />,
};
