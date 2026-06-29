import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Completed: Story = {
  args: {
    label: "Completed Badge",
    variant: "completed",
  },
};

export const Pending: Story = {
  args: {
    label: "Pending Badge",
    variant: "pending",
  },
};

export const Failed: Story = {
  args: {
    label: "Failed Badge",
    variant: "failed",
  },
};
