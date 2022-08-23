
    import Pricing from "../pricing.twig";
    import docs from "./pricing.doc.mdx";

    export default {
      title: 'Component / Pricing',
      parameters: {
        docs: {
          page: docs,
        },
      },
      argTypes: {},
    };

    const Template = (args) => Pricing({...args});

    export const Default = Template.bind({});

    Default.args = {
      prices: [
        {
          price: '300.00',
        }
      ],
    };

    export const SalePricing = Template.bind({});

    SalePricing.args = {
      prices: [
        {
          sale: {
            price: '400.00',
            salePrice: '300.00',
          }
        }
      ],
    };

