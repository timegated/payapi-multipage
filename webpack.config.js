const populateHtmlPlugins = require('./config/plugins/miniHtml');

const pages = populateHtmlPlugins(['home', 'about', 'contact', 'pricing']);

module.exports = {
  entry: {
    index: "./src/index/index.js",
    about: "./src/about/index.js",
    contact: "./src/contact/index.js",
    pricing: "./src/pricing/index.js"
  },
  plugins: pages
}