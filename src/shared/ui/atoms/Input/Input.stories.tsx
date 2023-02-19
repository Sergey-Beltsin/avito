import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "@/shared/ui";
import "@/shared/lib/styles";

const meta: ComponentMeta<typeof Input> = {
  title: "ui/Input",
  component: Input,
  argTypes: {
    size: {
      defaultValue: "large",
      options: ["large", "small", "medium"],
    },
    theme: {
      defaultValue: "whiteBlue",
      options: ["gray", "whiteBlue"],
    },
  },
};

export default meta;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;
export const Gray = Template.bind({});
Gray.args = {
  theme: "gray",
  placeholder: "Gray input",
};

export const WhiteBlue = Template.bind({});
WhiteBlue.args = {
  theme: "whiteBlue",
  placeholder: "WhiteBlue input",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  placeholder: "Large input",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  placeholder: "Medium input",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  placeholder: "small input",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  placeholder: "Disabled input",
};
