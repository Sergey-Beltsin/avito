import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from ".";

const meta: ComponentMeta<typeof Button> = {
  title: "atoms/Button",
  component: Button,
};

export default meta;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Accent = Template.bind({});
Accent.args = {
  children: "Accent button",
  theme: "default",
};

export const Outline = Template.bind({});
Outline.args = {
  children: "Outline button",
  theme: "outline",
};
