import React, { useState } from 'react';
import { MdOutlineRefresh } from "react-icons/md";
import { PaymentContainer, Heading, ButtonGroup, OptionButton, DeliveryContainer, DeliveryLabel, DeliverySelect, SubscriptionInfo } from './styledComponent';

const options = [
  { label: (
      <div style={{
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
}}>
        <div>One-time purchase</div>
        <div>$114.82 USD</div>
      </div>
    ), value: 'one-time' },
  { label: (
      <div style={{
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
}}>
    <>
        <div>Subscribe & save</div>
        <div>20%</div>
        </>
        <div>$91.86 USD</div>
      </div>
    ), value: 'subscribe' },
];

const PaymentOptions = () => {
  const [selected, setSelected] = useState(options[0].value);
  const [deliveryFrequency, setDeliveryFrequency] = useState('4 weeks');

  return (
    <>
    <Heading>Payment Options (Select One)</Heading>
    <PaymentContainer>
      <ButtonGroup>
        {options.map(({ label, value }) => (
          <OptionButton
            key={value}
            selected={selected === value}
            onClick={() => setSelected(value)}
          >
            {label}
          </OptionButton>
        ))}
      </ButtonGroup>


      {selected === 'subscribe' && (
        <DeliveryContainer>
          <DeliveryLabel htmlFor="delivery-frequency">Delivery:</DeliveryLabel>
          <DeliverySelect
            id="delivery-frequency"
            value={deliveryFrequency}
            onChange={(e) => setDeliveryFrequency(e.target.value)}
          >
            <option value="4 weeks">Delivery every 4 weeks</option>
            <option value="8 weeks">Delivery every 8 weeks</option>
            <option value="12 weeks">Delivery every 12 weeks</option>
          </DeliverySelect>
        </DeliveryContainer>
      )}
      <SubscriptionInfo>
        <MdOutlineRefresh/> What is a Subscription?
      </SubscriptionInfo>
      </PaymentContainer>
    </>
  );
};

export default PaymentOptions