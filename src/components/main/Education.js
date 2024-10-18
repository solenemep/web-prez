import React from "react";

import Card from "../Card";

const Education = ({ activeSection }) => {
  const data = [
    {
      key: 3,
      date: "Jan - July 2021",
      title: "Full Stack Blockchain Developer",
      establishment: { name: "Alyra School", url: "https://alyra.fr/" },
      details: [
        // "Comprehensive training in blockchain technology and decentralized application (dApp) development, covering front-end and back-end development, smart contract deployment, and hands-on project experience.",
      ],
      skills: [
        "Solidity",
        "Web3",
        "Hardhat",
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Node.js",
        "Express",
        "Git",
      ],
      image: "",
      links: [
        {
          name: "certificate",
          url: "https://certificate.bcdiploma.com/check/6EFD04E16859B0BAF0752BD2D5684CC615B806DF693940B340B2E9320121E592YXdvSkJCclBnd1VIekRDMXVzQ2R0NHF0UTM2ek1ZUk5yTHU1bUg5RUZOR1h1TG5Y",
        },
      ],
    },
    {
      key: 2,
      date: "2013 - 2016",
      title: "MSc Information Technology Engineer",
      establishment: {
        name: "Nacitional Superior School of Mines",
        url: "https://www.imt-mines-albi.fr/",
      },
      details: [
        // "Advanced training in the integration of information technology and logistics management, focusing on systems analysis, data management, and optimization techniques to enhance operational efficiency and solve complex supply chain challenges.",
      ],
      skills: ["Industrial", "Logistic", "IT Systems", "ERP", "Robotics"],
      image: "",
      links: [
        {
          name: "diploma",
          url: "https://www.cvtrust.com/SmartDiploma/Default.aspx?TOGUEvPmbwt7fTZFKrcvhOQlOWx5jYs9Iewh0a61InQIX0rkixRKd88yJDHejiuQ#/",
        },
      ],
    },
    // {
    //   key: 1,
    //   date: "2011 - 2013",
    //   title: "Intensive course of Mathematics & Physics",
    //   establishment: {
    //     name: "Michelet Hightschool",
    //     url: "http://www.cite-scolaire-michelet-vanves.ac-versailles.fr/",
    //   },
    //   details: [
    //     "Rigorous two-year curriculum allowing to develop a strong foundation in advanced mathematics, physics, and computer science, significantly enhancing analytical and problem-solving skills in preparation for future academic and professional challenges.",
    //   ],
    //   skills: ["Algebra", "Geometry", "Statisitcs"],
    //   image: "",
    //   links: [{ name: "", url: "" }],
    // },
  ];

  return (
    <section id="education">
      <h3 className={activeSection === "education" ? "active" : ""}>
        Education
      </h3>
      <ul>
        {data.map((el) => {
          return (
            <Card
              key={el.key}
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

export default Education;
