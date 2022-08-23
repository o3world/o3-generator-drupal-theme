import Twig from 'twig';
import twigDrupal from 'twig-drupal-filters';

// main style sheet
import '../dist/styles/main.css';

//styles specifically to show the story correctly
import '!style-loader!css-loader!sass-loader!../src/styles/custom-storybook.styles.scss';


// Add the filters to Twig instance.
twigDrupal(Twig);
Twig.cache(false);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
}
