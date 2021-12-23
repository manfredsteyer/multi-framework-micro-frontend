const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

    module.exports = {
      output: {
        publicPath: "auto",
        uniqueName: "shell"
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

            remotes: {
                // // Angular 13: loaded as EcmaScript module 
                // // (no remoteName needed like mfe1@... )
                // 'mfe1': "http://localhost:4201/remoteEntry.js",
                
                // // Angular 12: loaded as script file
                // 'mfe2': "script mfe2@http://localhost:4202/remoteEntry.js", 
                // 'mfe3': "script mfe3@http://localhost:4203/remoteEntry.js", 

                // // React: loaded as script file
                // 'mfe4': "script mfe4@http://localhost:4204/remoteEntry.js", 
              },
            shared: ["@angular/core", "@angular/common", "@angular/router"]
        })
      ],
    };
