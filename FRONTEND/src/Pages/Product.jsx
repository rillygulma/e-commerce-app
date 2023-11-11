import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import { ShopContext } from '../Context/ShopContext';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';


const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  let products
  if (!productId ) {
    products = all_product.map(product=> (
    <div key={product.id}> 
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      
    </div>
    ));
  }
  const product = all_product.find((e)=> e.id === Number(productId))
  return (

    <div> 
      {product && <>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProduct/>
      </>}
       {products && products} 
    </div>  
  )
}

export default Product;
