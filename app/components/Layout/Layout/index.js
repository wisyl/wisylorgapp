import React from 'react';
import PropTypes from 'prop-types';

import { DivColumn } from '../../Common';
import Footer from '../Footer';
import Header from '../Header';
import * as Styled from './styled';

/**
 * LAYOUT COMPONENT
 */
const Layout = ({ children }) => (
  <DivColumn>
    <Header />
    <Styled.Container>{children}</Styled.Container>
    <Footer />
  </DivColumn>
);

/**
 * PROP TYPES
 */
Layout.propTypes = {
  children: PropTypes.any,
};

// MODULE EXPORTS
export default Layout;
