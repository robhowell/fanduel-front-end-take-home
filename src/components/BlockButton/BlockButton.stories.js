import React from "react";
import { action } from "@storybook/addon-actions";
import BlockButton from "./BlockButton";

export default {
  title: "BlockButton",
  component: BlockButton,
};

export const basicButton = () => (
  <BlockButton onClick={action("clicked")}>Basic button</BlockButton>
);
