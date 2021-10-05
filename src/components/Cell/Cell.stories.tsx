import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Cell } from "./Cell";

export default {
  title: "Cell",
  component: Cell,
} as ComponentMeta<typeof Cell>;

const Template: ComponentStory<typeof Cell> = (args) => <Cell {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  coords: [1, 1],
};
