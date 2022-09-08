import React from 'react';
import {Card} from "../card/card";
import {graphql, useStaticQuery} from "gatsby";

const Features = () => {
    const data = useStaticQuery(graphql`
      query {
        allFile(filter: {relativeDirectory: {eq: "features"}}) {
          nodes {
            childMarkdownRemark {
              frontmatter {
                title
                image {
                  extension
                  publicURL
                }
              }
              html
            }
          }
        }
      }
  `);
    const {nodes} = data?.allFile || {};

    return (
        <div className="features">
            <div className="vw-grid vw-grid-col-2">
                {nodes.map((feature, index) => {
                    const {title, image} = feature.childMarkdownRemark.frontmatter;
                    const {html} = feature.childMarkdownRemark;

                    return (
                        <Card
                            type={`v-2`}
                            title={title}
                            avatar={image.publicURL}
                            body={html}
                            key={index}/>
                    )
                })}
            </div>
        </div>
    )
};

export default Features;
