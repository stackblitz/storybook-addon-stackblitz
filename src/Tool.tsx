import React, { memo, useCallback, useEffect } from "react";
import { useGlobals, useStorybookApi } from "@storybook/manager-api";
import { Icons, IconButton } from "@storybook/components";
import { ADDON_ID, PARAM_KEY, TOOL_ID } from "./constants";
import { StackBlitzLogo } from "./components/StackBlitzLogo";
import CodeflowLogo from "./components/CodeflowLogo";

export const Tool = memo(function MyAddonSelector() {
  const [globals, updateGlobals] = useGlobals();
  const api = useStorybookApi();

  // TODO: get the github repository from the settings;
  const githubUrl = `https://github.com/stackblitz/docs`;

  const currentStory = api.getCurrentStoryData();

  if (!currentStory) {
    return null;
  }

  const { id } = api.getCurrentStoryData();
  const componentName = id.split('--')[0];
  const stackblitzUrl = `https://pr.new/${githubUrl}`;

  // api.on('STORY_CHANGED', () => {
  //   const { id } = api.getCurrentStoryData();
  //   // Extract the component name from the story ID.
  //   componentName = id.split('--')[0];
  // });


  return (
    <IconButton
      key={TOOL_ID}
      active={true}
      href={stackblitzUrl}
      target="_blank"
      title="Create PR"
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