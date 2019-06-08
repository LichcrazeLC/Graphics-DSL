const path = require('path');

module.exports = {
  entry: ["./webgl-libs/webgl-utils.js", "./webgl-libs/initShaders.js", "./webgl-libs/MV.js", "./lab.js", "./ello.js"],
  output: {
    filename: './bundle.js'
  },
  node: { module: "empty", net: "empty", fs: "empty" },
  mode: 'development'
};

 