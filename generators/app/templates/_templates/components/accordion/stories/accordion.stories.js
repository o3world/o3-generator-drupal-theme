import Accordion from "../accordion.twig";
import docs from "./accordion.doc.mdx"

export default {
  title: "Component / Accordion",
  parameters: {
    docs: {
      page: docs,
    },
  },
  argTypes:{

  }
};

const Template = (args) => Accordion({...args});

 export const Default = Template.bind({});
 Default.args = {
  panels: [
    {
      heading: 'Test Heading',
      content: '<p>lkdsjfkldsnflkdsnfsdmn kdnklsnfl lksjgkl </p>'
    },
    {
      heading: 'Test Heading II',
      content: '<p>lkdsjfkldsnflkdsnfsdmn kdnklsnfl lksjgkl </p>'
    },
    {
      heading: 'Test Heading III',
      content: '<p>lkdsjfkldsnflkdsnfsdmn kdnklsnfl lksjgkl </p>'
    },
  ]
 };
