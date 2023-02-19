import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Burger } from "@/shared/ui";
import "@/shared/lib/styles";

const meta: ComponentMeta<typeof Burger> = {
  title: "atoms/Burger",
  component: Burger,
};

export default meta;

const Template: ComponentStory<typeof Burger> = (args) => <Burger {...args} />;
export const Active = Template.bind({});
Active.args = {
  isActive: true,
};
