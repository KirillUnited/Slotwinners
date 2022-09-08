import * as React from "react";
import Layout, {Section} from "../components/layout";
import Banner from "../components/banner/banner";
import Seo from "../components/seo";
import {graphql} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image";
import Reviews from "../components/reviews/reviews";
import Features from "../components/features/features";

export default function IndexPage({data}) {
    const {nodes} = data?.allFile || {};

    return (
        <Layout>
            <Section content={`banner`}>
                <Banner/>
            </Section>
            {
                nodes &&
                <>
                    <Section id="games" content={`header`}>
                        <h2 style={{textAlign: "left"}}>Most popular games 2021</h2>
                    </Section>
                    <Section content={`content`}>
                        <div className="vw-grid vw-grid-col-4 vw-grid-col-fill">
                            {nodes.map((game, index) => {
                                const {title, image} = game.childMarkdownRemark.frontmatter;

                                return (
                                    <div className="vw-grid-item" key={index}>
                                        <GatsbyImage
                                            alt={title}
                                            image={image.childImageSharp.gatsbyImageData}
                                            style={{marginBottom: "24px"}}
                                        />
                                        <h4 style={{fontSize: "16px", fontWeight: "600"}}>{title}</h4>
                                    </div>
                                )
                            })}
                        </div>
                    </Section>
                </>
            }

            <Section id={`reviews`} content={`header`}>
                <h2>Awesome reviews</h2>
            </Section>
            <Section content={`content`}>
                <Reviews/>
            </Section>
            <Section id={`features`} content={`header`}>
                <h2>Our features</h2>
            </Section>
            <Section content={`content`}>
                <Features/>
            </Section>
        </Layout>
    )
};

export const Head = () => <Seo title="Dark Theme"/>;

export const query = graphql`
  query {
    allFile(filter: {relativeDirectory: {eq: "games"}}) {
    nodes {
        childMarkdownRemark {
          frontmatter {
            title
            image {
              childImageSharp {
                gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
              )
              }
            }
          }
        }
      }
    }
  }
`;
