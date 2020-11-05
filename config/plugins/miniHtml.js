const MiniHtmlWebpackPlugin = require('mini-html-webpack-plugin');

const generateHtmlPlugin = (title) => {
  return new MiniHtmlWebpackPlugin({
    title,
    filename: 'index.html',
    template: `./src/${title.toLowerCase()}/index.html`
  });
};

module.exports = populateHtmlPlugins = (pagesArr) => {
  result = [];
  pagesArr.forEach(page => {
    result.push(generateHtmlPlugin(page));
  });
};