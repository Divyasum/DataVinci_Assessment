import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import ProductVariants from '../ProductVariants';
import PaymentOptions from '../PaymentOptions';
import BeautyBundle from '../BeautyBundle';
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { CiCircleInfo } from "react-icons/ci";

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
  AddCartWrapper,
   ScaleContainer,
  SectionTitle,
  UMFScaleWrapper,
  UMFItem,
  TasteProfileWrapper,
  TasteBar,
  TasteThumb,
  TasteLabels,
  Divider,
   InfoContainer,
  Row,
  IconCircle,
  PointsText,
  BoldText,
  ThinText,
  
  HighlightText,
 
  
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
    <InfoContainer>

      <Row>
        <IconCircle>
          <img
            src="https://newzealandhoneyco.com/cdn/shop/files/svgviewer-output.svg?v=1744095428&width=560"
            alt="colourclub"
            width={20}
            height={20}
          />
        </IconCircle>
        <PointsText>
          Colourclub members earn up to <HighlightText>56</HighlightText> reward points when buy this item.{" "}
          <ThinText>Sign up or log in</ThinText>
        </PointsText>
      </Row>

      <Divider />

      <Row>
        <div>
          <BoldText>DELIVERY</BoldText>
          <ThinText>FREE DELIVERY ON ORDERS OVER $30</ThinText>
        </div>

        <div>
          <BoldText>ESTIMATED DELIVERY DATE:</BoldText>
          <ThinText>Jun 9 - Jun 13 to</ThinText>
        </div>
      </Row>

      <Divider />

      <Row>
        <div>
          <BoldText>AFTER PAY</BoldText>
          <ThinText>
            or 4 interest-free payments of $13.97 with <RiMoneyDollarBoxFill/> <span style={{fontWeight:"Bold"}}>Afterpay</span><CiCircleInfo/>
            
          </ThinText>
        </div>
      </Row>

      <Divider />
    </InfoContainer>

    <ScaleContainer>
     
      <SectionTitle>UMF™ SCALE</SectionTitle>
      <UMFScaleWrapper>
        <UMFItem style={{ borderBottom: '2px solid #fdbb2d' }}>UMF™ 10+</UMFItem>
        <UMFItem style={{ borderBottom: '2px solid #fdbb2d' }}>UMF™ 15+</UMFItem>
        <UMFItem style={{ borderBottom: '2px solid #f689b6' }}>UMF™ 20+</UMFItem>
        <UMFItem style={{ borderBottom: '3px solid #8f3b96', fontWeight: 'bold' }}>UMF™ 24+</UMFItem>
        <UMFItem style={{ borderBottom: '2px solid #b0dc53' }}>UMF™ 26+</UMFItem>
        <UMFItem style={{ borderBottom: '2px solid #8be3c8' }}>UMF™ 28+</UMFItem>
        <UMFItem style={{ borderBottom: '2px solid #6db4f3' }}>UMF™ 30+</UMFItem>
      </UMFScaleWrapper>

      <SectionTitle>TASTE PROFILE</SectionTitle>
      <TasteProfileWrapper>
       
        <TasteBar>
          <TasteThumb style={{ left: '60%' }} /> {/* adjust % for position */}
        </TasteBar>
         <TasteLabels>
          <span>Clean & Intense</span>
          <span>Bold & Intense</span>
        </TasteLabels>
      </TasteProfileWrapper>
    </ScaleContainer>

      </div>

    </ProductContainer>
  );
};

export default Products;