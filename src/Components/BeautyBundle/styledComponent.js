import styled from 'styled-components';

export const BundleCard = styled.div`
  background: #f9f9f9;
  border-radius: 20px;
  padding: 24px;
  width: 100%;
  max-width: 500px;
`;

export const BundleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 16px;
`;

export const BundleItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Item = styled.div`
  text-align: center;
`;

export const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
`;

export const PlusSign = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 0 8px;
`;

export const ItemLabel = styled.div`
  margin-top: 8px;
  font-size: 14px;
  font-weight: 500;

  select {
    margin-top: 4px;
    font-size: 12px;
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  gap: 10px;
`;

export const OldPrice = styled.span`
  text-decoration: line-through;
  color: #999;
`;

export const NewPrice = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

export const SaveText = styled.span`
  color: green;
  font-weight: 500;
`;

export const AddBundleButton = styled.button`
  margin-top: 16px;
  width: 100%;
  background: #262626;
  color: white;
  border: none;
  padding: 14px;
  font-size: 16px;
  border-radius: 30px;
  cursor: pointer;
`;

export const BundlePriceWrap=styled.div`

display:flex;
gap: 20px;
`