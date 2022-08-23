
    import Pagination from "../pagination.twig";
    import docs from "./pagination.doc.mdx";

    export default {
      title: 'Component / Pagination',
      parameters: {
        docs: {
          page: docs,
        },
      },
      argTypes: {},
    };

    const Template = (args) => Pagination({...args});

    export const TextButtons = Template.bind({});

    TextButtons.args = {
      navElements: [
        {
          type: 'text',
          listGroup: [
            {
              href: '#'
            },
            {
              href: '#'
            },
            {
              defaultPage: true,
            },
            {
              href: '#'
            },
            {
              href: '#'
            },
          ],
        }
      ]
    };


    export const ArrowButtons = Template.bind({});

    ArrowButtons.args = {
      navElements: [
        {
          type: 'arrow',
          listGroup: [
            {
              href: '#'
            },
            {
              href: '#'
            },
            {
              defaultPage: true,
            },
            {
              href: '#'
            },
            {
              href: '#'
            },
          ],
        }
      ]
    };

