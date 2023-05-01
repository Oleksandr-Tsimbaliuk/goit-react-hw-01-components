import { Item, Status, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ name, avatar, status }) => {
  return (
    <Item>
      <Status status={status}>{status}</Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};
