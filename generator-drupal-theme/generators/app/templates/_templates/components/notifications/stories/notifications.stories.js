
    import Notifications from "../notifications.twig";
    import docs from "./notifications.doc.mdx";

    export default {
      title: 'Component / Notifications',
      parameters: {
        docs: {
          page: docs,
        },
      },
      argTypes: {},
    };

    const Template = (args) => Notifications({...args});

    export const Success = Template.bind({});

    Success.args = {
      notifications: [
        {
          type: "success",
          text: "This is a dismissible success notification",
          dismissButton: true
        }
      ]
    };

    export const Info = Template.bind({});

    Info.args = {
      notifications: [
        {
          type: "info",
          text: "This is a dismissible info notification",
          dismissButton: true
        },

      ]
    };
    export const Warning = Template.bind({});

    Warning.args = {
      notifications: [

        {
          type: "warning",
          text: "This is a dismissible warning notification",
          dismissButton: true
        }
      ]
    };
    export const Error = Template.bind({});

    Error.args = {
      notifications: [
        {
          type: "error",
          text: "This is a dismissible error notification",
          dismissButton: true
        }
      ]
    };
