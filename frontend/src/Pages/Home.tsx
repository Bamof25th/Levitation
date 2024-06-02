// import React from 'react'
// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { Button, Modal, Table } from "flowbite-react";
import { CgAdd } from "react-icons/cg";
import BillHeader from "../Components/BillHeader";
import BillBody from "../Components/BillBody";
import { useState } from "react";

const Home = () => {
  const [BillInfo, setBillInfo] = useState({
    product: "",
    quantitiy: "",
    rate: "",
    total: "",
  });
  return (
    <>
      <div className="w-full p-10  bg-blue-100">
        <h1 className="text-center text-6xl italic ">Bill</h1>
      </div>
      <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell> Product </Table.HeadCell>
            <Table.HeadCell> Quantity </Table.HeadCell>
            <Table.HeadCell> Rate </Table.HeadCell>
            <Table.HeadCell> Total </Table.HeadCell>
            <Table.HeadCell> Add </Table.HeadCell>
          </Table.Head>

          <Table.Body className="divide-y">
            <Table.Row className="bg-white  dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>
                <input
                  type="text"
                  className="w-30 border-none"
                  name="name"
                  placeholder="product name"
                />
              </Table.Cell>

              <Table.Cell>
                <input
                  type="number"
                  className="w-24 border-none"
                  name="quantity"
                  placeholder="Qty"
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  type="number"
                  className="w-24 border-none"
                  name="quantity"
                  placeholder="Rate"
                />
              </Table.Cell>
              <Table.Cell>
                <span>Total</span>
              </Table.Cell>
              <Table.Cell>
                <span className="">
                  <CgAdd />
                </span>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <div className=" w-full  text-sm p-4"></div>
        <Button gradientDuoTone="redToYellow" type="submit">
          Generate Bill
        </Button>
      </div>
      <div className="grid min-w-80 m-14">
        <Table>
          <BillHeader />
          <BillBody billInfo={BillInfo} />
        </Table>
      </div>
    </>
  );
};
export default Home;
