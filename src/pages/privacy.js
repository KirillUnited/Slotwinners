import * as React from "react"

import Layout from "../components/layout";
import Seo from "../components/seo";
import {graphql, useStaticQuery} from "gatsby";

const SinglePost = () => {
    const data = useStaticQuery(graphql`
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
    console.log(data)
    return (<Layout>

        {data.allFile.nodes.childMarkdownRemark}
    </Layout>)
};

export const Head = () => <Seo title="Privacy policy" />

export default SinglePost;
