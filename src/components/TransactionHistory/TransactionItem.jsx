import { Tr, Td } from './Transactions.styled';

export default function TransactionItem({ type, amount, currency }) {
  return (
    <Tr>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </Tr>
  );
}
