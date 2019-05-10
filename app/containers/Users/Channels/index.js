import React from 'react';

import * as Styled from './styled';

/**
 * CHANNELS COMPONENT
 */
const Channels = () => {
  const renderItem = (name, percent, color) => (
    <Styled.ItemWrapper>
      <Styled.LabelWrapper>
        <Styled.Label>{name}</Styled.Label>
        <Styled.Label>{percent}%</Styled.Label>
      </Styled.LabelWrapper>
      <Styled.LineWrapper>
        <Styled.Line color={color} percent={percent} />
      </Styled.LineWrapper>
    </Styled.ItemWrapper>
  );

  return (
    <Styled.Container>
      <Styled.Header>User Channels</Styled.Header>
      {renderItem('Email', 62, '#ff603f')}
      {renderItem('Slack', 46, '#7d5abf')}
      {renderItem('Twitter', 79, '#37a8fc')}
      {renderItem('WhatsApp', 34, '#13ddc2')}
      {renderItem('Snapchat', 95, '#fedc3a')}
    </Styled.Container>
  );
};

// MODULE EXPORTS
export default Channels;
