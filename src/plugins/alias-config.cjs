const path = require("path");

function aliasPlugin(context, options) {
  return {
    name: "docusaurus-plugin-aliases",
    configureWebpack() {
      return {
        resolve: {
          alias: {
            "@": path.resolve(__dirname, "../src"),
          },
        },
      };
    },
  };
}

module.exports = aliasPlugin;
