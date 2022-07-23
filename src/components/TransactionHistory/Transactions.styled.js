import styled from 'styled-components';

export const Table = styled.table`
  width: 700px;
  // border: 1px solid lightgrey;
  margin-left: 20px;
  margin-bottom: 30px;
  border-collapse: collapse;
  box-shadow: 6px 6px 2px 1px rgba(233, 233, 228, 0.3);
`;

export const Thead = styled.thead`
  height: 80px;
  width: 100%;
  background-color: #04aa6d;

  &:hover {
    background-color: #04aa6d;
  }
`;

export const Th = styled.th`
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 700;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: coral;
  }
`;

export const Td = styled.td`
  font-weight: 500;
  color: grey;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;

  &:hover {
    color: black;
  }
`;
