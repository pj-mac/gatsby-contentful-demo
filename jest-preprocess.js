const babelOptions = {
  presets: ['babel-preset-gatsby', '@babel/preset-typescript'],
};

// eslint-disable-next-line no-undef, @typescript-eslint/no-var-requires
module.exports = require('babel-jest').default.createTransformer(babelOptions);
