
    import SocialIcons from "../social-icons.twig";
    import docs from "./social-icons.doc.mdx";

    export default {
      title: 'Component / Social Icons',
      parameters: {
        docs: {
          page: docs,
        },
      },
      argTypes: {},
    };

    const Template = (args) => SocialIcons({...args});

    export const Instagram = Template.bind({});

    Instagram.args = {
      lists: [
        {
          links: [
            {
              href: '#',
              type: 'instagram'
            }
          ],
        }
      ]
    }

    export const Linkedin = Template.bind({});

    Linkedin.args = {
      lists: [
        {
          links: [
            {
              href: '#',
              type: 'linkedin'
            }
          ],
        }
      ]
    }

    export const Twitter = Template.bind({});
    Twitter.args = {
      lists: [
        {
          links: [
            {
              href: '#',
              type: 'twitter'
            }
          ],
        }
      ]
    }

    export const Youtube = Template.bind({});
    Youtube.args = {
      lists: [
        {
          links: [
            {
              href: '#',
              type: 'youtube'
            },
          ],
        }
      ]
    }


