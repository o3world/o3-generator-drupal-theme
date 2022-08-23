
    import ToolTip from "../tool-tip.twig";
    import docs from "./tool-tip.doc.mdx";

    export default {
      title: 'Component / Tool Tip',
      parameters: {
        docs: {
          page: docs,
        },
      },
      argTypes: {},
    };

    const Template = (args) => ToolTip({...args});

    export const Default = Template.bind({});

    Default.args = {
      sampleMode: true,
      content: 'This is a tooltip.<br>Move your mouse.',
    };

