# Storybook Addon StackBlitz
Create a one-click Pull Request environment right from your component

## How to use it?

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
