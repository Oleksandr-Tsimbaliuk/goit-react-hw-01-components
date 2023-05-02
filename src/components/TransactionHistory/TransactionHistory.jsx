import PropTypes from 'prop-types';
import { Table } from './TransactionHistory.styled';
import { Transaction } from 'components/Transaction/Transaction';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ amount, currency, id, type }) => {
          return (
            <Transaction
              key={id}
              amount={amount}
              currency={currency}
              type={type}
            ></Transaction>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
