

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');
const mkdir = require('mkdirp');
const { installDependencies } = require('yeoman-generator/lib/actions/install');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      '\n\n',
      yosay(
        `Welcome to the impressive ${chalk.red(
          'generator-drupal-theme',
        )} generator!`,
      ),
    );

    this.log(
      `${chalk.yellow.bold('Warning')
      } ` +
        'Your theme will be generated in the current folder you are in. If this is not the folder you wish to generate your theme, please exit now.\n\n',
    );

    /// Prompts to the user
    const prompts = [
      {
        name: 'themeName',
        message: "What is your theme's human readable name?",
        default: this.appname, // Default to current folder name.
      },
      {
        name: 'themeDesc',
        message: "What is your theme's description?",
        default(answers) {
          // Default to a helpful reminder to change the description later.
          // eslint-disable-next-line max-len
          return (
            `Update ${
              answers.themeName
            }.info.yml if you want to change the theme description later.`
          );
        },
      },
    ];

    return this.prompt(prompts).then((props) => {
      // To access props later use this.props.someAnswer;
      this.answers = props;
    });
  }

  writing() {
    const startThemeName = _.startCase(this.answers.themeName);
    const snakeThemeName = _.snakeCase(this.answers.themeName);
    const kebabThemeName = _.kebabCase(this.answers.themeName);
    const camelThemeName = _.camelCase(this.answers.themeName);
    const pascalThemeName = _.startCase(_.camelCase(this.answers.themeName)).replace(/ /g, '');


    // pass this object for files that need to be customized
    const templateValues = {
      title: startThemeName,
      snakeTitle: snakeThemeName,
      kebabTitle: kebabThemeName,
      camelTitle: camelThemeName,
      pascalTitle: pascalThemeName,
      description: this.answers.themeDesc,
    };


    mkdir(kebabThemeName)

    const themeDirectoryPath = (path) => this.destinationPath(`${kebabThemeName}/${path}`)

    /**
     * use to generate PascalCased file names for the drupal theme files
     * @param {string} templatePath
     * @param {string} destinationPath
     * @returns function that creates file from template, will change the "TemplateName" to a pascalCased Title
     */
    const buildFileFromTemplate = (templatePath, destinationPath ) => {
      const templateFileName = templatePath.split('/').pop()
      const finalFileName = templateFileName.replace('TemplatedName', pascalThemeName)
      const finalPath = destinationPath+finalFileName
      // build file from template
      return this.fs.copyTpl(
        templatePath,
        finalPath,
        templateValues,
      );
    };

    //
    // Build file name specific theme files.
    //
    buildFileFromTemplate(
      this.templatePath('_root-files/drupal/AbstractComponent.php'),
      themeDirectoryPath('/')
    )
    buildFileFromTemplate(
      this.templatePath('_root-files/drupal/TemplatedName.info.yml'),
      themeDirectoryPath('/')
    )
    buildFileFromTemplate(
      this.templatePath('_root-files/drupal/TemplatedName.libraries.yml'),
      themeDirectoryPath('/')
    )
    buildFileFromTemplate(
      this.templatePath('_root-files/drupal/TemplatedName.theme'),
      themeDirectoryPath('/')
    )
    buildFileFromTemplate(
      this.templatePath('_root-files/drupal/TemplatedNameComponentInterface.php'),
      themeDirectoryPath('/')
    )
    buildFileFromTemplate(
      this.templatePath('_root-files/drupal/TemplatedNameServicesCollector.php'),
      themeDirectoryPath('/')
    )

    // build other files
    this.fs.copyTpl(
      this.templatePath('_root-files/package/*'),
      themeDirectoryPath('/'),
      templateValues,
      null,
      { globOptions: { dot: true } }
    );

    this.fs.copy(
      this.templatePath('_src'),
      themeDirectoryPath('src'),
    );

    this.fs.copyTpl(
      this.templatePath('_templates'),
      themeDirectoryPath('templates'),
      templateValues,
    );
    this.fs.copyTpl(
      this.templatePath('_utility'),
      themeDirectoryPath('_utility'),
      templateValues,
    );
    this.fs.copy(
      this.templatePath('_webpack'),
      themeDirectoryPath('webpack'),
    );
    this.fs.copyTpl(
      this.templatePath('_storybook'),
      themeDirectoryPath('.storybook'),
      templateValues,
    );
    this.fs.copy(
      this.templatePath('_documentation'),
      themeDirectoryPath('documentation'),
    );
    this.fs.copy(
      this.templatePath('_vscode'),
      themeDirectoryPath('.vscode'),
    );
  }
  farewell(){
    console.log(
      chalk.green('your all set!'),
      '\n',
      'make sure you install your package dependencies by running npm install in your new theme folder.'

    )
  }
};
