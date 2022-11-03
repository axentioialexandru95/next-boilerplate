const atomicGenerator = require('./plopjs/index').default;

const defaultConfig = {
  createIndex: true,
  functional: true,
  basePath: './ui/components',
  withClassnameInterfaceImportPath: '@Framework/ui', //make sure to configure this path
  withStyleInterfaceImportPath: '@Framework/ui',
  tests: false,
  stories: false,
  styledComponents: true,
  useNative: false,
  useMacro: false,
};

const config = (plop) => {
  atomicGenerator(plop, defaultConfig);
};

module.exports = config;
