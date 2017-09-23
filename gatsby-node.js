const path = require('path');

exports.onCreateNode = ({node, boundActionCreators, getNode}) => {
    const { createNodeField } = boundActionCreators
    // let slug
    if (node.internal.type === `MarkdownRemark`) {

        // Create node field `group` for each MD file
        // which will be used for filtering in GraphQL Queries

        const fileNode = getNode(node.parent)
        createNodeField({node, name: "group", value: fileNode.sourceInstanceName})

        // const parsedFilePath = path.parse(fileNode.relativePath)
        // if (parsedFilePath.name !== `index` && parsedFilePath.dir !== ``) {
        //     // /md_dir/md_filename/
        //     slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`
        // } else if (parsedFilePath.dir === ``) {
        //     // /md_filename/
        //     slug = `/${parsedFilePath.name}/`
        // } else {
        //     slug = `/${parsedFilePath.dir}/`
        // }

        // console.log('---', fileNode.sourceInstanceName)

    }


}

const articleTemplatePath = `src/templates/article.js`

exports.createPages = ({graphql, boundActionCreators}) => {
    const {createPage} = boundActionCreators
    return new Promise((resolve, reject) => {
        const articleTemplate = path.resolve(articleTemplatePath)
        resolve(
            // Query for all frontmatter url paths
            graphql(
                `
                {
                  allMarkdownRemark(limit: 1000) {
                    edges {
                      node {
                        frontmatter {
                          path
                        }
                      }
                    }
                  }
                }`
            ).then(result => {
                if (result.errors) {
                    console.log('---', result.errors)
                    reject(result.errors)
                }

                // Create article posts
                result.data.allMarkdownRemark.edges.forEach(edge => {
                    createPage({
                        path: edge.node.frontmatter.path,
                        component: articleTemplate,
                        // Pass context for querying for HTML from the template
                        context: {
                            path: edge.node.frontmatter.path
                        }
                    })
                })
                return
            })
        )
    })
}