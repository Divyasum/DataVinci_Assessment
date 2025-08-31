import styled from 'styled-components';


export const PaymentContainer = styled.div`
  background-color: #f7f4f0;
  padding: 24px;
  border-radius: 20px;
  max-width: 520px;
`;

export const Heading = styled.h3`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 12px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const OptionButton = styled.button`
  padding: 12px 24px;
  border-radius: 30px;
  border: ${(props) => (props.selected ? '2px solid transparent':'2px solid #ffa726' )};
  background-color: ${(props) => (props.selected ? '#ffa726' : '#fff')};
  color:${(props) => (props.selected ? '#ffffff' : '#000000')};
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #f0b233;
  }
`;

export const DeliveryContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
`;

export const DeliveryLabel = styled.label`
  font-weight: 700;
  margin-right: 8px;
`;

export const DeliverySelect = styled.select`
  padding: 12px 20px;
  border-radius: 30px;
  border: 1.5px solid #f0b233;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  min-width: 200px;
`;


export const SubscriptionInfo = styled.div`
  margin-top: 12px;
  font-size: 14px;
  color: #333;
  font-weight: 600;
  text-align: right;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;

  span {
    font-size: 18px;
  }
`;