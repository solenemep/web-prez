import React from "react";

import Card from "../Card";

const Experience = ({ activeSection }) => {
  const data = [
    {
      key: 1,
      date: "2021 - present",
      title: "Smart Contract Engineer",
      establishment: { name: "", url: "" },
      details: [
        "Develops secure smart contracts in Solidity for dApps",
        "Optimizes code to reduce gas costs and improve efficiency",
        "Conducts testing and audits for vulnerabilities",
        "Collaborates with front-end and back-end teams",
        "Maintains clear and useful documentation"
      ],
      skills: [
        "DeFi",
        "NFT",
        "Solidity",
        "Hardhat",
        "Foundry",
        "OpenZeppelin",
        "Web3.js",
        "Ethers.js",
        "EVM chain",
        "Oracle",
        "JavaScript",
        "TypeScript",
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
    {
      key: 2,
      date: "2025 - present",
      title: "Lead Smart Contract Engineer",
      establishment: { name: "", url: "" },
      details: [
        "Leads smart contract architecture and development",
        "Oversees optimization and security best practices",
        "Manages audits, testing, and cross-team collaboration",
        "Guides integration with front-end and back-end systems",
        "Mentors engineers and maintains technical documentation"
      ],
      skills: [
        "DePIN",
        "DeFi",
        "NFT",
        "Solidity",
        "Foundry",
        "OpenZeppelin",
        "EVM chain",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "MultiSig Safe",
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
