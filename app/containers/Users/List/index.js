import React from 'react';
import { Button, Table } from 'reactstrap';

import * as Styled from './styled';

const dummy = [
  { name: 'Billie Ilish', email: 'Billie@greatbigfish.com', active: 4, ctr: 47 },
  { name: 'Sammy Smithster', email: 'sammie@gonnabegreat.com', active: 4, ctr: 47 },
];

/**
 * LIST COMPONENT
 */
const List = () => (
  <Styled.Container>
    <Table>
      <thead>
        <tr>
          <Styled.HeaderTh>Name</Styled.HeaderTh>
          <Styled.HeaderTh>Email</Styled.HeaderTh>
          <Styled.HeaderTh>Active Channels</Styled.HeaderTh>
          <Styled.HeaderTh>CTR</Styled.HeaderTh>
          <Styled.HeaderTh />
        </tr>
      </thead>
      <tbody>
        {Array.from(Array(20).keys()).map(value => (
          <tr key={value}>
            <Styled.BodyTd>{dummy[value % 2].name}</Styled.BodyTd>
            <Styled.BodyTd>{dummy[value % 2].email}</Styled.BodyTd>
            <Styled.BodyTd>{dummy[value % 2].active}</Styled.BodyTd>
            <Styled.BodyTd>{dummy[value % 2].ctr}</Styled.BodyTd>
            <Styled.BodyTd>
              <Button color="link">Manage</Button>
            </Styled.BodyTd>
          </tr>
        ))}
      </tbody>
    </Table>
  </Styled.Container>
);

// MODULE EXPORTS
export default List;
