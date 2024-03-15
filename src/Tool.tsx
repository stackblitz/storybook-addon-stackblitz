import React, { useState, MouseEvent } from "react";
import { useParameter, useStorybookApi } from "@storybook/manager-api";
import { IconButton, Link } from "@storybook/components";
import { PARAM_KEY, TOOL_ID } from "./constants";
import CodeflowLogo from "./components/CodeflowLogo";

export const Tool = function MyAddonSelector() {
  const repositoryUrl = useParameter<string>(PARAM_KEY.REPO);
  const branch = useParameter<string>(PARAM_KEY.BRANCH, 'main');
  const filePath = useParameter<string>(PARAM_KEY.FILE_PATH);

  const api = useStorybookApi();
  const [disabled, setDisabled] = useState(false)

  const currentStory = api.getCurrentStoryData();

  if (!currentStory) {
    return null;
  }

  console.log({repositoryUrl})
  if (!repositoryUrl && !disabled) {
    console.warn(`"${PARAM_KEY}" parameter not defined. Make sure to configure it in your story.`);
    setDisabled(true);
  } else if (repositoryUrl && disabled) {
    setDisabled(false);
  }

  let stackblitzUrl = `https://pr.new/${repositoryUrl}`;
  if (filePath) {
    stackblitzUrl = `${stackblitzUrl}/blob/${branch}/${filePath}`;
    /* 
     * We've just addded `/` between all segments not caring if user already appended or prepanded them,
     * so let's remove any possible double `//` (not preceded by `:` so we don't mess up the `https://`)
     */
    stackblitzUrl = stackblitzUrl.replaceAll(/(?<!:)\/\//g, '/')
  }

  if (disabled) {
    return <IconButton key={TOOL_ID} title="No repository URL defined" disabled><CodeflowLogo style={{width: 18, margin: '0 -2px'}} /></IconButton>;
  }

  return (
    <Link
      key={TOOL_ID}
      href={stackblitzUrl}
      target="_blank"
      title="Open in StackBlitz instant dev environment"
    >
      <CodeflowLogo style={{width: 18, margin: '0 -2px'}} />
    </Link>
  );
};