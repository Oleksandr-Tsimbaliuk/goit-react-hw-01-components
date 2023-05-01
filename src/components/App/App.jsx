import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';
import user from 'data/user.json';
import stats from 'data/stats.json';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
    </Container>
  );
};
