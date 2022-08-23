
    import MediaObject from "../media-object.twig";
    import docs from "./media-object.doc.mdx";

    export default {
      title: 'Component / Media Object',
      parameters: {
        docs: {
          page: docs,
        },
      },
      argTypes: {},
    };

    const Template = (args) => MediaObject({...args});

    export const Default = Template.bind({});

    Default.args = {
      mediaObjects: [
        {
          image: {
            src: 'https://picsum.photos/500/500',
            alt: 'Random image',
          },
          title: 'This is the title',
          text: 'This object uses the image-bottom modifier and has the image on the bottom on small screen sizes.',
          cta: {
            href: '#',
            label: 'this is a link',
            text: 'Click me'
          },
        },
      ]
    };


    export const ImageRightTop = Template.bind({});

    ImageRightTop.args = {
      mediaObjects: [
        {
          layouts: [
            'right','top'
          ],
          image: {
            src: 'https://picsum.photos/500/500',
            alt: 'Random image',
          },
          title: 'This is the title',
          text: 'This object uses the image-bottom modifier and has the image on the bottom on small screen sizes.',
          cta: {
            href: '#',
            label: 'this is a link',
            text: 'Click me'
          },
        },
      ]
    }

    export const ImageLeftBottom = Template.bind({});

    ImageLeftBottom.args = {
      mediaObjects: [
        {
          layouts: [
            'left','bottom'
          ],
          image: {
            src: 'https://picsum.photos/500/500',
            alt: 'Random image',
          },
          title: 'This is the title',
          text: 'This object uses the image-bottom modifier and has the image on the bottom on small screen sizes.',
          cta: {
            href: '#',
            label: 'this is a link',
            text: 'Click me'
          },
        },
      ]
    }


