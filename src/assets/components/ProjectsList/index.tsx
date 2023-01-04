import React from "react";

export function ProjectsList({ list }) {
  return (
    <div>
      {list.map((item) => (
        <div>
          <h1>{item.title}</h1>
          <p>{item.summary}</p>
          <ul>
            {item.techs.map((techItem) => (
              <li>{techItem}</li>
            ))}
          </ul>
          <a href={item.page}>view project</a>
          <a href={item.repository}>code on github</a>

          <img src={item.coverImg} alt="" width="250px" />
        </div>
      ))}
    </div>
  );
}
