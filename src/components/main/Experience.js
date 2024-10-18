import React from "react";

import Card from "../Card";

const Experience = ({ activeSection }) => {
  const data = [
    {
      key: 3,
      date: "2021 - present",
      title: "Blockchain Developer",
      establishment: { name: "Ideasoft", url: "https://ideasoft.io/" },
      details: [
        "Smart Contract Development: Created secure smart contracts using Solidity for decentralized trading platforms and wallets.",
        "Code Optimization: Improved contract performance to lower gas fees and enhance transaction efficiency.",
        "Testing and Auditing: Conducted thorough testing and auditing to identify and fix vulnerabilities.",
        "Collaborative Development: Collaborated with UI/UX designers and blockchain architects to integrate smart contracts into dApps.",
        "Documentation and Support: Developed comprehensive documentation for smart contracts to aid maintenance and knowledge transfer.",
      ],
      skills: [
        "Solidity",
        "Truffle",
        "Hardhat",
        "Foundry",
        "OpenZepellin",
        "Web3.js",
        "Ethers.js",
        "EVM chain",
        "Oracle",
        "DEFI",
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
