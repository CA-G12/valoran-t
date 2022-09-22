import React, { useState, useEffect } from "react";
import CharacterShowItems from "./charactersItems";
import background from './footer.png'

function Side(props){
    // const [image,setImage]=useState('');
    // const [details,setDetails]=useState('false');

    // const isSelected=()=>{
    //     setDetails('true');
    //     setImage(props.image);
    // }
    
    if(props.selectedid !== '1'){
        return(
    <p style={{backgroundImage:`url(${props.image})`}} details={props.selectedid}> 
    </p>

        )
    }
    else{
        return (
        <>
        <img src={background} alt="" />
        </>
        )
    }
}
export default Side;