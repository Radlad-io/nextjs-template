import { Meta, Story } from "@storybook/react";
import { default as CardListComponent } from "./CardList";

export default {
  title: "Organisms/Card List",
  component: CardListComponent,
} as Meta;

const Template: Story = (args: any) => <CardListComponent {...args} />;

export const CardList = Template.bind({});
CardList.args = {
  title:
    "His mother had always taught him not to ever think of himself as better than others.",
};
