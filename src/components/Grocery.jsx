import React, { useState } from 'react';
import { Groceryinp } from './Groceryinput';
import { Groceryitem } from './Grocerylist';
import {nanoid} from 'nanoid'


export const Grocery = ()=>{
     const [list,setList] = useState([]);

     const handleClick = (data)=>{
        // console.log(list);
        const payload = {
            title:data,
            id:nanoid(6),
        }
         setList([...list,payload]);
     };

     return(
        <>
        <Groceryinp getdata={handleClick}/>
        {list.map((e,i)=>{
            return <Groceryitem key={e.id} title={e.title}/>
          
        })}

        
       
        </>
     )
}