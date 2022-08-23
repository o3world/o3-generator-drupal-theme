
    import GenericTable from "../generic-table.twig";
    import docs from "./generic-table.doc.mdx";

    export default {
      title: 'Static HTML / Generic Table',
      parameters: {
        docs: {
          page: docs,
        },
      },
      argTypes: {},
    };

    const Template = (args) => GenericTable({...args});

    export const Default = Template.bind({});

    Default.args = {

    };

