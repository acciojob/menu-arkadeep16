import React, { useState } from 'react'


const Menu = () => {

  let data=[
    {
    
      name:"name",
      category:"breakfast",
      img: "https://picsum.photos/id/237/200/300",
      price:"price"
  
    },
    {
    
      name:"name",
      category:"breakfast",
      img: "https://picsum.photos/id/237/200/300",
      price:"price"
  
    },
    {
    
      name:"name",
      category:"breakfast",
      img: "https://picsum.photos/id/237/200/300",
      price:"price"
  
    },
    {
    
      name:"name",
      category:"lunch",
      img: "https://picsum.photos/id/237/200/300",
      price:"price"
  
    },
    {
    
      name:"name",
      category:"lunch",
      img: "https://picsum.photos/id/237/200/300",
      price:"price"
  
    },
    {
    
      name:"name",
      category:"shakes",
      img: "https://picsum.photos/id/237/200/300",
      price:"price"
  
    }
  ]

  const [menu, setMenu] = useState(data)

  function filteMenu(e){
    console.log(e.target.name)
    
    if (e.target.name === "all") {
      setMenu(data)
    } else{
      const filteredItems = data.filter((item)=>item.category === e.target.name)
      setMenu(filteredItems)
    }
  }


  return (
    <div>
        <div className='categories'>
            <button onClick={filteMenu} name='all'>All</button>
            <button onClick={filteMenu} name='breakfast'>Breakfast</button>
            <button onClick={filteMenu} name='lunch'>Lunch</button>
            <button onClick={filteMenu} name='shakes'>Shakes</button>
        </div>
        <div className="dishes-container">
        <div className='dishes'>
          {
            menu.map((dataItem,index)=>{
              return(
                <div key={index} className='menu-item'>
                  <h2>{dataItem.name}</h2>
                  <h3>{dataItem.category}</h3>
                  <img src={dataItem.img}></img>
                  <p>{dataItem.price}</p>
                </div>
              )
            })
          }
        </div>
        </div>
    </div>
  )
}

export default Menu