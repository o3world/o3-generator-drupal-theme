
    import Quotes from "../quotes.twig";
    import docs from "./quotes.doc.mdx";

    export default {
      title: 'Component / Quotes',
      parameters: {
        docs: {
          page: docs,
        },
      },
      argTypes: {},
    };

    const Template = (args) => Quotes({...args});

    export const Default = Template.bind({});


    Default.args = {
      quotes: [
        {
          text: 'Use the blockquote element for longer and more complex quotes. Blockquotes can contain paragraphs, headings, and other text structure elements. The cite element is used to refer to the source of the quote.',
          citation: 'Citation Name'
        },
      ]
    };

    export const Detailed = Template.bind({});

    Detailed.args = {
      quotes: [
        {
          text: 'This quote utilizes a figcaption element instead of a cite element in order to show more detail about the source.',
          image: {
            src: 'https://picsum.photos/300',
            alt: 'Random image',
          },
          citation: {
            name: 'Citation Name',
            title: 'Citation Title',
          },
        }
      ]
    };
