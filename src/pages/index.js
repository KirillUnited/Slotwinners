import * as React from "react";
import { Link } from "gatsby";
import Layout, {Section} from "../components/layout";
import Banner from "../components/banner/banner";
import Seo from "../components/seo";
import {graphql} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image";
import Reviews from "../components/reviews/reviews";
import Features from "../components/features/features";
import Brands from "../components/brands/brands";
import Subscribe from "../components/subscribe/subscribe";
import Modal from "../components/modal/modal";
import {useState} from "react";
import Button from "../components/button/button";
import cookieIcon from "../images/Cookie.svg";

export default function IndexPage({data}) {
    const {nodes} = data?.allFile || {};
    const [isCookieModal, setCookieModal] = useState(true);

    return (
        <Layout>
            <Modal
                data-cookie
                isVisible={isCookieModal}
                title="Cookie"
                header={
                    <img src={cookieIcon} width={48} height={48} alt="Cookie"/>
                }
                content={
                    <p style={{textAlign: "center"}}>
                        By clicking "Accept" you consent to our website`s use of cookies.
                        We would like to use cookies to enhance your user experience.
                        (<Link to={`/privacy`}>Cookie Policy</Link>)
                    </p>
                }
                footer={
                    <>
                        <Button onClick={() => setCookieModal(false)}>
                            Accept
                        </Button>
                        <Button
                            state={`button-invert`}
                            onClick={() => setCookieModal(false)}
                        >
                            Decline
                        </Button>
                    </>
                }
                onClose={() => setCookieModal(false)}
            />
            <Section content={`banner`}>
                <Banner/>
            </Section>
            {
                nodes &&
                <>
                    <Section id="games" content={`header`}>
                        <h2 style={{textAlign: "left"}}>Most popular games {new Date().getFullYear()}</h2>
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
            <Section content={`content`} classes="has-slider">
                <Reviews/>
            </Section>
            <Section content={`content`}>
                <Brands/>
            </Section>
            <Section id={`features`} content={`header`}>
                <h2>Our features</h2>
            </Section>
            <Section content={`content`}>
                <Features/>
            </Section>
            <Section content={`content`}>
                <Subscribe/>
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
