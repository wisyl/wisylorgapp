import React from 'react';
import {
  Card,
  Table,
  Button,
} from 'reactstrap';

const dummy = [
  { name: 'Billie Ilish', email: 'Billie@greatbigfish.com', active: 4, ctr: 47 },
  { name: 'Sammy Smithster', email: 'sammie@gonnabegreat.com', active: 4, ctr: 47 },
];

export default class extends React.Component {
  render() {
    return (
      <Card>
        <Table>
          <thead>
            <th>Name</th>
            <th>Email</th>
            <th>Active Channels</th>
            <th>CTR</th>
            <th></th>
          </thead>
          <tbody>
            {Array.from(Array(20).keys()).map(value => (
              <tr key={value}>
                <th>{dummy[value % 2].name}</th>
                <th>{dummy[value % 2].email}</th>
                <th>{dummy[value % 2].active}</th>
                <th>{dummy[value % 2].ctr}</th>
                <th>
                  <Button color="link">Manage</Button>
                </th>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    );
  }
}