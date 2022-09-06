import * as React from "react";
import Layout, { Section } from "../components/layout";
import Banner from "../components/banner/banner";
import Seo from "../components/seo";

export default function IndexPage() {
  return (
    <Layout>
      <Section>
        <Banner />
      </Section>
      <Section>
        <h2>Most popular games 2021</h2>
      </Section>
      <Section>
        <div className="vw-grid vw-grid-col-4">
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
      <Section>
        <h2>Awesome reviews</h2>
        <p>Enjoy playing the most popular online slots.
          Free, fun and legal!</p>
      </Section>
      <Section>
        <h2>Our features</h2>
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

export const Head = () => <Seo title="Dark Theme" />;
