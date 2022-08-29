
    import CallToAction from "../call-to-action.twig";
    import docs from "./call-to-action.doc.mdx";

    export default {
      title: 'Component / Call To Action',
      parameters: {
        docs: {
          page: docs,
        },
      },
      argTypes: {},
    };

    const Template = (args) => CallToAction({...args});

    export const Default = Template.bind({});

    Default.args = {
      heading: 'This is a heading',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat urna et diam porta, vel venenatis felis elementum. Nulla non ante eros. Suspendisse quis ullamcorper nibh, id bibendum urna.',
      link: {
          text: 'Call to Action',
          url: "http://google.com",
      }
    };

