
    import textarea from "../textarea.twig";
    import docs from "./textarea.doc.mdx";

    export default {
      title: 'Forms / Textarea',
      parameters: {
        docs: {
          page: docs,
        },
      },
      argTypes: {},
    };

    const Template = (args) => textarea({...args});

    export const Default = Template.bind({});

    Default.args = {

    };

