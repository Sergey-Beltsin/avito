import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Logo } from ".";

const meta: ComponentMeta<typeof Logo> = {
  title: "ui/Logo",
  component: Logo,
};

export default meta;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;
export const Large = Template.bind({});
Large.args = {
  size: "large",
};
export const Small = Template.bind({});
Small.args = {
  size: "small",
};
