
    import Carousel from "../carousel.twig";
    import docs from "./carousel.doc.mdx";

    export default {
      title: 'Component / Carousel',
      parameters: {
        docs: {
          page: docs,
        },
      },
      argTypes: {},
    };

    const Template = (args) => Carousel({...args});

    export const ImageText = Template.bind({});

    ImageText.args = {
      carousels: [
        {
          type: [
            'image-text',
          ],
          slides: [
              {
                image: {
                  src: 'https://picsum.photos/600/451',
                  alt: 'Random image',
                  caption: 'This is another optional image caption',
                },
              },
              {
                image: {
                  src: 'https://picsum.photos/600/452',
                  alt: 'Random image',
                  caption: '',
                },
              },
              {
                image: {
                  src: 'https://picsum.photos/600/453',
                  alt: 'Random image',
                  caption: 'Vitae elementum curabitur vitae nunc. Egestas fringilla phasellus faucibus scelerisque eleifend. Vitae elementum curabitur vitae nunc.',
                },
              },
              {
                image: {
                  src: 'https://picsum.photos/600/454',
                  alt: 'Random image',
                  caption: 'This is another optional image caption',
                },
              },
          ],
        },
      ],
    };

    export const Text = Template.bind({});

    Text.args = {
      carousels: [
        {
          type: [
            'text',
          ],
          slides: [
            {
              heading: "This is a slide heading",
              text: 'This is the body text  Fermentum dui faucibus in ornare quam viverra orci sagittis. Facilisis sed odio morbi quis. Egestas diam in arcu cursus euismod quis viverra nibh.',
            },
            {

              text: 'This slide has no heading. This is the body text of the slide, maximum of # characters.',
            },
            {
              heading: "This is a slide heading",
              text: 'Tempor id eu nisl nunc mi. Ut tellus elementum sagittis vitae. Enim facilisis gravida neque convallis a. Augue lacus viverra vitae congue eu consequat ac felis. Vel fringilla est ullamcorper eget nulla. Urna id volutpat lacus laoreet non. Proin fermentum leo vel orci porta non pulvinar.',
            },
          ],
        },
      ],
    };

    export const Image = Template.bind({});

    Image.args = {
      carousels: [
        {
          type: [
            'image',
          ],
          slides: [
            {
              image: {
                src: 'https://picsum.photos/650/450',
                alt: 'Random image',
              },
            },
            {
              image: {
                src: 'https://picsum.photos/600/400',
                alt: 'Random image',
              },
            },
            {
              image: {
                src: 'https://picsum.photos/700/450',
                alt: 'Random image',
              },
            },
            {
              image: {
                src: 'https://picsum.photos/620/450',
                alt: 'Random image',
              },
            },
          ],
        },
      ],
    };
