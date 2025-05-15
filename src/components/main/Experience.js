import React from "react";

import Card from "../Card";

const Experience = ({ activeSection }) => {
  const data = [
    {
      key: 1,
      date: "2021 - present",
      title: "Blockchain Developer",
      establishment: { name: "", url: "" },
      details: [
        "Smart Contract Development: Create secure smart contracts using Solidity for dApps.",
        "Code Optimization: Improve contract performance to lower gas fees and enhance transaction efficiency.",
        "Testing and Auditing: Conducte thorough testing and auditing to identify and fix vulnerabilities.",
        "Collaborative Development: Collaborate with UI/UX designers and back-end to integrate smart contracts into dApps.",
        "Documentation and Support: Develop comprehensive documentation to aid maintenance and knowledge transfer.",
      ],
      skills: [
        "Solidity",
        "Hardhat",
        "Foundry",
        "OpenZepellin",
        "Web3.js",
        "Ethers.js",
        "EVM chain",
        "Oracle",
        "DeFi",
        "NFT",
        "JavaScript",
        "Node.js",
      ],
      image: "",
      links: [
        {
          name: "",
          url: "",
        },
      ],
    },
  ];

  return (
    <section id="experience">
      <h3 className={activeSection === "experience" ? "active" : ""}>
        Experience
      </h3>
      <ul>
        {data.map((el) => {
          return (
            <Card
              date={el.date}
              title={el.title}
              establishment={el.establishment}
              details={el.details}
              skills={el.skills}
              image={el.image}
              links={el.links}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Experience;
