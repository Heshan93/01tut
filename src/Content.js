import React from 'react'
import { useState } from 'react';
import {FaTrashAlt} from 'react-icons/fa';


function Content() {

    const [items, setItem ] = useState([
        {
            id: 1,
            checked: true,
            item: "One half pound bag of Cocoa Covered Almonds Unsalted"
        },
        {
            id: 2,
            checked: false,
            item: "Item 2"
        },
        { 
            id: 3,
            checked: false,
            item: "Item 3"
        }
    ]);


   const handleCheck = (id) => {
        const listItem = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
        setItem(listItem);
        localStorage.setItem('shopingList', JSON.stringify(listItem));
   } 

    const handleDelete = (id) => {
        
        const listItem = items.filter((item) => item.id !== id);
        setItem(listItem);
        localStorage.setItem ('shopingList', JSON.stringify(listItem));
    };


  return (  
    <main>
        {items.length ? (
            <ul>
                {items.map((item)  => (
                    <li className='item' key={item.id}>
                        <input type="checkbox"
                        onChange= {() => handleCheck(item.id)}
                        checked = {item.checked}
                    />
                    <label 
                    
                    style={(item.checked) ?{textDecoration:'line-through'} : null}

                    onDoubleClick={() => handleCheck(item.id)}

                    > {item.item} </label>
                    <FaTrashAlt onClick={() => handleDelete(item.id)} role= 'button' tabIndex= '0' />

                    </li>
                ))}

            </ul>
       ) : ( <p style={{marginTop: '2em'}}> your list is empty </p> )}
      
    </main>
  )
}


 export default Content;


