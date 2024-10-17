const globals = require('globals');
const pluginJs = require('@eslint/js');
const pluginReact = require('eslint-plugin-react');

const customPlugin = require('./index');

module.exports = [
    {files: ['**/*.{js,mjs,cjs,jsx}']},
    {languageOptions: {globals: globals.browser}},
    pluginJs.configs.recommended,
    pluginReact.configs.flat.recommended,

    ...customPlugin.configs.recommended,
];
