import styled from 'styled-components';

import { DivRow } from 'components';
import { Media } from 'utils/constants';

export const Container = styled(DivRow)`
  .toggleAll {
    margin-right: 30px;
    &:after {
      margin-left: 110px;
    }
  }
  .toggleChannel:after {
    margin-left: 70px;
  }

  ${Media.phonePortrait`
    flex-direction: column;
    align-items: center;
  `}
`;

export const DropWrapper = styled(DivRow)`
  ${Media.phonePortrait`
    margin-bottom: 20px;
  `}
`;

export const Dummy = styled.div`
  flex: 1;
`;
