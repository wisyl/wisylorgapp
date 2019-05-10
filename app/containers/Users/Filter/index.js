import React from 'react';
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import * as Styled from './styled';

/**
 * FILTER COMPONENT
 */
class Filter extends React.Component {
  state = {
    all: false,
    channels: false,
  };

  /**
   * HANDLE TOGGLE
   */
  handleToggle = id => () => {
    this.setState(({ [id]: value }) => ({
      [id]: !value,
    }));
  };

  render() {
    const { all, channels } = this.state;
    return (
      <Styled.Container>
        <Styled.DropWrapper>
          {/* ALL DROPDOWN */}
          <Dropdown isOpen={all} toggle={this.handleToggle('all')}>
            <DropdownToggle className="toggleAll" color="info" caret>
              All
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem>Some Action</DropdownItem>
              <DropdownItem disabled>Action (disabled)</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Foo Action</DropdownItem>
              <DropdownItem>Bar Action</DropdownItem>
              <DropdownItem>Quo Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          {/* CHANNELS DROPDOWN */}
          <Dropdown isOpen={channels} toggle={this.handleToggle('channels')}>
            <DropdownToggle className="toggleChannel" color="info" caret>
              Channels
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem>Some Action</DropdownItem>
              <DropdownItem disabled>Action (disabled)</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Foo Action</DropdownItem>
              <DropdownItem>Bar Action</DropdownItem>
              <DropdownItem>Quo Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Styled.DropWrapper>

        {/* DUMMY */}
        <Styled.Dummy />

        {/* NEW USER */}
        <Button color="primary">+ New User</Button>
      </Styled.Container>
    );
  }
}

// MODULE EXPORTS
export default Filter;
