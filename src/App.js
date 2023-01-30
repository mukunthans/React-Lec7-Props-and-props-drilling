

import Header from './header';
import Content from './Content';
import Footer from './Footer';
import React from 'react';
import {useState} from 'react';

function App() {
      const [items,setItems] = useState([
      {
        id:1,
        checked:false,
        item:"Coke"
      },
      {
        id:2,
        checked:false,
        item:"Pepsi"

      },
            {
        id:3,
        checked:true,
        item:"Fanta"

      }
    ]);

    const handleCheck = (id) => {
        const listItems = items.map((item)=>{
         return  item.id === id ? {...item,checked:!item.checked } : item;
        })
        setItems(listItems);
        localStorage.setItem('shopingList',JSON.stringify(listItems));
    }
    const handleDelete = (id) => {
      const listItems = items.filter((item)=> item.id!==id);
      setItems(listItems);
      localStorage.setItem('shopingList',JSON.stringify(listItems));
    }


  return (
    <div className="App">
     <Header title="Bucket List"/>
     <Content items={items} 
              handleCheck={handleCheck}
              handleDelete={handleDelete}/>
     <Footer length={items.length}  />
    </div>
  );
}

export default App;
