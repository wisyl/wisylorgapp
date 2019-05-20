import React from 'react';
import PropTypes from 'prop-types';

import { DivColumn } from '../../Common';
import * as Styled from './styled';

/**
 * LAYOUT COMPONENT
 */
const Layout = ({ children }) => (
  <DivColumn>
    <Styled.Container>{children}</Styled.Container>
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
