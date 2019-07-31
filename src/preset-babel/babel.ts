const babelConfig = () => ({
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
} as const);

export default babelConfig;
