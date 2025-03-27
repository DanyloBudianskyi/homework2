import { useState } from "react";
const ItemFunc = (props) => {
    const[isActive, setBg] = useState(true)
    const changeBg = () => {
        setBg(!isActive)
    }
    const styles = {
        backgroundColor: isActive ? "red" : "green", 
        width: 70, 
        height: 40, 
        color:"white",
        border: "none"
    }
    return(
        <div>
            <h2>Item name: {props.name}, price: {props.price}</h2>
            <img src={props.imgSrc}/>
            <button onClick={changeBg} style={styles}>{isActive ? "Not active" : "Active"}</button>
        </div>
    )
}

export default ItemFunc