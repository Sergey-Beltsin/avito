import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "./index";
import "@/shared/lib/styles";

const meta: ComponentMeta<typeof Button> = {
  title: "atoms/Button",
  component: Button,
  argTypes: {
    theme: {
      defaultValue: "blue",
      options: ["blue", "gray", "violet", "green"],
    },
    size: {
      defaultValue: "large",
      options: ["large", "medium", "small"],
    },
    radius: {
      defaultValue: "none",
      options: ["none", "medium"],
    },
  },
};

export default meta;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const Large = Template.bind({});
Large.args = {
  size: "large",
  children: "Large button",
};
export const IsLoading = Template.bind({});
IsLoading.args = {
  isLoading: true,
  children: "IsLoading button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: "Disabled button",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  children: "Medium button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  children: "Small button",
};

export const Oval = Template.bind({});
Oval.args = {
  radius: "medium",
  children: "Oval button",
};

export const Rectangle = Template.bind({});
Rectangle.args = {
  radius: "none",
  children: "Rectangle button",
};

export const Blue = Template.bind({});
Blue.args = {
  theme: "blue",
  children: "Blue button",
};

export const Green = Template.bind({});
Green.args = {
  theme: "green",
  children: "Green button",
};

export const Gray = Template.bind({});
Gray.args = {
  theme: "gray",
  children: "Gray button",
};

export const Violet = Template.bind({});
Violet.args = {
  theme: "violet",
  children: "Violet button",
};
