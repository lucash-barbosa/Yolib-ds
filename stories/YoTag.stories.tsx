import React from "react";
import { YoTag, YoTagProps } from "../src";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/YoTag",
  component: YoTag
} as ComponentMeta<typeof YoTag>;

const Template: ComponentStory<typeof YoTag> = (args) => <YoTag {...args}/>;

export const Default = Template.bind({});
Default.args = {
  text: "Tag",
} as YoTagProps;