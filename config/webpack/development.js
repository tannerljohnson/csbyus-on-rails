process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

// const marked = require("marked");
// const renderer = new marked.Renderer();
//
// const markdownLoader = {
//   test: /\.md$/,
//   use: [ {
//             loader: 'markdown-loader',
//             options: {
//                  pedantic: true,
//                  renderer: renderer,
//              }
//           },
//           {
//             loader: 'html-loader'
//           }
//   ]
// }
//
// // Insert md loader at the end of list
// environment.loaders.append('md', markdownLoader)
//
// // Insert md loader at the top of list
// environment.loaders.prepend('md', markdownLoader)
//
// // Insert md loader after/before a given loader
// environment.loaders.insert('md', markdownLoader, { after: 'style'} )
// environment.loaders.insert('md', markdownLoader, { before: 'babel'} )

module.exports = environment.toWebpackConfig()
