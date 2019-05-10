import styled from 'styled-components';

import { Paper } from 'components';

export const Container = styled(Paper)`
  margin-top: 30px;
  padding: 30px 20px 30px 30px;
`;

export const HeaderTh = styled.th`
  border-top: none !important;
  border-bottom: none !important;
  padding-left: 0 !important;
  word-break: normal;
`;

export const BodyTd = styled.td`
  border-top: none !important;
  border-bottom: 1px solid #dee2e6;
  vertical-align: middle !important;
  padding: 7px 0 !important;

  button {
    word-break: keep-all;
  }
`;
