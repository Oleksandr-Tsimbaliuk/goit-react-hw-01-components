import user from 'data/user.json';
import stats from 'data/stats.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

import { Container } from './App.styled';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'constants/theme';

import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';
import { FriendList } from 'components/FriendList';
import { TransactionHistory } from 'components/TransactionHistory';

export const App = () => {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={stats} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </ThemeProvider>
    </Container>
  );
};
