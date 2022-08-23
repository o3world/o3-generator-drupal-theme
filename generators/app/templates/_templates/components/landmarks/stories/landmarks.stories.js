
    import Landmarks from "../landmarks.twig";
    import docs from "./landmarks.doc.mdx";

    export default {
      title: 'Static HTML / Landmarks',
      parameters: {
        docs: {
          page: docs,
        },
      },
      argTypes: {},
    };

    const Template = (args) => Landmarks({...args});

    export const Default = Template.bind({});

    Default.args = {

    };

