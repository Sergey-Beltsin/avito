import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Burger } from "@/shared/ui";
import "@/shared/lib/styles";

const meta: ComponentMeta<typeof Burger> = {
  title: "atoms/Burger",
  component: Burger,
  argTypes: {
    theme: {
      defaultValue: "dark",
      options: ["dark", "light"],
    },
  },
};

export default meta;

const Template: ComponentStory<typeof Burger> = (args) => <Burger {...args} />;
export const Active = Template.bind({});
Active.args = {
  isActive: true,
};

export const Light = Template.bind({});
Light.args = {
  isActive: true,
  theme: "dark",
};

export const Dark = Template.bind({});
Dark.args = {
  theme: "dark",
  isActive: true,
};
