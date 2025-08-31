import React from 'react';
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import {
  BundleCard,
  BundleHeader,
  BundleItems,
  Item,
  ItemImage,
  PlusSign,
  ItemLabel,
  PriceWrapper,
  OldPrice,
  NewPrice,
  SaveText,
  AddBundleButton,
  BundlePriceWrap
} from './styledComponent';

const BeautyBundle = () => {
  return (
    <BundleCard>
      <BundleHeader>
        <h3 style={{fontWeight:300}}><MdArrowBackIos/>Beauty Bundle<MdArrowForwardIos/></h3>
       
      </BundleHeader>

      <BundlePriceWrap>

      <BundleItems>
        <Item>
          <ItemImage src="https://newzealandhoneyco.com/cdn/shop/files/manuka-honey-umf20-250g-611528.png?v=1715034656&width=1128" alt="UMF 20+" />
          <ItemLabel>UMF 20+ <br /> <select style={{borderRadius:"20px",padding:"5px"}}><option>250g</option></select></ItemLabel>
        </Item>

        <PlusSign>+</PlusSign>

        <Item>
          <ItemImage src="https://newzealandhoneyco.com/cdn/shop/files/manuka-honey-umf24-250g-614081.png?v=1715034656&width=1128" alt="UMF 24+" />
          <ItemLabel>UMF 24+ <br /> <select style={{borderRadius:"20px",padding:"5px"}}><option>250g</option></select></ItemLabel>
        </Item>

        <PlusSign>+</PlusSign>

        <Item>
          <ItemImage src="https://newzealandhoneyco.com/cdn/shop/files/Manuka-Honey-Wooden-Spoon-12cm_9f2a2df8-32f0-48f9-a64b-fd0cd1b30d8a-452168.png?v=1715034337&width=713" alt="Spoon" />
          <ItemLabel>Wooden <br /> Spoon</ItemLabel>
        </Item>
      </BundleItems>
<div>
      <PriceWrapper>
        <OldPrice>$478.75 USD</OldPrice>
        <NewPrice>$430.88 USD</NewPrice>
        <SaveText>Save 10%</SaveText>
      </PriceWrapper>


      <AddBundleButton>ADD BUNDLE TO CART</AddBundleButton>
      </div>
      </BundlePriceWrap>
    </BundleCard>
  );
};

export default BeautyBundle;