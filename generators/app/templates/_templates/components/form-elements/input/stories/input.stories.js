
    import input from "../input.twig";
    import docs from "./input.doc.mdx";

    export default {
      title: 'Forms / Input',
      parameters: {
        docs: {
          page: docs,
        },
      },
      argTypes: {},
    };

    const Template = (args) => input({...args});

    export const Default = Template.bind({});

    Default.args = {

    };

