import styled from 'styled-components';

import { DivColumn, DivRow, Paper } from 'components';
import { Media } from 'utils/constants';

export const Container = styled(Paper)`
  padding-bottom: 20px;
`;

export const ItemWrapper = styled(DivColumn)`
  padding: 10px 20px;
  justify-content: space-between;
`;

export const LabelWrapper = styled(DivRow)`
  justify-content: space-between;
`;

export const Label = styled.div`
  font-size: 13px;
`;

export const Header = styled(DivRow)`
  padding: 15px 20px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 17px;
  justify-content: space-between;
  border-bottom: 1px solid #dee2e6;
`;

export const LineWrapper = styled.div`
  margin-top: 20px;
  background-color: #ebecf1;
  height: 5px;
  border-radius: 10px;
  overflow: hidden;
`;

export const Line = styled.div`
  width: ${({ percent }) => percent}%;
  height: 100%;
  background-color: ${({ color }) => color};
`;
