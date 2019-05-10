import styled from 'styled-components';

import { DivColumn, DivRow } from 'components';
import { Media } from 'utils/constants';

export const Content = styled(DivRow)`
  margin-top: 30px;

  ${Media.tablet`
    flex-direction: column-reverse;
  `}
`;

export const Left = styled(DivColumn)`
  flex: 1;
  ${Media.tablet`
    margin-top: 30px;
  `}
`;

export const Right = styled(DivColumn)`
  min-width: 300px;
  margin-left: 20px;
  ${Media.tablet`
    margin-left: 0;
  `}
`;
