
    import DropdownNav from "../dropdown-nav.twig";
    import docs from "./dropdown-nav.doc.mdx";

    export default {
      title: 'Static HTML / Dropdown Nav',
      parameters: {
        docs: {
          page: docs,
        },
      },
      argTypes: {},
    };

    const Template = (args) => DropdownNav({...args});

    export const Default = Template.bind({});

    Default.args = {

    };

