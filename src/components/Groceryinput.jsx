import {useState} from "react"

export const Groceryinp = ({ getdata })=>{

    const [text,setText]=useState("");
    

    const handleChange = (e)=>{
        setText(e.target.value);
       
    }

    const handleClick = (e)=>{
        getdata(text);
       setText("")
    }

    
    return(
        <>
        <input type="text" placeholder="Enter Grocery Items" value={text}  onChange={handleChange} />
        <button onClick={handleClick}>Add Item</button>
        </>
    )

}