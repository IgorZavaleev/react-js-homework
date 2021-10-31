import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NewsPresentation } from "./NewsPresentation";
import img from "./storybookNewsPresentationImg.jpg";

export default {
  title: "News",
  component: NewsPresentation,
} as ComponentMeta<typeof NewsPresentation>;

export const Loading: ComponentStory<typeof NewsPresentation> = (args) => (
  <NewsPresentation id={1} isLoaded={false} />
);

export const Loaded: ComponentStory<typeof NewsPresentation> = (args) => (
  <NewsPresentation
    id={1}
    isLoaded={true}
    body="This is breaking news body."
    title="Breaking news header"
    img={img}
  />
);
