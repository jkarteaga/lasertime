const path = require('path')

// exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
//     const { createNodeField } = boundActionCreators
//     let slug
//     if (node.internal.type === `MarkdownRemark`) {
//         const fileNode = getNode(node.parent)
//         const parsedFilePath = path.parse(fileNode.relativePath)
//         if (parsedFilePath.name !== `index` && parsedFilePath.dir !== ``) {
//             // /md_dir/md_filename/
//             slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`
//         } else if (parsedFilePath.dir === ``) {
//             // /md_filename/
//             slug = `/${parsedFilePath.name}/`
//         } else {
//             slug = `/${parsedFilePath.dir}`
//         }
//
//     }
// }