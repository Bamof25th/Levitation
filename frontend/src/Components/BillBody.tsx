import { Table } from "flowbite-react";

const BillBody = ({billInfo}) => {
  return (
    
      <Table.Body className="divide-y">
        <Table.Row className="bg-white  dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell>
            <span>Nike</span>
          </Table.Cell>

          <Table.Cell>
            <span>10</span>
          </Table.Cell>
          <Table.Cell>
            <span>1000</span>
          </Table.Cell>
          <Table.Cell>
            <span>10000</span>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
  
  );
};

export default BillBody;
