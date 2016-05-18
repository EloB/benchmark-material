const frameworks = exports.frameworks = [
  'default',
  'material-ui',
  'react-toolbox'
];

const components = exports.components = [
  'list',
  'list-iterate'
];

exports.tests = components.map(component => frameworks.map(framework => ({
  framework,
  component,
  name: `${framework}-${component}`,
  entry: `./src/${framework}/${component}`,
  filename: `${framework}/${component}.html`
}))).reduce((a, b) => a.concat(b));