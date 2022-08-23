module.exports = kebabCaseName => ({
  content: `// Generated Stylesheet
@import '~variables';
@import '~mixins';
@import '~functions';

.${kebabCaseName} {
  // add styles
}
`,
  extension: '.scss',
});
