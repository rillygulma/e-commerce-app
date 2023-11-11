import React from 'react'
import './NewCollections.css'
import newCollectionData from '../Assests/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className='new-collection'>
      <h1>NEW COLLECTIONS</h1>
      <hr/>
      <div className="collections">
        {newCollectionData.map((item, i) => (
            <Item
              key={i} 
              id={item.id} 
              name={item.name} 
              image={item.image} 
              new_price={item.new_price} 
              old_price={item.old_price} 
            />
        ))}
      </div>
    </div>
  )
}

export default NewCollections;
