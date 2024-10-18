import React from "react";

const Contact = () => {
  const data = [
    {
      url: "mailto:solene.pettier@gmail.com",
      icon: "fa-solid fa-envelope fa-xl",
    },
    {
      url: "https://discordapp.com/users/807710224278355968",
      icon: "fab fa-discord fa-xl",
    },
    { url: "https://github.com/solenemep", icon: "fab fa-github fa-xl" },
    {
      url: "https://www.linkedin.com/in/solenemep",
      icon: "fab fa-linkedin fa-xl",
    },
  ];
  return (
    <div id="contact">
      <ul>
        {data.map((el) => {
          return (
            <li>
              <a href={el.url} target="_blank" rel="noreferrer" isExternal>
                <i className={el.icon} aria-hidden="true" />
              </a>
            </li>
          );
        })}
        <li>
          <a className="button" href="src/images/SP.jpeg" target="_blank">
            Download PDF
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
