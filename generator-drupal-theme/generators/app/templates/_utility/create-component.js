require('colors');
const fs = require('fs');
const strHelper = require('./stringHelpers');
const components = require('./templates/component');
const stories = require('./templates/stories');


const componentName = process.argv[2];

if (!componentName) {
  console.error('Please supply a valid component name'.red);
  process.exit(1);
}

const kebabCase = strHelper.kebabCase(componentName);
const paschalCase = strHelper.paschalCase(componentName);
const titleCase = strHelper.titleCase(componentName);


console.log(`Creating Component Templates with name: ${paschalCase}`);

// build Component Directory
const componentDirectory = `./templates/components/${kebabCase}`;

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${paschalCase} already exists.`.red);
  process.exit(1);
}

fs.mkdirSync(componentDirectory);


const generatedComponents = components.map(component =>
  component(kebabCase, paschalCase),
);

generatedComponents.forEach((component) => {
  switch(component.extension){
    case('.scss'):
      fs.writeFileSync(
        `${componentDirectory}/_${kebabCase}${component.extension}`,
        component.content,
      )
      break;
    case('.html.twig'):
      fs.writeFileSync(
        `${componentDirectory}/paragraph--${kebabCase}${component.extension}`,
        component.content,
      )
      break;
    default:
      fs.writeFileSync(
        `${componentDirectory}/${kebabCase}${component.extension}`,
        component.content,
      );
  }
});

// build stories
const storyDirectory = `./templates/components/${kebabCase}/stories/`;

fs.mkdirSync(storyDirectory);

const generatedStories = stories.map(story =>
  story(kebabCase, paschalCase, titleCase),
);

generatedStories.forEach((story) => {
  fs.writeFileSync(
    `${storyDirectory}/${kebabCase}${story.extension}`,
    story.content,
  );
});


// add index file
fs.writeFile(
  `${componentDirectory}/index.js`,
  `import './_${kebabCase}.scss';`,
  (err) => {
    if (err) console.log('error', err);
  },
);


//add component to main exports
fs.appendFile('./templates/components/index.js',
`\nimport './${kebabCase}';`
, err => {
  if (err) {
    console.error(err)
    return
  }
});


console.log(
  `Successfully created component under: ${componentDirectory.green}`,
);
