import React, { FC, HTMLAttributes, ReactChild } from "react";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Thing: FC<Props> = ({ children }) => {
  return <div>{children || "the snozzberries taste like snozzberries"}</div>;
};

export * from "./components/YoButton";
export * from "./components/YoCard";
export * from "./components/YoOptionsGroup";
export * from "./components/YoTag";
export * from "./components/YoTextInput";
export * from "./components/YoAmountInput";