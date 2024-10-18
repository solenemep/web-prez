import React from "react";

const About = ({ activeSection }) => {
  return (
    <section id="about">
      <h3 className={activeSection === "about" ? "active" : ""}>About</h3>
      <p>
        🌟 <b>Experienced Solidity Developer</b> with 4 years of continuous
        expertise in designing and implementing secure, scalable smart
        contracts. I’ve contributed to a diverse range of projects, ensuring{" "}
        <b>quality and reliability</b> through a strong focus on{" "}
        <b>comprehensive testing</b>. My passion for blockchain technology
        drives me to create innovative decentralized applications that stand the
        test of time. I excel in collaborative settings, always ready to tackle
        new challenges and contribute to the future of blockchain. Also love to
        play with <b>React.js</b> !
      </p>
    </section>
  );
};

export default About;
