import { Meta, Story } from "@storybook/react";
import { default as FeaturedComponent } from "./Featured";

export default {
  title: "templates/Featured List",
  component: FeaturedComponent,
} as Meta;

const Template: Story = (args: any) => <FeaturedComponent {...args} />;

export const FeaturedList = Template.bind({});
FeaturedList.args = {
  title:
    "His mother had always taught him not to ever think of himself as better than others.",
};
