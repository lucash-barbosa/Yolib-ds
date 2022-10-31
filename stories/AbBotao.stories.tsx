import React from "react";
import { YoButton, YoButtonProps } from "../src";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/YoButton",
  component: YoButton
} as ComponentMeta<typeof YoButton>;

const Template: ComponentStory<typeof YoButton> = (args) => <YoButton {...args}/>;

export const Primary = Template.bind({});

Primary.args = {
  text: "YoButton Primary",
  kind: "primary",
} as YoButtonProps;

export const Secundary = Template.bind({});

Secundary.args = {
  text: "YoButton Secundary",
  kind: "secundary",
} as YoButtonProps;