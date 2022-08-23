
    import Tabs from "../tabs.twig";
    import docs from "./tabs.doc.mdx";

    export default {
      title: 'Component / Tabs',
      parameters: {
        docs: {
          page: docs,
        },
      },
      argTypes: {},
    };

    const Template = (args) => Tabs({...args});

    export const Default = Template.bind({});

    Default.args = {
      tabs: [
        {
          heading: 'Test Heading',
          content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin suscipit laoreet. Ut tristique nulla tempus commodo pharetra. Nam auctor, urna id consequat vulputate, ipsum ante pulvinar dolor, sed rhoncus neque enim eu ipsum. Mauris viverra interdum mattis. Integer nec molestie tellus. Phasellus nec semper nibh, eget sagittis neque.</p>'
        },
        {
          heading: 'Test Heading II',
          content: '<p>Vestibulum sollicitudin suscipit laoreet. Ut tristique nulla tempus commodo pharetra. Nam auctor, urna id consequat vulputate, ipsum ante pulvinar dolor, sed rhoncus neque enim eu ipsum. Mauris viverra interdum mattis. Integer nec molestie tellus. Phasellus nec semper nibh, eget sagittis neque.</p>'
        },
        {
          heading: 'Test Heading III',
          content: '<p>Phasellus nec semper nibh, eget sagittis neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin suscipit laoreet. Ut tristique nulla tempus commodo pharetra. Nam auctor, urna id consequat vulputate, ipsum ante pulvinar dolor, sed rhoncus neque enim eu ipsum. Mauris viverra interdum mattis. Integer nec molestie tellus. Phasellus nec semper nibh, eget sagittis neque.</p>'
        },
      ]
    };

