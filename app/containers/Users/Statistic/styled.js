import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { DivRow, DivColumn, Paper } from 'components';

export const Container = styled(DivRow)``;

export const Media = styled(Paper)`
  flex: 1;
  flex-direction: row;
  padding: 20px;

  & + & {
    margin-left: 20px;
  }
`;

export const UserIcon = styled(FontAwesomeIcon)`
  padding: 10px;
  width: 44px !important;
  height: 44px;
  border-radius: 50%;
  background-color: ${({ istotal }) => (istotal ? '#f4f5f8' : '#fceeeb')};
`;

export const MediaWrapper = styled(DivColumn)`
  margin-left: 25px;
`;

export const MediaTitle = styled.div`
  font-size: 38px;
  line-height: normal;
`;

export const MediaDesc = styled.div`
  font-size: 13px;
  color: #888da8;
`;
