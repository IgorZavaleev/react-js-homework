import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Grid } from "./Grid";

export default {
  title: "Grid",
  component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  field: [
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  cellSize: "big",
};
