# O3 Drupal Theme Generator
The O3 Drupal Theme Generator is a quick way to run a few commands a get up and running with a new Drupal theme that includes the following goodies.
Shout out to Mike Herceg for automating this!
- Storybook
- Eslint & sasslint
- Recommended vscode settings

## Installation

If this is your first time using the generator, you will want to install Yeoman & the O3 Theme Generator:
- Install [Yeoman](http://yeoman.io) globally
  ```bash
  npm install -g yo
  ```
- Install package globally. 
    ```bash
    npm install -g @o3world/generator-drupal-theme
    ```
After installing the above, this command will be available. 
- Within the folder you wish to generate your theme in. Typically in `web/themes/custom/` run:
    ```bash
    yo drupal-theme
    ``` 
## Storybook
To run storybook:

`npm run build`

`npm run storybook`

## Enable the theme in Drupal
With the proper permissions, visit /admin/appearance/ - find your new theme name, and choose 'Install & set as default'. You can then visit the homepage by clicking the 'Back to site' button in the top left corner to see the public theme (the admin theme you are currently in is different and will not change.) The site will look plain and unstyled - this is good because it is now your blank slate.

## Components
Each component is from the [O3 World Accessibility Library](https://o3world.github.io/o3w-component-library/style-guide/index.html). Now instead of copying and pasting - you can run this generator and get them in your theme scaffolded and ready to go. 

### Are the componenets already integrated with Drupal?
No - but you have the starter files you need to get there. The reason for this is because auto-intergration would require assumptions about your build, which this sort of templating should not offer. We give you the pieces, you plug in the data and add any additional custom styling. Most components will include a `twig` file that is not used by storybook, you can use a [twig include](https://twig.symfony.com/doc/2.x/tags/include.html) (or embed) in your Drupal template override while integrating.

## Test Run
Want to play with this but don't have a Drupal site? You can get one up pretty quickly with Ddev. 
https://ddev.readthedocs.io/en/stable/users/quickstart/#drupal
