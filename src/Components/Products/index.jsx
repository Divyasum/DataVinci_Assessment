import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import ProductVariants from '../ProductVariants';
import PaymentOptions from '../PaymentOptions';
import BeautyBundle from '../BeautyBundle';
import { IoCheckmarkCircleSharp } from "react-icons/io5";

import {
  ProductContainer,
  ImageGallery,
  ProductImage,
  QuantityLabel,
   QuantityWrapper,
  QuantityBox,
  QuantityButton,
  QuantityValue,
  AddToCartButton,
  ShippingInfoWrapper,
  ShippingIcon,
  ShippingText,
  AddCartWrapper
  
} from './styledComponent';



const images = [
    {type: 'image',src:'https://newzealandhoneyco.com/cdn/shop/files/1-manuka-honey-web-24_-5.png?v=1743981124&width=713'},
    {type: 'image',src:'https://newzealandhoneyco.com/cdn/shop/files/1-manuka-honey-web-24.png?v=1743981124&width=713'},
  {type:'video',src:'https://www.youtube.com/embed/vnaXEMhXddE'},
 {type:'image',src:'https://newzealandhoneyco.com/cdn/shop/files/1-manuka-honey-web-24_-1.png?v=1746672809&width=713'},

{type:'image',src:'https://newzealandhoneyco.com/cdn/shop/files/1-manuka-honey-web-24_-3.png?v=1746672809&width=713'},
  {type:'image',src:'https://newzealandhoneyco.com/cdn/shop/files/US_24_Product_tiles_250g__2000_x_2000_06.jpg?v=1746672809&width=713'},
  {type:'image',src:'https://newzealandhoneyco.com/cdn/shop/files/NEwZealandManukaHoneyUMF24_-06-136149.png?v=1746672809&width=713'}
];


const Products = () => {
  
const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  

  return (
    <ProductContainer>
        <ImageGallery>
  {images.map((item, index) => (
    
        item.type === 'image' ? (
          <ProductImage   key={index} src={item.src} alt={`media-${index}`} />
        ) : (
          <iframe
            key={index}
  width="92%"
  height="315"
  src={item.src}
  title="YouTube video player"
 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
        )))}
   
</ImageGallery>

          <div>
       <ProductVariants/>
      <PaymentOptions/>
      <>
      <QuantityLabel>SELECT QUANTITY</QuantityLabel>
      <QuantityWrapper>
        <QuantityBox>
        <QuantityButton onClick={decrement}>−</QuantityButton>
        <QuantityValue>{quantity}</QuantityValue>
        <QuantityButton onClick={increment}>+</QuantityButton>

</QuantityBox>
<AddCartWrapper>
<AddToCartButton>ADD TO CART</AddToCartButton>
<ShippingInfoWrapper>
        <ShippingIcon><IoCheckmarkCircleSharp/></ShippingIcon>
        <ShippingText>Fast & Free Shipping on orders over $30 USD</ShippingText>
      </ShippingInfoWrapper>
      </AddCartWrapper>
      </QuantityWrapper>
    </>
    <BeautyBundle/>
      </div>

    </ProductContainer>
  );
};

export default Products;