import { ComponentMeta, ComponentStory } from "@storybook/react";
import { HeartForLikes } from "./index";

const meta: ComponentMeta<typeof HeartForLikes> = {
  title: "atoms/HeartForLikes",
  component: HeartForLikes,
  argTypes: {
    size: {
      defaultValue: "medium",
      options: ["small", "medium"],
      control: {
        type: "radio",
      },
    },
  },
};
export default meta;

const Template: ComponentStory<typeof HeartForLikes> = (args) => <HeartForLikes {...args} />;
export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Gray = Template.bind({});
Gray.args = {
  theme: "gray",
};

export const Blue = Template.bind({});
Blue.args = {
  theme: "blue",
  isClicked: true,
};
