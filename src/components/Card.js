import React from "react";

const Card = ({
  key,
  date,
  title,
  establishment,
  details,
  skills,
  image,
  links,
}) => {
  return (
    <li className="card">
      {date !== "" && <h3>{date}</h3>}
      {image !== "" && image}
      <div>
        <div className="title">
          <h4>
            <b>{title}</b>
          </h4>
          {establishment.name !== "" && establishment.url !== "" && (
            <a
              href={establishment.url}
              target="_blank"
              rel="noreferrer"
              isExternal
            >
              <i className="fa-duotone fa-solid fa-link fa-2xs" />{" "}
              {establishment.name}
            </a>
          )}
          {establishment.name !== "" && establishment.url === "" && (
            <div>{establishment.name}</div>
          )}
        </div>

        {details.map((el) => {
          return <p>{el}</p>;
        })}
        <div className="links">
          {links.map((el) => {
            return (
              el.name !== "" && (
                <a href={el.url} target="_blank" rel="noreferrer" isExternal>
                  <i className="fa-duotone fa-solid fa-link fa-2xs" /> {el.name}
                </a>
              )
            );
          })}
        </div>
        <div className="tags">
          <ul>
            {skills.map((el) => {
              return <li>{el}</li>;
            })}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default Card;
