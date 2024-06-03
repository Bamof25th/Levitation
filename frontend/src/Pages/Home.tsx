// import React from 'react'
// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { Button, Table } from "flowbite-react";
import { CgAdd } from "react-icons/cg";
import BillBody from "../Components/BillBody";
import { useState } from "react";
import { FiDelete } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import { signOutSuccess } from "../redux/reducer/userSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const [BillInfo, setBillInfo] = useState({
    productName: "",
    productQty: 0,
    productRate: 0,
  });
  const [billData, setBillData] = useState([]);
  console.log(billData);
  const handelChange = (e) => {
    setBillInfo({ ...BillInfo, [e.target.name]: e.target.value });
  };
  const handelAdd = async () => {
    try {
      const res = await fetch(`/v1/api/bill/item/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(BillInfo),
      });
      const data = await res.json();

      if (data.message) {
        handelGet();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handelGet = async () => {
    try {
      const res = await fetch(`/v1/api/bill/item/all`);
      const data = await res.json();
      setBillData(data.items);
    } catch (error) {
      console.log(error);
    }
  };
  const handelDelete = async () => {
    try {
      await fetch(`/v1/api/bill/item/delete`, {
        method: "DELETE",
      });
      setBillData([]);
    } catch (error) {
      console.log(error);
    }
  };
  const handelGenerate = async () => {
    try {
      await fetch(`/v1/api/bill/new`);

      setBillData([]);
    } catch (error) {
      console.log(error);
    }
  };
  const dispatch = useDispatch();
  const handelSignOut = async () => {
    try {
      const res = await fetch("/v1/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();

      if (!res.ok) {
        console.log(data.message);
      } else {
        return dispatch(signOutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="w-full p-10  bg-blue-100">
        <h1 className="text-center text-6xl italic ">Bill</h1>
        <div className="flex gap-2 ">
          <span className="gap-3" onClick={handelSignOut}>
            LOGOUT
            <BiLogOut />
          </span>
        </div>
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
                  name="productName"
                  placeholder="product name"
                  onChange={handelChange}
                />
              </Table.Cell>

              <Table.Cell>
                <input
                  type="number"
                  className="w-24 border-none"
                  name="productQty"
                  placeholder="Qty"
                  onChange={handelChange}
                />
              </Table.Cell>
              <Table.Cell>
                <input
                  type="number"
                  className="w-24 border-none"
                  name="productRate"
                  placeholder="Rate"
                  onChange={handelChange}
                />
              </Table.Cell>
              <Table.Cell>
                <span>{BillInfo.productQty * BillInfo.productRate}</span>
              </Table.Cell>
              <Table.Cell>
                <span className="" onClick={handelAdd}>
                  <CgAdd />
                </span>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
      <div className="grid min-w-80 m-14">
        <BillBody billInfo={billData} />
      </div>
      <div className="flex gap-4 place-content-center">
        <Button type="submit" onClick={handelGenerate}>
          Generate Bill
        </Button>
        <Button className="bg-red-500" type="submit" onClick={handelDelete}>
          <FiDelete className="mr-2 h-5 w-5" />
          Delete Items
        </Button>
      </div>
    </>
  );
};
export default Home;
