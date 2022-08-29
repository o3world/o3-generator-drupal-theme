
    import Card from "../card.twig";
    import docs from "./card.doc.mdx";

    export default {
      title: 'Component / Card',
      parameters: {
        docs: {
          page: docs,
        },
      },
      argTypes: {},
    };

    const Template = (args) => Card({...args});

    export const FullCardLink = Template.bind({});

    FullCardLink.args = {
      cards: [
        {
          link: true,
          href: '#',
          title: 'Full Card Link',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          btn: {
            text: 'Read More',
            srText: 'About Full Card Link'
          }
        }
      ]
    };


    export const FullCardLinkImage = Template.bind({});

    FullCardLinkImage.args = {
      cards: [
        {
          link: true,
          href: '#',
          image: {
            src: 'https://picsum.photos/800/400',
            alt: 'Alternative text goes here.'
          },
          date: {
            datetime: '2018-12-08',
            text: 'Dec. 08 2018',
          },
          title: 'Full Card Link with Date and Image',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          btn: {
            text: 'Read More',
            srText: 'About Full Card Link with Date and Image'
          }
        }
      ]
    };
    export const CardWithButtonDate = Template.bind({});

    CardWithButtonDate.args = {
      cards: [
        {
          date: {
            datetime: '2019-15-08',
            text: 'Aug. 15 2019',
          },
          title: 'Card with Button Link and Date',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          btn: {
            href: '#',
            text: 'Read More',
            srText: 'About Card with Button Link and Date'
          }
        }
      ]
    };
    export const CardWithButton = Template.bind({});

    CardWithButton.args = {
      cards: [
        {
          link: true,
          href: '#',
          title: 'Card with Button Link',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          btn: {
            text: 'Read More',
            srText: 'About Card with Button Link'
          }
        }
      ]
    };
