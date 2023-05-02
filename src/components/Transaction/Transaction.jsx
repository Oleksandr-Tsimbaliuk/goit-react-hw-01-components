import PropTypes from 'prop-types';
import { TableBodyCell, TableBodyRow } from './Transaction.styled';
export const Transaction = ({ amount, currency, type }) => {
  return (
    <TableBodyCell>
      <TableBodyRow>{type}</TableBodyRow>
      <TableBodyRow>{amount}</TableBodyRow>
      <TableBodyRow>{currency}</TableBodyRow>
    </TableBodyCell>
  );
};

Transaction.propTypes = {
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
