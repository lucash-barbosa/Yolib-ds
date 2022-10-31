import React from "react";
import { YoOptionsGroup, YoOptionsGroupProps } from "../src";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/YoOptionGroup",
  component: YoOptionsGroup
} as ComponentMeta<typeof YoOptionsGroup>;

const Template: ComponentStory<typeof YoOptionsGroup> = (args) => <YoOptionsGroup {...args}/>;

export const Default = Template.bind({});

Default.args = {
  options: [
    {
      id: 1,
      title: "E-book",
      body: "R$ 00,00",
      footer: ".pdf, .epub, .mob"
    },
    {
      id: 2,
      title: "Impresso",
      body: "R$ 00,00",
      footer: ".pdf, .epub, .mob"
    },
    {
      id: 3,
      title: "Impresso + E-book",
      body: "R$ 00,00",
      footer: ".pdf, .epub, .mob"
    }
  ]
} as YoOptionsGroupProps;