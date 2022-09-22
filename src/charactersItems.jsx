import React from "react";
// import ReactDOM from "react-dom/client";

function CharacterShowItems({ data }) {
  if (data.length === 0) {
    return <div>No Results Found...</div>;
  } else {
    return (
      <>
        <ul style={{ listStyle: "none" }} className="characters">
          {data.map((ele, i) => (
            <div className="container">
                <li key={ele.uuid}> <img className="image" src={ele.displayIconSmall} alt="" /></li>
                <div className="overlay">
                    <div className="text">
                    {ele.displayName}
                    </div>
                </div>
            </div>
          ))}
        </ul>
      </>
    );
  }
}

export default CharacterShowItems;