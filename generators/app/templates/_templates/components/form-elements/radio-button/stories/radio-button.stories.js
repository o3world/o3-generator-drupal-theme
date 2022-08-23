
    import RadioButton from "../radio-button.twig";
    import docs from "./radio-button.doc.mdx";

    export default {
      title: 'Forms / Radio Button',
      parameters: {
        docs: {
          page: docs,
        },
      },
      argTypes: {},
    };

    const Template = (args) => RadioButton({...args});

    export const Default = Template.bind({});

    Default.args = {

    };

