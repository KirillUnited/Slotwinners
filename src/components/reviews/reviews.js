import React from 'react';
import {Card} from "../card/card";
import {graphql, useStaticQuery} from "gatsby";
import {Pagination, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Reviews = () => {
    const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "reviews"}}) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              title
              desc
              rating              
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
  `);
    const {nodes} = data?.allFile || {};

    return (
        <div className="reviews has-slider">
            <Swiper
                className={`slider`}
                modules={[Pagination, A11y]}
                spaceBetween={48}
                slidesPerView={3}
                pagination={{clickable: true}}
                breakpoints={{
                    200: {
                        slidesPerView: "auto",
                        spaceBetween: 24,
                        centeredSlides: true
                    },
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                        centeredSlides: false
                    },
                    991: {
                        slidesPerView: 3,
                        spaceBetween: 24
                    }
                }}
            >
                {nodes.map((review, index) => {
                    const {title, desc, avatar, rating} = review.childMarkdownRemark.frontmatter;
                    const {html} = review.childMarkdownRemark;

                    return (
                        <SwiperSlide
                            key={index}
                        >
                            <Card
                                title={title}
                                desc={desc}
                                avatar={avatar.childImageSharp.original.src}
                                rating={rating.toFixed(0)}
                                body={html}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
};

export default Reviews;
