module.exports = (kebabCaseName, paschalCaseName, titleCase) => ({
    content: `import { Canvas, Story } from '@storybook/addon-docs';

# ${titleCase}

<Canvas>
    <Story id="${kebabCaseName}--default"/>
</Canvas>
  `,
    extension: `.doc.mdx`,
  });
