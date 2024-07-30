import type {Meta, StoryObj} from "@storybook/react";
import {AdditionalStyles, BaseStyles, SxBadge} from "../index";

const meta: Meta<typeof SxBadge> = {
  title: "Components/SxBadge",
  component: SxBadge,
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
type Story = StoryObj<typeof SxBadge>

export const Primary: Story = {
  args: {
    label: 'Primary badge',
  }
}

export const Soft: Story = {
  args: {
    label: 'Soft badge',
    xStyle: AdditionalStyles.soft
  }
}

export const Outline: Story = {
  args: {
    label: 'Outline badge',
    xStyle: AdditionalStyles.outline
  }
}

export const Secondary: Story = {
  args: {
    label: 'Secondary badge',
    mStyle: BaseStyles.secondary
  }
}

export const Dark: Story = {
  args: {
    label: 'Dark badge',
    mStyle: BaseStyles.dark
  }
}

export const Danger: Story = {
  args: {
    label: 'Danger badge',
    mStyle: BaseStyles.danger
  }
}

export const Info: Story = {
  args: {
    label: 'Info badge',
    mStyle: BaseStyles.info
  }
}

export const Light: Story = {
  args: {
    label: 'Light badge',
    mStyle: BaseStyles.light
  }
}

export const Success: Story = {
  args: {
    label: 'Success badge',
    mStyle: BaseStyles.success
  }
}

export const Warning: Story = {
  args: {
    label: 'Warning badge',
    mStyle: BaseStyles.warning
  }
}
