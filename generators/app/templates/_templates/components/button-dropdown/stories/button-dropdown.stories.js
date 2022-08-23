
    import ButtonDropdown from "../button-dropdown.twig";
    import docs from "./button-dropdown.doc.mdx";

    export default {
      title: 'Component / Button Dropdown',
      parameters: {
        docs: {
          page: docs,
        },
      },
      argTypes: {},
    };

    const Template = (args) => ButtonDropdown({...args});

    export const Default = Template.bind({});

    Default.args = {
      dropdowns: [
        {
          btnText: 'Dropdown 1',
          list: [
            {
              href: '#',
              text: 'This is an item',
            },
            {
              href: '#',
              text: 'This is an item',
            },
            {
              href: '#',
              text: 'This is an item',
            },
            {
              href: '#',
              text: 'This is an item',
            },
            {
              href: '#',
              text: 'This is an item',
            },
          ]
        },
        {
          btnText: 'Dropdown 2',
          list: [
            {
              href: '#',
              text: 'This is an item',
            },
            {
              href: '#',
              text: 'This is an item',
            },
            {
              href: '#',
              text: 'This is an item',
            },
            {
              href: '#',
              text: 'This is an item',
            },
            {
              href: '#',
              text: 'This is an item',
            },
          ]
        },
      ]
    };

