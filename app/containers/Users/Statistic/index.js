import React from 'react';

import * as Styled from './styled';

/**
 * STATISTIC COMPONENT
 */
const Statistic = () => (
  <Styled.Container>
    {/* TOTAL USERS */}
    <Styled.Media>
      <Styled.UserIcon icon="user" size="lg" color="#888da8" istotal={1} />
      <Styled.MediaWrapper>
        <Styled.MediaTitle>2,536</Styled.MediaTitle>
        <Styled.MediaDesc>TOTAL USERS</Styled.MediaDesc>
      </Styled.MediaWrapper>
    </Styled.Media>

    {/* ACTIVE USERS */}
    <Styled.Media>
      <Styled.UserIcon icon="user" size="lg" color="#e75640" />
      <Styled.MediaWrapper>
        <Styled.MediaTitle>1,895</Styled.MediaTitle>
        <Styled.MediaDesc>ACTIVE USERS</Styled.MediaDesc>
      </Styled.MediaWrapper>
    </Styled.Media>
  </Styled.Container>
);

// MODULE EXPORTS
export default Statistic;
