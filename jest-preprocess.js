const babelOptions = {
  presets: ["babel-preset-gatsby"],
  // presets: ["babel-preset-gatsby", "@babel/preset-typescript"],  Replace with this preset if using Typescript
  // Once this is changed, you can write your tests in TypeScript using the .ts or .tsx extensions.
}

module.exports = require("babel-jest").createTransformer(babelOptions)