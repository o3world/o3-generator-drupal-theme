
    import Spacing from "../spacing.twig";
    import docs from "./spacing.doc.mdx";

    export default {
      title: 'Static HTML / Spacing',
      parameters: {
        docs: {
          page: docs,
        },
      },
      argTypes: {},
    };

    const Template = (args) => Spacing({...args});

    export const Default = Template.bind({});

    Default.args = {

    };

