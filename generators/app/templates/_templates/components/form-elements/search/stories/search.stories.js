
    import Search from "../search.twig";
    import docs from "./search.doc.mdx";

    export default {
      title: 'Forms / Search',
      parameters: {
        docs: {
          page: docs,
        },
      },
      argTypes: {},
    };

    const Template = (args) => Search({...args});

    export const Default = Template.bind({});

    Default.args = {

    };

