
    import Footnotes from "../footnotes.twig";
    import docs from "./footnotes.doc.mdx";

    export default {
      title: 'Component / Footnotes',
      parameters: {
        docs: {
          page: docs,
        },
      },
      argTypes: {},
    };

    const Template = (args) => Footnotes({...args});

    export const Default = Template.bind({});

    Default.args = {
      footnotes: [
        {
          classList: 'footnote__item',
          linkId: 'footnote-1',
          linkHref: 'https://vimeo.com/68470326',
          describedBy: 'ext-site',
          linkText: 'How Designers Destroyed the World',
          text: 'Mike Monteiro, Webstock <time>2013</time>',
          backLinkHref: '#footnote-ref-1',
          backLinkAriaLabel: 'Back to content',
          backLinkContent: '↩',
          counter: 1,
        },
        {
          classList: 'footnote__item',
          linkId: 'footnote-2',
          linkHref: 'https://aneventapart.com/news/post/performance-as-user-experience-by-aaron-gustafson-aea-video',
          describedBy: 'ext-site',
          linkText: 'Performance as User Experience',
          text: 'Aaron Gustafson, An Event Apart <time>2017</time>',
          backLinkHref: '#footnote-ref-2',
          backLinkAriaLabel: 'Back to content',
          backLinkContent: '↩',
          counter: 2,
        },
        {
          classList: 'footnote__item',
          linkId: 'footnote-3',
          linkHref: 'https://aneventapart.com/news/post/the-joy-of-optimizing-images-by-una-kravets-aea-video',
          describedBy: 'ext-site',
          linkText: 'The Joy of Image Optimization',
          text: 'Una Kravets, An Event Apart <time>2017</time>',
          backLinkHref: '#footnote-ref-3',
          backLinkAriaLabel: 'Back to content',
          backLinkContent: '↩',
          counter: 3,
        },
        {
          classList: 'footnote__item',
          linkId: 'footnote-4',
          linkHref: 'https://youtu.be/u1v_G1yQhTU',
          describedBy: 'ext-site',
          linkText: 'Readability & Web',
          text: 'Damien Senger, Inclusive Design 24 (ID24) <time>2018</time>',
          backLinkHref: '#footnote-ref-4',
          backLinkAriaLabel: 'Back to content',
          backLinkContent: '↩',
          counter: 4,
        },
        {
          classList: 'footnote__item',
          linkId: 'footnote-5',
          linkHref: 'https://youtu.be/mlMfynLKGXA',
          describedBy: 'ext-site',
          linkText: 'Elegant Accessibility (video)',
          text: 'Dafydd Henke-Reed, Inclusive Design 24 (ID24) <time>2018</time>',
          backLinkHref: '#footnote-ref-5',
          backLinkAriaLabel: 'Back to content',
          backLinkContent: '↩',
          counter: 5,
        },
        {
          classList: 'footnote__item',
          linkId: 'footnote-6',
          text: 'Footnotes also offer a chance for meta commentary or tangential details that inform the topic at hand. They do not always contain a citation.',
          backLinkHref: '#footnote-ref-6',
          backLinkAriaLabel: 'Back to content',
          backLinkContent: '↩',
          counter: 6,
        }
      ],
    };

