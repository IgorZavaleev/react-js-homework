import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { News } from "./News";

export default {
  title: "News",
  component: News,
} as ComponentMeta<typeof News>;

export const NumberOne: ComponentStory<typeof News> = (args) => <News id={1} />;
export const NumberTwo: ComponentStory<typeof News> = (args) => <News id={2} />;
