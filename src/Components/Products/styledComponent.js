import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  
  padding: 20px;
`;

export const ImageGallery = styled.div`
@media (max-width: 767px) {
 display:none;
}

@media (min-width: 1024px) {
  flex: 1;
  display: flex;
flex-wrap: wrap;
  gap: 10px;
}
 
`;

export const ProductImage = styled.img`
  width: 45%;

  
  align-self: start;
 
`;


export const QuantityLabel = styled.div`
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 8px;
  font-size: 14px;
`;

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const QuantityBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:250px;
  background-color: #fdbb2d;
  border-radius: 30px;
  padding: 8px 16px;
  font-weight: bold;
  color:#ffffff;
`;

export const QuantityButton = styled.button`
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 0 12px;
  color:#ffffff;
`;

export const QuantityValue = styled.span`
  min-width: 24px;
  text-align: center;
  font-size: 16px;
`;

export const AddToCartButton = styled.button`
  background-color: #262626;
  color: white;
  width:250px;
  font-weight: 400;
  padding: 8px 32px;
  border-radius: 30px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  margin-top: 25px;
`;

export const ShippingInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ShippingIcon = styled.span`
  color: #fdbb2d;
  font-size: 18px;
`;

export const ShippingText = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 400;
`;

export const AddCartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const ScaleContainer = styled.div`
  margin-top: 40px;
  font-family:"Roboto";
font-weight: 400;
`;

export const Divider = styled.hr`
  margin: 20px 0;
  border: none;
  border-top: 1px solid #ccc;
`;

export const SectionTitle = styled.h3`
  font-size: 14px;
  font-weight: 400;
  margin: 12px 0;
`;

export const UMFScaleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const UMFItem = styled.div`
  font-size: 12px;
  padding-bottom: 4px;
  text-align: center;
  flex: 1;
  border-bottom: 2px solid #ccc;
`;

export const TasteProfileWrapper = styled.div`
  margin-top: 20px;
`;

export const TasteLabels = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-bottom: 6px;
`;

export const TasteBar = styled.div`
  position: relative;
  height: 6px;
  background: linear-gradient(to right, #fdbb2d, #8f3b96, #6db4f3);
  border-radius: 3px;
`;

export const TasteThumb = styled.div`
  position: absolute;
  top: -6px;
  width: 16px;
  height: 16px;
  background-color: #262626;
  border-radius: 50%;
  transform: translateX(-50%);
`;

export const InfoContainer = styled.div`
  margin-top: 20px;
  font-size: 14px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

export const IconCircle = styled.div`
  background-color: transparent;
  width: 40px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PointsText = styled.p`
  margin: 0;
  font-size: 14px;
  flex: 1;
`;

export const BoldText = styled.p`
  font-weight: 400;
  font-size: 12px;
  margin: 0;
`;

export const ThinText = styled.p`
  font-weight: 300;
  font-size: 12px;
  margin: 4px 0 0 0;
  color: #333;
`;

export const HighlightText = styled.span`
  background-color: #fff5e0;
  padding: 4px 8px;
  border-radius: 50%;
  font-weight: bold;
  color: #fcb900;
`;



export const AfterpayLogo = styled.img`
  height: 16px;
  vertical-align: middle;
  margin-left: 6px;
`;