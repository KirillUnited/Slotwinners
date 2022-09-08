import React from 'react';
import {Card} from "../card/card";
import {graphql, useStaticQuery} from "gatsby";

const Reviews = () => {
    const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "reviews"}}) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              title
              desc
              avatar {
                childImageSharp {
                  original {
                    src
                  }
                }
              }
            }
            html
          }
        }
      }
    }
  `)
    const {nodes} = data?.allFile || {};

    return (
        <div className="reviews">
            <div className="vw-grid vw-grid-col-4 vw-grid-col-fill">
                {nodes.map((review, index) => {
                    const {title, desc, avatar} = review.childMarkdownRemark.frontmatter;
                    const {html} = review.childMarkdownRemark;

                    return (
                        <Card title={title} desc={desc} avatar={avatar.childImageSharp.original.src} body={html} key={index}/>
                    )
                })}
            </div>
        </div>
    )
};

export default Reviews;
