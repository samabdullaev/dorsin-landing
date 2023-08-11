import React from "react";
import Header from "../../components/Header";
import ServicesContainer from "../../containers/ServicesContainer";
import FeatureContainer from "../../containers/FeatureContainer";
import Web from "../../components/web";
import Pricing from "../../containers/Pricing";
import Team from "../../containers/Team";
import Work from "../../containers/Work";
import Testimonials from "../../containers/Testimonials";
import Blog from "../../containers/Blog";
import Contact from "../../containers/Contact";
import Social from "../../containers/Social";
function HomePage() {
  return (
    <div>
      <Header
        title=" We Help Startups Launch Their Products"
        text="Etiam sed.Interdum consequat proin vestibulum class at.Moltin gives you the platform. A small
        river named Duden flows by their place and supplies it with the necessary regelialia."
      />
      <ServicesContainer />
      <FeatureContainer />
      <Web
        image="assets/images/img-1.jpg"
        title="Build your dream website today"
        text="But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her."
        btn="View Plan & Pricing"
      />
      <Pricing />
      <Team />
      <Work />
      <Testimonials />
      <Web
        image="assets/images/img-2.jpg"
        title="Let's Get Started"
        text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        btn="Get Started >>"
      />
      <Blog />
      <Contact />
      <Social />
    </div>
  );
}

export default HomePage;
