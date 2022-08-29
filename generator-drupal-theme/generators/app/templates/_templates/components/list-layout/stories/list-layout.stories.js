
    import ListLayout from "../list-layout.twig";
    import docs from "./list-layout.doc.mdx";

    export default {
      title: 'Static HTML / List Layout',
      parameters: {
        docs: {
          page: docs,
        },
      },
      argTypes: {},
    };

    const Template = (args) => ListLayout({...args});

    export const Default = Template.bind({});

    Default.args = {

    };

