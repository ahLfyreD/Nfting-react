// const path = required ("path");

// module.exports = {
//     webpack : {
//         alias: {
//             "@components": path.resolve(_dirname, "src/components/"),
//             // "@Asset": path.resolve(_dirname, "src/Asset/")
//         }
//     },
//     jest: {
//         configure: {
//             moduleNameMapper: {
//                 "@components(.*)$": "<rootDir>/src/components$1",
//                 // "@components(.*)$": "<rootDir>/src/Asset$1"
//             }
//         }
//     }
// }

const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          "@components": "./src/components/",
          "@asset": "./src/asset/",
        //   "@dir": "./src/some/dir",
          // you can alias packages too
        //   "@material-ui": "./node_modules/@material-ui-ie10"
        }
      }
    }
  ]
};