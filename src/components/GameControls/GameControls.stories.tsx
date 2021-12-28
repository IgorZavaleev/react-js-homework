import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { GameControls } from "@/components/GameControls/GameControls";

export default {
  title: "GameControls",
  component: GameControls,
} as ComponentMeta<typeof GameControls>;

const Template: ComponentStory<typeof GameControls> = (args) => (
  <GameControls {...args} />
);

export const Primary = Template.bind({});

Primary.args = {};
