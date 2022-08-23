
    import multiColumnForm from "../multi-column-form.twig";
    import docs from "./multi-column-form.doc.mdx";

    export default {
      title: 'Forms / Multi Column Form',
      parameters: {
        docs: {
          page: docs,
        },
      },
      argTypes: {},
    };

    const Template = (args) => multiColumnForm({...args});

    export const Default = Template.bind({});

    Default.args = {
      inputs: [
        {
          label: 'First Name',
          type: 'text',
          layouts: [
            'twocol',
          ],
        },
        {
          label: 'Last Name',
          type: 'text',
          layouts: [
            'twocol',
          ],
        },
        {
          label: 'Email Address',
          type: 'email',
        },
        {
          label: 'Address Line 1',
          type: 'text',
        },
        {
          label: 'Address Line 2',
          type: 'text',
        },
        {
          label: 'City',
          type: 'text',
          layouts: [
            'threecol',
          ],
        },
        {
          label: 'State',
          type: 'select',
          selectOptions: [
            {
              value: 'Select an Option',
              disabled: true,
              hidden: true,
              selected: true,
            },
            {
              value: 'First Option',
            },
            {
              value: 'Second Option',
            },
            {
              value: 'Third Option',
            }
          ],
          layouts: [
            'threecol',
          ],
        },
        {
          label: 'Zip Code',
          type: 'text',
          layouts: [
            'threecol',
          ],
        },
        {
          type: 'submit',
          value: 'Submit',
          class: 'btn',
        }
      ],
    };

