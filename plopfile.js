const mobileRoot = ".";

const screen = {
  description: 'generating new screen',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: "What's the name of the screen?",
    },
  ],
  actions: [
    {
      type: 'add',
      path: `${mobileRoot}/src/screens/{{ pascalCase name }}/index.ts`,
      templateFile: 'templates/screen/index.hbs',
    },
    {
      type: 'add',
      path: `${mobileRoot}/src/screens/{{ pascalCase name }}/{{ camelCase name }}Screen.tsx`,
      templateFile: 'templates/screen/screen.hbs',
    },
    {
      type: 'add',
      path: `${mobileRoot}/src/screens/{{ pascalCase name }}/{{ camelCase name }}Screen.models.ts`,
      templateFile: 'templates/screen/models.hbs',
    },
    {
      type: 'add',
      path: `${mobileRoot}/src/screens/{{ pascalCase name }}/{{ camelCase name }}Screen.test.tsx`,
      templateFile: 'templates/screen/test.hbs',
    },
    {
      type: 'add',
      path: `${mobileRoot}/src/screens/{{ pascalCase name }}/{{ camelCase name }}Screen.i18n.ts`,
      templateFile: 'templates/screen/i18n.hbs',
    },
  ],
};

const component = {
  description: 'generating new component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: "What's the name of the component?",
    },
  ],
  actions: [
    {
      type: 'add',
      path: `${mobileRoot}/src/components/{{ pascalCase name }}/index.ts`,
      templateFile: 'templates/component/index.hbs',
    },
    {
      type: 'add',
      path: `${mobileRoot}/src/components/{{ pascalCase name }}/{{ camelCase name }}.tsx`,
      templateFile: 'templates/component/component.hbs',
    },
    {
      type: 'add',
      path: `${mobileRoot}/src/components/{{ pascalCase name }}/{{ camelCase name }}.models.ts`,
      templateFile: 'templates/component/models.hbs',
    },
    {
      type: 'add',
      path: `${mobileRoot}/src/components/{{ pascalCase name }}/{{ camelCase name }}.styles.tsx`,
      templateFile: 'templates/component/styles.hbs',
    },
    {
      type: 'add',
      path: `${mobileRoot}/src/components/{{ pascalCase name }}/{{ camelCase name }}.test.tsx`,
      templateFile: 'templates/component/test.hbs',
    },
    {
      type: 'add',
      path: `${mobileRoot}/src/components/{{ pascalCase name }}/{{ camelCase name }}.i18n.ts`,
      templateFile: 'templates/component/i18n.hbs',
    },
  ],
};

const util = {
  description: 'generating new util',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: "What's the name of the util?",
    },
  ],
  actions: [
    {
      type: 'add',
      path: `${mobileRoot}/src/utils/{{ camelCase name }}/index.ts`,
      templateFile: 'templates/util/index.hbs',
    },
    {
      type: 'add',
      path: `${mobileRoot}/src/utils/{{ camelCase name }}/{{ camelCase name }}.tsx`,
      templateFile: 'templates/util/util.hbs',
    },
    {
      type: 'add',
      path: `${mobileRoot}/src/utils/{{ camelCase name }}/{{ camelCase name }}.models.ts`,
      templateFile: 'templates/util/models.hbs',
    },
    {
      type: 'add',
      path: `${mobileRoot}/src/utils/{{ camelCase name }}/{{ camelCase name }}.test.tsx`,
      templateFile: 'templates/util/test.hbs',
    },
    {
      type: 'add',
      path: `${mobileRoot}/src/utils/{{ camelCase name }}/{{ camelCase name }}.i18n.ts`,
      templateFile: 'templates/util/i18n.hbs',
    },
  ],
};

module.exports = function (plop) {
  plop.setGenerator('screen', screen);
  plop.setGenerator('component', component);
  plop.setGenerator('util', util);
};


