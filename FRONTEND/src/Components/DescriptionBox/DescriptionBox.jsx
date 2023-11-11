import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
           <div className="description-nav-box">Description</div>
           <div className="description-nav-box fade">Reviews (122)</div> 
        </div>
        <div className="descriptionbox-description">
          <p>An e-commerce is the activity of electronically buying or selling products on online services
             or over the Internet. E-commerce draws on technologies such as mobile commerce,
              electronic funds transfer, supply chain management, Internet marketing, 
              online transaction processing, electronic data interchange (EDI), inventory management 
              systems, and automated data collection systems.</p>
              <p>
              E-commerce website typically display products or services a detailed
               descriptions, images, prices, and any available.  
              </p>  
        </div>
    </div>
  )
}

export default DescriptionBox;
