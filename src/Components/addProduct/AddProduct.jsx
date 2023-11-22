import React, { useState } from "react";
import { Button, Flex, Modal } from "antd";
import "./button.css";
const AddProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    const APIF = async () => {
      try {
        let apiFetch = await fetch("https://dummyjson.com/products/add", {
          method: "POST",
          body: JSON.stringify(),
        });

        if (apiFetch.ok) {
          alert("The Product Has Been Added");
        } else {
          alert("check your Api");
        }
      } catch (error) {
        console.log("Error fetching API:", error);
      }
    };
    setIsModalOpen(false);
    APIF();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="btns">
      <input type="text" placeholder="Find Product" />
      <Button type="primary" onClick={showModal}>
        +Add product
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="modal"
      >
        <p>Product Name</p>
        <input
          type="text"
          placeholder=" Add Product Here..."
          style={{ width: 300, height: 25, borderRadius: 8 }}
        />
        <p>Description</p>
        <input
          type="text"
          placeholder="Description"
          style={{ width: 400, height: 100, borderRadius: 8 }}
        />
        <p>Product Price</p>
        <input
          type="text"
          placeholder=" Enter Price Here..."
          style={{ width: 300, height: 25, borderRadius: 8 }}
        />
      </Modal>
    </div>
  );
};

export default AddProduct;
