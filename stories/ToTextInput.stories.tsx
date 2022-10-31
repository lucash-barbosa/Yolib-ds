import React from "react";
import { YoTextInput, YoTextInputProps } from "../src";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/YoTextInput",
  component: YoTextInput
} as ComponentMeta<typeof YoTextInput>;

const Template: ComponentStory<typeof YoTextInput> = (args) => <YoTextInput {...args}/>;

export const Default = Template.bind({});
Default.args = {
  name: "email",
  label: "E-mail",
  placeholder: "seuemail@maneiro.com.br",
  type: "text",
} as YoTextInputProps;