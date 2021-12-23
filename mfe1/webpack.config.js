const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "auto",
    uniqueName: "mfe1"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({

      library: { type: "module" },

      // For remotes (please adjust)
      name: "mfe1",
      filename: "remoteEntry.js",
      exposes: {
        './web-components': './src/bootstrap.ts', // bootstrap --> main --> AppModule --> WebComp
      },

      // For hosts (please adjust)
      /*
      remotes: {
          'mfe1': "mfe1@http://localhost:3000/remoteEntry.js" 
      },
      */

      shared: ["@angular/core", "@angular/common", "@angular/router"]
    })
  ],
};
