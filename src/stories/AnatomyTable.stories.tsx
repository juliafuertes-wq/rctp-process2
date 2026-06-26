import type { Meta, StoryObj } from "@storybook/react";
import AnatomyTable from "../components/catalog/AnatomyTable";

const meta: Meta<typeof AnatomyTable> = {
  title: "Catalog/AnatomyTable",
  component: AnatomyTable,
};
export default meta;

type Story = StoryObj<typeof AnatomyTable>;

export const ProfileSidenav: Story = {
  render: () => (
    <div style={{
      background: 'var(--neutral-00)',
      border: '1px solid var(--neutral-50)',
      borderRadius: 4,
    }}>
      <div style={{
        padding: '16px 16px 12px',
        borderBottom: '1px solid var(--neutral-50)',
      }}>
        <h3 style={{
          fontSize: 16,
          fontWeight: 600,
          color: 'var(--text-normal)',
          fontFamily: 'var(--font-heading)',
          margin: '0 0 4px',
        }}>
          Anatomy
        </h3>
      </div>
      <AnatomyTable rows={[
        { part: 'Summary link',     purpose: 'Top-level entry point — always present, takes user to the profile overview.', notes: 'Bold when active; sits above the first divider.' },
        { part: 'Workflow steps',   purpose: 'Sequenced process steps with status dots and explicit status labels.',           notes: 'Dot color: green = complete, amber = in progress, red = not started, grey = not required, neutral-200 = blocked.' },
        { part: 'Status dot',       purpose: 'Color-coded circle anchor for the step row and the trunk line.',                  notes: '12px circle. Connector line below segments parent-to-children and step-to-step.' },
        { part: 'Status label',     purpose: 'Explicit textual state (Completed / In Progress / Not Started / Pending).',       notes: 'Replaces the dot-only tooltip approach. Sits below the step title.' },
        { part: 'Substep tree',     purpose: 'Children attach via a curved hook to a vertical trunk line indented under the parent.', notes: 'Trunk turns blue when the next active item lives inside this group; truncated to the row that holds the Next chip.' },
        { part: 'Caret',            purpose: 'Expand / collapse indicator on parents that have substeps.',                       notes: 'Material expand_more icon, rotates 180° when open. Click anywhere on the row to toggle.' },
        { part: 'Open-module icon', purpose: 'Quick link to the parent module page even when substeps are expanded.',            notes: 'Material open_in_new icon next to the status label. Only shown on parents with substeps.' },
        { part: 'Next chip',        purpose: 'Marks the next actionable step or substep.',                                        notes: 'Single chip per workflow. When the parent has substeps the chip moves to the first incomplete substep.' },
        { part: 'Partner icon',     purpose: 'Trailing badge marking steps powered by an external integration.',                  notes: 'Hover shows partner name in a tooltip (e.g. "Powered by Duns & Bradstreet").' },
        { part: 'New tag',          purpose: 'Highlights recently introduced steps.',                                              notes: 'Pill-shaped, sits inline with the step title in the top row.' },
        { part: 'Section links',    purpose: 'Profile-scoped pages (Properties, Documents, Audit, etc.).',                        notes: 'Below the second divider. Active state uses primary-500 background.' },
        { part: 'Divider',          purpose: 'Separates the three regions (Summary / Steps / Sections).',                          notes: '1px neutral-50 horizontal line, full sidebar width.' },
      ]} />
    </div>
  ),
};
