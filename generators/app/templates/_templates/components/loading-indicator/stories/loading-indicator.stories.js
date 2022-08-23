
    import LoadingIndicator from "../loading-indicator.twig";
    import docs from "./loading-indicator.doc.mdx";

    export default {
      title: 'Static HTML / Loading Indicator',
      parameters: {
        docs: {
          page: docs,
        },
      },
      argTypes: {},
    };

    const Template = (args) => LoadingIndicator({...args});

    export const Default = Template.bind({});

    Default.args = {

    };

