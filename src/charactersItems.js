import React from "react";
// import ReactDOM from "react-dom/client";

function CharacterShowItems({ data }) {
  return (
    <>
      <ul style={{ listStyle: "none" }}>
        <li>NAME</li>
        {data.map((ele, i) => (
          <li key={i}>{ele.displayName}</li>
        ))}
      </ul>
    </>
  );
}

export default CharacterShowItems;
