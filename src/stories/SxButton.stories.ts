import type {Meta, StoryObj} from "@storybook/react";
import {AdditionalStyles, BaseStyles, SxButton} from "../index";

const meta: Meta<typeof SxButton> = {
  title: "Components/SxButton",
  component: SxButton,
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
type Story = StoryObj<typeof SxButton>

export const Primary: Story = {
  args: {
    children: 'Primary button',
  }
}

export const Secondary: Story = {
  args: {
    children: 'Secondary button',
    mStyle: BaseStyles.secondary
  }
}

export const Success: Story = {
  args: {
    children: 'Success button',
    mStyle: BaseStyles.success
  }
}

export const Warning: Story = {
  args: {
    children: 'Warning button',
    mStyle: BaseStyles.warning
  }
}

export const Danger: Story = {
  args: {
    children: 'Danger button',
    mStyle: BaseStyles.danger
  }
}

export const Info: Story = {
  args: {
    children: 'Info button',
    mStyle: BaseStyles.info
  }
}

export const Dark: Story = {
  args: {
    children: 'Dark button',
    mStyle: BaseStyles.dark
  }
}

export const Light: Story = {
  args: {
    children: 'Light button',
    mStyle: BaseStyles.light
  }
}

export const Outline: Story = {
  args: {
    children: 'Outline button',
    xStyle: AdditionalStyles.outline
  }
}

export const Soft: Story = {
  args: {
    children: 'Soft button',
    xStyle: AdditionalStyles.soft
  }
}
