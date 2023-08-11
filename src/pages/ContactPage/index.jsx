import React from "react";
import Contact from "../../containers/Contact";
import Social from "../../containers/Social";
import Header from "../../components/Header";

function ContactPage() {
  return (
    <div>
      <Header
        title="Contact Us"
        text="We thrive when coming up with innovative ideas but also understand that a smart concept should be supported with faucibus sapien odio measurable results."
      />
      <Contact />
      <Social />
    </div>
  );
}

export default ContactPage;
