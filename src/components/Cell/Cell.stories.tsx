import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Cell } from "./Cell";

export default {
  title: "Cell",
  component: Cell,
} as ComponentMeta<typeof Cell>;

const Template: ComponentStory<typeof Cell> = (args) => <Cell {...args} />;

export const SmallDead = Template.bind({});
SmallDead.args = {
  coords: [1, 1],
  size: "small",
};

export const SmallAlive = Template.bind({});
SmallAlive.args = {
  coords: [1, 1],
  size: "small",
  state: 1,
};

export const MediumDead = Template.bind({});
MediumDead.args = {
  coords: [1, 1],
  size: "medium",
};

export const BigDead = Template.bind({});
BigDead.args = {
  coords: [1, 1],
  size: "big",
};
