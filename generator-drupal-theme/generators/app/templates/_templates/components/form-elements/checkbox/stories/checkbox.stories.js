
    import FormCheckbox from "../checkbox.twig";
    import docs from "./checkbox.doc.mdx";

    export default {
      title: 'Forms / Checkbox',
      parameters: {
        docs: {
          page: docs,
        },
      },
      argTypes: {},
    };

    const Template = (args) => FormCheckbox({...args});

    export const Default = Template.bind({});

    Default.args = {

    };

