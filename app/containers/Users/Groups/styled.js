import styled from 'styled-components';

import { DivColumn, DivRow, Paper } from 'components';

export const Container = styled(Paper)`
  margin-top: 30px;
  padding-bottom: 30px;
`;

export const ItemWrapper = styled(DivRow)`
  padding: 2px 20px;
  justify-content: space-between;
`;

export const LabelWrapper = styled(DivColumn)`
  margin-top: 20px;
`;

export const Label = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

export const Header = styled(DivRow)`
  padding: 15px 20px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 17px;
  justify-content: space-between;
  border-bottom: 1px solid #dee2e6;
`;
