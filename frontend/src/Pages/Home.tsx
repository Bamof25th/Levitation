// import React from 'react'
// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { Button, Modal, Table } from "flowbite-react";
import { Link } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";
const Home = () => {
  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
    {currentUser.isAdmin && userPosts.length > 0 ? (
      <>
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell> Date Update </Table.HeadCell>
            <Table.HeadCell> Post Image </Table.HeadCell>
            <Table.HeadCell> Post Title </Table.HeadCell>
            <Table.HeadCell> Catagory </Table.HeadCell>
            <Table.HeadCell> Delete </Table.HeadCell>
            <Table.HeadCell>
              <span className="">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          {userPosts.map((post) => (
            <>
              <Table.Body className="divide-y">
                <Table.Row className="bg-white  dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>
                    {new Date(post.updatedAt).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>
                    <Link to={`/post/${post.slug}`}>
                      <img
                        className="w-20 h-10 object-cover bg-gray-500"
                        src={post.image}
                        alt={post.title}
                      />
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <Link
                      className="font-medium text-gray-900 dark:text-gray-300 "
                      to={`/post/${post.slug}`}
                    >
                      {post.title}
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <Link to={`/post/${post.catagory}`}>{post.catagory}</Link>
                  </Table.Cell>
                  <Table.Cell>
                    <span
                      className="text-red-500 font-medium hover:underline cursor-pointer"
                      onClick={() => {
                        setShowModal(true);
                        setPostIdToDelete(post._id);
                      }}
                    >
                      Delete
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Link
                      className="text-teal-500 "
                      to={`/update-post/${post._id}`}
                    >
                      <span className="">Edit</span>
                    </Link>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </>
          ))}
        </Table>
        {showMore && (
          <button
            onClick={handelShowMore}
            className="w-full text-teal-500 self-center text-sm py-7"
          >
            Show more
          </button>
        )}
      </>
    ) : (
      <p className=""> You have no Post</p>
    )}
    <Modal
      show={showModal}
      onClose={() => setShowModal(false)}
      popup
      size={"md"}
    >
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
          <h3 className="mb-5 text-lg text-gray-400 dark:text-gray-200 ">
            Are you shure you want to delete the account?
          </h3>
          <div className="h-8 flex justify-center gap-7">
            <Button color="success" onClick={handelDeletePost}>
              {"Yes, I'am sure"}
            </Button>
            <Button color="failure" onClick={() => setShowModal(false)}>
              No, cancel
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  </div>
);
}

export default Home