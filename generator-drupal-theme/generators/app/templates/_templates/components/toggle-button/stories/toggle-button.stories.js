
    import ToggleButton from "../toggle-button.twig";
    import docs from "./toggle-button.doc.mdx";

    export default {
      title: 'Component / Toggle Button',
      parameters: {
        docs: {
          page: docs,
        },
      },
      argTypes: {},
    };

    const Template = (args) => ToggleButton({...args});

    export const Default = Template.bind({});

    Default.args = {
      toggleButtons: [
        {
          label: "Toggle Button 1",
        },
        {
          label: "Toggle Button 2",
        },
      ],
    };

