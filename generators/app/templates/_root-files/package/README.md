# O3 Generated Drupal Theme

## Getting started

Install npm dependencies `npm install`

Do an initial build `npm run build`

You should be ready to go. 

## Component Development

To develop or work on existing components you can start up storybook and run 
webpack in another terminal

### Terminal 1
```npm run storybook```
### Terminal 2
```npm run watch```

### Generating new components

There is a node generator set up to create boiler plate files specifically for the this project. 

run the command `npm run generate [component-name]`.

This will generate the following:
- Add your directory in the index.js file for webpack
- Create a new directory for files
  - scss file for styles
  - index.js file for js and exporting scss files to webpack
  - twig file for templating your component
  - html.twig redirect file
- Create a stories directory for storybook
  - Docs file to write component specific documentation
  - stories file to build stories



## Whats included?

Hopefully read to install drupal theme with o3 components. 

Baseline styles to get a theme up and running quickly
