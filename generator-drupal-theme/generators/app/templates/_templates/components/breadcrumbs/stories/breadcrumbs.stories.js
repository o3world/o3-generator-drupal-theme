
    import Breadcrumbs from "../breadcrumbs.twig";
    import docs from "./breadcrumbs.doc.mdx";

    export default {
      title: 'Static HTML / Breadcrumbs',
      parameters: {
        docs: {
          page: docs,
        },
      },
      argTypes: {},
    };

    const Template = (args) => Breadcrumbs({...args});

    export const Default = Template.bind({});

    Default.args = {

    };

