const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

    module.exports = {
      output: {
        publicPath: "http://localhost:4200/",
        uniqueName: "shell"
      },
      optimization: {
        // Only needed to bypass a temporary bug
        runtimeChunk: false
      },
      plugins: [
        new ModuleFederationPlugin({
            remotes: {
                'mfe1': "mfe1@http://localhost:4201/remoteEntry.js", 
                'mfe2': "mfe2@http://localhost:4202/remoteEntry.js", 
                'mfe3': "mfe3@http://localhost:4203/remoteEntry.js", 
            },
            shared: ["@angular/common", "@angular/router"]
        })
      ],
    };
