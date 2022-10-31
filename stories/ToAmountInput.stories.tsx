import React from "react";
import { YoAmountInput, YoAmountInputProps } from "../src";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/YoAmountInput",
  component: YoAmountInput
} as ComponentMeta<typeof YoAmountInput>;

const Template: ComponentStory<typeof YoAmountInput> = (args) => <YoAmountInput {...args}/>;

export const Default = Template.bind({});
Default.args = {
  label: "Quantidade",
} as YoAmountInputProps;