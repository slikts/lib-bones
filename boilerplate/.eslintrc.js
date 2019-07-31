const prettierConfig = require('./.prettierrc');

const eslintConfig = require('@lib-bones/preset-eslint');

module.exports = eslintConfig({ prettierConfig });
