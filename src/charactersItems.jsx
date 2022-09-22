import React, { useState, useEffect, createElement } from "react";
// import ReactDOM from "react-dom/client";
import Side from "./sideSection";

function CharacterShowItems({ data }) {
    const [selectedid,setSelected]=useState('dade69b4-4f5a-8528-247b-219e5a1facd6');
    const [image, setImage] = useState("");
    const [reqData,setData]=useState(null)

    useEffect(() => {
        fetch(`https://valorant-api.com/v1/agents/${selectedid}`)
          .then((resp) => resp.json())
          .then((data) => console.log(data.data));
      }, []);

  if (data.length === 0) {
    return <div>No Results Found...</div>;
  } else {
    return (
      <>
        <ul style={{ listStyle: "none" }} className="characters" selectedid = {selectedid}>
          {data.map((ele, i) => (
            <div className="container" key={ele.uuid} id={ele.uuid}>
                <li > <img className="image" src={ele.displayIconSmall} alt=""/></li>

                <div className="overlay" onClick={()=>{

                    setImage(ele.fullPortrait)
                    setSelected(ele.uuid)}
                    
                    }>
                    <div className="text" >
                    {ele.displayName}
                    </div>
                </div>
            </div>
          ))}

        </ul>
        <Side selectedid={selectedid} image={image} id="bg">
        </Side>
      </>
    );
  }
}

export default CharacterShowItems;