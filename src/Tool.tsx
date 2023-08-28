import React, { useState, MouseEvent } from "react";
import { useParameter, useStorybookApi } from "@storybook/manager-api";
import { IconButton } from "@storybook/components";
import { PARAM_KEY, TOOL_ID } from "./constants";
import CodeflowLogo from "./components/CodeflowLogo";

export const Tool = function MyAddonSelector() {
  const githubUrl = useParameter(PARAM_KEY);
  const api = useStorybookApi();
  const [disabled, setDisabled] = useState(false)

  const currentStory = api.getCurrentStoryData();

  if (!currentStory) {
    return null;
  }

  if (!githubUrl && !disabled) {
    console.warn(`"${PARAM_KEY}" parameter not defined. Make sure to configure it in your story.`);
    setDisabled(true);
  } else if (githubUrl && disabled) {
    setDisabled(false);
  }

  const stackblitzUrl = `https://pr.new/${githubUrl}`;

  return (
    <IconButton
      disabled={disabled}
      key={TOOL_ID}
      href={stackblitzUrl}
      onClick={(e: MouseEvent) => disabled && e.preventDefault()}
      target="_blank"
      title="Open in StackBlitz and make a pull request"
    >
      <CodeflowLogo />
    </IconButton>
  );
};