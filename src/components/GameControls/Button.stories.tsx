import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const NormalButton = Template.bind({});

NormalButton.args = {
  caption: "Normal",
};

export const SelectedButton = Template.bind({});

SelectedButton.args = {
  caption: "Selected",
  selected: true,
};

export const DisabledButton = Template.bind({});

DisabledButton.args = {
  caption: "Disabled",
  disabled: true,
};
