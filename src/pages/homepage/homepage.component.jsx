import React from "react";

import Hero from "../../components/hero/hero.component";
import Preview from "../../components/preview/preview.component";

import image1 from "../../assets/house4.png";
import image2 from "../../assets/house2.png";
import image3 from "../../assets/house1.png";

import "./homepage.styles.scss";

const HomePage = () => (
  <div className="home-page">
    <Hero />
    <div className="main">
      <Preview
        image={image1}
        header={`Who are we?`}
        span={`We are RENTERZ and we make affordable housing opportunities for our
        users who are home and abroad. We take full consideration of where they
        have been to provide the best place for them`}
        cta={`Learn more`}
      />
      <Preview
        image={image2}
        header={`Exclusive Houses`}
        span={`Our Housing are exclusive with top features that fight in ranks with the top hotels in town`}
        cta={`EXPLORE`}
        add
      />
      <Preview
        image={image3}
        header={`SELL YOUR APARTMENT`}
        span={`For our users who are staying far from home, you can now sell your apartmant at affordable prices`}
        cta={`EXPLORE`}
        invert
      />
    </div>
  </div>
);

export default HomePage;
