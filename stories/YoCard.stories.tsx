import React from "react";
import { YoCard } from "../src";
import { ComponentMeta } from "@storybook/react";

export default {
  title: "Components/YoCard",
  component: YoCard
} as ComponentMeta<typeof YoCard>;

export const CardComponent = () => {
  return (
    <YoCard>
      <h1>Eu sou um card</h1>
    </YoCard>
  );
};