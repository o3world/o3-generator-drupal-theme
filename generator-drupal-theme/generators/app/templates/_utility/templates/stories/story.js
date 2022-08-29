module.exports = (kebabCaseName, paschalCaseName, titleCase) => ({
    content: `
    import ${paschalCaseName} from "../${kebabCaseName}.twig";
    import docs from "./${kebabCaseName}.doc.mdx";

    export default {
      title: '${titleCase}',
      parameters: {
        docs: {
          page: docs,
        },
      },
      argTypes: {},
    };

    const Template = (args) => ${paschalCaseName}({...args});

    export const Default = Template.bind({});

    Default.args = {

    };

  `,
    extension: `.stories.js`,
  });
