import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 550px;
  padding: 0;
  margin-left: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  background-color: rgb(199, 241, 247);
  box-shadow: 3px 3px 1px 1px rgba(233, 233, 228, 0.3);
`;

export const Li = styled.li`
  width: 100px;
  margin: 0;
  padding: 10px;
  &:hover {
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);
    background-color: rgb(113, 201, 214);
    color: blue;
  }
`;

export const Span = styled.span`
  width: 15px;
  height: 15px;
  margin-left: auto;
  margin-right: 10px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;

export const Img = styled.img`
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const P = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
