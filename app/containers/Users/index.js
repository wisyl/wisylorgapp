import React, { Component } from 'react';

import { Layout } from 'components';

import Filter from './Filter';
import Statistic from './Statistic';
import List from './List';
import Groups from './Groups';
import * as Styled from './styled';
import Channels from './Channels';

/**
 * USERS COMPONENT
 */
class Users extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    // for navtabs
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    return (
      <Layout>
        <Filter />
        <Styled.Content>
          <Styled.Left>
            <Statistic />
            <List />
          </Styled.Left>
          <Styled.Right>
            <Channels />
            <Groups />
          </Styled.Right>
        </Styled.Content>
      </Layout>
    );
  }
}
export default Users;
