import type { Renderer, ProjectAnnotations } from "@storybook/types";
import { PARAM_KEY } from "./constants";

const preview: ProjectAnnotations<Renderer> = {
  parameters: {
    // [PARAM_KEY.REPO]: 'https://github.com/[username]/[reponame]',
  }
};

export default preview;
