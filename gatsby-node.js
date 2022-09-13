const path = require("path");

exports.createPages = async ({graphql, actions}) => {
    const {data} = await graphql(`
      query {
        allFile(filter: {relativeDirectory: {eq: "posts"}}) {
          nodes {
            childMarkdownRemark {
              frontmatter {
                url
              }
              html
            }
          }
        }
      }
    `);

    data.allFile.nodes.forEach(node=>{
        const {url} = node.childMarkdownRemark.frontmatter;

        actions.createPage({
            path: `/${url}`,
            component: path.resolve('./src/templates/single-post.js'),
            context: {url, html: node.childMarkdownRemark.html}
        })
    })
};
