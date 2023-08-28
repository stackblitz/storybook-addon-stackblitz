import React, { memo, useCallback, useEffect, useState } from "react";
import { useGlobals, useParameter, useStorybookApi } from "@storybook/manager-api";
import { Icons, IconButton } from "@storybook/components";
import { ADDON_ID, PARAM_KEY, TOOL_ID } from "./constants";
import { StackBlitzLogo } from "./components/StackBlitzLogo";
import CodeflowLogo from "./components/CodeflowLogo";

export const Tool = memo(function MyAddonSelector() {
  const [globals, updateGlobals] = useGlobals();
  const githubUrl = useParameter(PARAM_KEY);
  const api = useStorybookApi();
  const [disabled, setDisabled] = useState(false)

  // TODO: get the github repository from the settings;
  // const githubUrl = `https://github.com/stackblitz/docs`;

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

  const { id } = api.getCurrentStoryData();

  const stackblitzUrl = `https://pr.new/${githubUrl}`;

  // api.on('STORY_CHANGED', () => {
  //   const { id } = api.getCurrentStoryData();
  //   // Extract the component name from the story ID.
  //   componentName = id.split('--')[0];
  // });

  console.log({disabled});

  return (
    <IconButton
      disabled={disabled}
      key={TOOL_ID}
      href={stackblitzUrl}
      target="_blank"
      title="Open in StackBlitz and make a pull request"
    >
      <CodeflowLogo />
    </IconButton>
  );
});


// addons.register('dynamicLinkButton', api => {
//   const renderLinkButton = (componentName) => {
//     const url = `https://example.com/${componentName}`;

//     const handleClick = () => {
//       window.open(url, '_blank');
//     };

//     const LinkButton = () => (
//       <button onClick={handleClick}>Visit "{componentName}"</button>
//     );

//     const container = document.createElement('div');
//     ReactDOM.render(<LinkButton />, container);
//     return container;
//   };

//   let currentComponentName = null;

//   api.on(STORY_CHANGED, () => {
//     const { id } = api.getCurrentStoryData();
//     // Extract the component name from the story ID.
//     currentComponentName = id.split('--')[0];

//     const element = renderLinkButton(currentComponentName);
//     document.getElementById('root').innerHTML = '';
//     document.getElementById('root').appendChild(element);
//   });
// });