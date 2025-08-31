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