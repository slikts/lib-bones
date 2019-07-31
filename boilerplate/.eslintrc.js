const prettierConfig = require('./.prettierrc');

const eslintConfig = require('@lib-bones/presets/eslint');

module.exports = eslintConfig({ prettierConfig });
