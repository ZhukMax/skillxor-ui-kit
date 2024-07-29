import type {Meta, StoryObj} from "@storybook/react";
import {AdditionalStyles, BaseStyles, SxAlert} from "../index";

const meta: Meta<typeof SxAlert> = {
  title: "Components/SxAlert",
  component: SxAlert,
  tags: ["autodocs"],
  argTypes: {
    mStyle: {
      control: 'select',
      options: Object.values(BaseStyles),
      table: {
        defaultValue: { summary: BaseStyles.primary }
      }
    },
    xStyle: {
      control: 'select',
      options: Object.values(AdditionalStyles),
    }
  }
}

export default meta
type Story = StoryObj<typeof SxAlert>

export const Primary: Story = {
  args: {
    children: 'Primary alert! You should check in on some of those fields below.',
  }
}

export const Secondary: Story = {
  args: {
    children: 'Secondary alert! You should check in on some of those fields below.',
    mStyle: BaseStyles.secondary
  }
}

export const Dark: Story = {
  args: {
    children: 'Dark alert! You should check in on some of those fields below.',
    mStyle: BaseStyles.dark
  }
}

export const Danger: Story = {
  args: {
    children: 'Danger alert! You should check in on some of those fields below.',
    mStyle: BaseStyles.danger
  }
}
