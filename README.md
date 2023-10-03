# Storybook Addon StackBlitz
Create a one-click Pull Request environment right from your component

## Installation

yarn:
```bash
yarn add --dev @stackblitz/storybook-addon-stackblitz
```

npm:
```bash
npm install @stackblitz/storybook-addon-stackblitz --save-dev
```

pnpm:
```bash
pnpm add --save-dev @stackblitz/storybook-addon-stackblitz
```

## Usage

Add the following to your `.storybook/main.ts` exports:

```typescript
export default {
  addons: ['@storybook/addon-storysource'],
};
```

Configure the repository URL in the `.storybook/preview.ts`:
```typescript
export default {
  parameters: {
    repositoryUrl: 'https://github.com/[username]/[reponame]'
  },
};
```

In your story files set the file path for the specific story, for instance:
```typescript
export const Primary: Story = {
  args: {/* ... */},
  parameters: {
    filePath: 'src/stories/Button.tsx'
  }
};
```

If your components are placed in multiple repositories, you can also define the repository URL per the specific story:
```typescript
export const Primary: Story = {
  args: {/* ... */},
  parameters: {
    filePath: 'src/stories/Button.tsx',
    repositoryUrl: 'https://github.com/[username]/[reponame]'
  }
};
```


## Development scripts

- `yarn start` runs babel in watch mode and starts Storybook
- `yarn build` build and package your addon code

## Addon icon

(for Storybook [integration catalog](https://storybook.js.org/integrations))

![icon](https://github.com/stackblitz/storybook-addon-stackblitz/assets/1511906/0c4fe6db-5acd-4c81-878e-36ae5d1595f8)
