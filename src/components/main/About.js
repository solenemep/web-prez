import React from "react";

const About = ({ activeSection }) => {
  return (
    <section id="about">
      <h3 className={activeSection === "about" ? "active" : ""}>About</h3>
      <p>
        🌟 <b>Experienced blockchain developer</b> with a focus on{" "}
        <b>Solidity</b> and smart contract development. I prioritize rigorous
        testing to ensure that the decentralized applications I build are
        reliable and secure. Using tools like Foundry and Hardhat, I automate
        testing processes to identify vulnerabilities and optimize performance.
        My goal is to deliver high-quality code that meets industry standards
        while driving innovation in blockchain technology.
      </p>
    </section>
  );
};

export default About;
