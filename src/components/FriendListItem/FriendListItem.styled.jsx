import styled from '@emotion/styled';
// import theme from 'constants/theme'

export const Item = styled.li`
  margin-top: 14px;
`;
export const Status = styled.span`
  height: 10px;
  display: inline-block;
  width: 10px;
  border-radius: 50%;

  background-color: ${props => {
    return props.status ? props.theme.green : props.theme.grey;
  }};
`;
export const Avatar = styled.img``;
export const Name = styled.p`
  margin: 0;
  margin-top: 14px;
  text-align: center;
`;
