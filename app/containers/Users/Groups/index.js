import React from 'react';
import { Button } from 'reactstrap';

import * as Styled from './styled';

/**
 * GROUPS COMPONENT
 */
const Groups = () => {
  const renderItem = name => (
    <Styled.ItemWrapper>
      <Styled.LabelWrapper>
        <Styled.Label>{name}</Styled.Label>
        <div>935 People</div>
      </Styled.LabelWrapper>
      <Button color="link">Manage</Button>
    </Styled.ItemWrapper>
  );

  return (
    <Styled.Container>
      <Styled.Header>Groups</Styled.Header>
      {renderItem('Northeast Division')}
      {renderItem('South Division')}
      {renderItem('Northeast Division')}
      {renderItem('Northeast Division')}
    </Styled.Container>
  );
};

// MODULE EXPORTS
export default Groups;
