import * as React from "react";
import Layout, {Section} from "../components/layout";
import Banner from "../components/banner/banner";
import Seo from "../components/seo";
import {graphql} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image";

export default function IndexPage({data}) {
    const {nodes} = data?.allMarkdownRemark || {};

    return (
        <Layout>
            <Section>
                <Banner/>
            </Section>
            <Section id="games">
                <h2>Most popular games 2021</h2>
            </Section>
            {
                nodes &&
                <Section>
                    <div className="vw-grid vw-grid-col-4 vw-grid-col-fill">
                        {nodes.map((game, index) => {
                            const {title, image} = game.frontmatter;

                            return (
                                <div className="vw-grid-item" key={index}>
                                    <GatsbyImage
                                        alt={title}
                                        image={image.childImageSharp.gatsbyImageData}
                                        layout="FULL_WIDTH"
                                        style={{marginBottom: "24px"}}
                                    />
                                    <h4 style={{fontSize: "16px", fontWeight: "600"}}>{title}</h4>
                                </div>
                            )
                        })}
                    </div>
                </Section>
            }

            <Section id={`reviews`}>
                <h2>Awesome reviews</h2>
                <p>Enjoy playing the most popular online slots.
                    Free, fun and legal!</p>
            </Section>
            <Section id={`features`}>
                <h2>Our features</h2>
            </Section>
            <Section>
                <div className="vw-grid vw-grid-col-2">
                    <div className="vw-grid-item">
                        <h3>Like to play slot games?</h3>
                        <p>Enjoy playing the most popular online slots.
                            Free, fun and legal!</p>
                    </div>
                    <div className="vw-grid-item">
                        <h3>Like to play slot games?</h3>
                        <p>Enjoy playing the most popular online slots.
                            Free, fun and legal!</p>
                    </div>
                    <div className="vw-grid-item">
                        <h3>Like to play slot games?</h3>
                        <p>Enjoy playing the most popular online slots.
                            Free, fun and legal!</p>
                    </div>
                    <div className="vw-grid-item">
                        <h3>Like to play slot games?</h3>
                        <p>Enjoy playing the most popular online slots.
                            Free, fun and legal!</p>
                    </div>
                </div>
            </Section>
        </Layout>
    )
};

export const Head = () => <Seo title="Dark Theme"/>;

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        html
        frontmatter {
          image {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
              )
            }
          }
          title
        }
      }
    }
  }
`;
