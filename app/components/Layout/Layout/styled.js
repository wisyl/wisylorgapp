import styled from 'styled-components';
import { Media } from 'utils/constants';

import { DivColumn } from '../../Common';

export const Container = styled(DivColumn)`
  min-height: calc(100vh - 54px);

  padding: 6.25rem 2.75rem 4rem 2.75rem;

  max-width: 1200px;
  width: 100%;
  align-self: center;

  ${Media.phone`
    padding: 4.75rem 0.5rem 2rem; 
  `}
`;
