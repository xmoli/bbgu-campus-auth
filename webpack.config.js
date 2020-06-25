const path = require('path');

module.exports = {
  entry: './src/main.js',
  target: 'node',
  mode: 'production',
  output: {
    filename: 'auto_login.js',
    path: path.resolve(__dirname, 'dist')
  }
};