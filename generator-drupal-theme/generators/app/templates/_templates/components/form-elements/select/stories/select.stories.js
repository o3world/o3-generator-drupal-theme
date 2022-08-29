
    import select from "../select.twig";
    import docs from "./select.doc.mdx";

    export default {
      title: 'Forms / Select',
      parameters: {
        docs: {
          page: docs,
        },
      },
      argTypes: {},
    };

    const Template = (args) => select({...args});

    export const Default = Template.bind({});

    Default.args = {

    };

