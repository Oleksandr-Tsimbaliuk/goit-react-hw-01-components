import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  border: 1px dashed;
  width: 220px;
  height: 250px;
`;
export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding-top: 5px;
`;
export const UserAvatar = styled.img`
  width: 110px;
`;
export const UserName = styled.p`
  margin: 0;
`;
export const UserTag = styled.p`
  margin: 0;
`;
export const UserLocation = styled.p`
  margin: 0;
`;
export const Stats = styled.ul`
  margin: 0;
  margin-top: 15px;
  margin-bottom: 5px;

  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
`;
export const StatsElement = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ElementLabel = styled.span``;
export const ElementQuantity = styled.span``;
