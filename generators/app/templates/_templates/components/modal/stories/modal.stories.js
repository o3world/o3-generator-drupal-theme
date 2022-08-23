
    import Modal from "../modal.twig";
    import docs from "./modal.doc.mdx";

    export default {
      title: 'Component / Modal',
      parameters: {
        docs: {
          page: docs,
        },
      },
      argTypes: {},
    };

    const Template = (args) => Modal({...args});

    export const Default = Template.bind({});

    Default.args = {
      modals: [
        {
          id: "modal-1",
          buttonLabel: "Open Modal",
          body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        }
      ]
    };

    export const ModalWithScrollingCopy = Template.bind({});

    ModalWithScrollingCopy.args = {
      modals: [
        {
          id: "modal-2",
          buttonLabel: "Open Modal with scrolling copy",
          body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        }
      ]
    };

