import styled from '@emotion/styled';
// import theme from 'constants/theme'

export const Item = styled.li``;
export const Status = styled.span`
  //   background-color: red;
  height: 10px;
  display: inline-block;
  width: 10px;
  border-radius: 50%;

  background-color: ${props => {
    return props.status ? props.theme.green : props.theme.grey;
  }};
`;
export const Avatar = styled.img``;
export const Name = styled.p``;

//
