
    import Video from "../video.twig";
    import docs from "./video.doc.mdx";

    export default {
      title: 'Component / Video',
      parameters: {
        docs: {
          page: docs,
        },
      },
      argTypes: {},
    };

    const Template = (args) => Video({...args});

    export const Default = Template.bind({});

    Default.args = {
      youtubeId: "-tbjPxtBfhM",
      placeholder: {
          src: "https://via.placeholder.com/1280x720",
          alt: "Sample Alt Text"
      }
    };

