const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: [
    "vuetify"
  ],
  publicPath: "/2d-rocket-simulation/"
});
