import button from "../button.twig";
import docs from "./button.doc.mdx";

export default {
  title: "Component / Buttons",
  parameters: {
    docs: {
      page: docs,
    },
  },
  argTypes:{
    icon:{
      control: {
        type: "select",
        options: ["none", "arrow"],
      },
    }
  }
};

const Template = (args) => button({...args});

 export const DefaultButton = Template.bind({});
 DefaultButton.args = {
   text: "Button",
   classes: '',
   disabled:false,
   href:'',
   icon:''
 };

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  disabled:true,
  text:'Disabled'
};

export const WithIconButton = Template.bind({});
WithIconButton.args = {
  text:'With Icon',
  icon:'arrow'
};

export const LinkedButton = Template.bind({});
LinkedButton.args = {
  text:'Linked Button',
  href:"#"
};

