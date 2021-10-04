import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Field } from "./Field";

export default {
  title: "Field",
  component: Field,
} as ComponentMeta<typeof Field>;

const Template: ComponentStory<typeof Field> = (args) => <Field {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
