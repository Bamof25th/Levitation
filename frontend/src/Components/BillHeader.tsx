import { Table } from "flowbite-react";

const BillHeader = () => {
  return (
    <Table.Head>
      <Table.HeadCell> Product </Table.HeadCell>
      <Table.HeadCell> Quantity </Table.HeadCell>
      <Table.HeadCell> Rate </Table.HeadCell>
      <Table.HeadCell> Total </Table.HeadCell>
    </Table.Head>
  );
};

export default BillHeader;
