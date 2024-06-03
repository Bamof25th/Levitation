import { Table } from "flowbite-react";

const BillBody = ({ billInfo }) => {
  return (
    <Table>
      <Table.Head>
        <Table.HeadCell> Product </Table.HeadCell>
        <Table.HeadCell> Quantity </Table.HeadCell>
        <Table.HeadCell> Rate </Table.HeadCell>
        <Table.HeadCell> Total </Table.HeadCell>
      </Table.Head>
      {!billInfo ? (
        <h1>Please add items</h1>
      ) : (
        <>
          {billInfo.map((item, i) => (
            <>
              <Table.Body className="divide-y">
                <Table.Row className="bg-white  dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>
                    <span key={i}>{item.productName}</span>
                  </Table.Cell>
                  <Table.Cell>
                    <span key={i}>{item.productQty}</span>
                  </Table.Cell>
                  <Table.Cell>
                    <span key={i}>{item.productRate}</span>
                  </Table.Cell>
                  <Table.Cell>
                    <span key={i}>{item.productTotal}</span>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </>
          ))}
        </>
      )}
    </Table>
  );
};

export default BillBody;
