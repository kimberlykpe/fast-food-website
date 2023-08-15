import React from 'react';
import plus from '../../images/plus-1.png';

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesH2,
  ServicesP,
  ServicesIcon
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
        <ServicesIcon src={plus} />
          <ServicesH2>No Monthly Membership</ServicesH2>
          <ServicesP>
            Unlock all premium features for free! Members also receieve promotional coupons every month.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>International</ServicesH2>
          <ServicesIcon src={plus} />
          <ServicesP>
            You can access our platform online anywhere in the world. All you need is cellular data or wi-fi!
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>5% Credit Everytime</ServicesH2>
          <ServicesIcon src={plus} />
          <ServicesP>
            Unlock our special membership card to returns 5% of your total back for future purchases.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
