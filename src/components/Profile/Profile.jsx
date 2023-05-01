import PropTypes from 'prop-types';
import {
  ProfileCard,
  ProfileDescription,
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
  Stats,
  StatsElement,
  ElementLabel,
  ElementQuantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <ProfileDescription>
        <UserAvatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserTag>{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </ProfileDescription>

      <Stats>
        <StatsElement>
          <ElementLabel>Followers: </ElementLabel>
          <ElementQuantity>{stats.followers}</ElementQuantity>
        </StatsElement>
        <StatsElement>
          <ElementLabel>Views: </ElementLabel>
          <ElementQuantity>{stats.views}</ElementQuantity>
        </StatsElement>
        <StatsElement>
          <ElementLabel>Likes: </ElementLabel>
          <ElementQuantity>{stats.likes}</ElementQuantity>
        </StatsElement>
      </Stats>
    </ProfileCard>
  );
};

Profile.prototype = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
