import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
import { Table, Thead, Tr, Th } from './Transactions.styled';

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </Thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
