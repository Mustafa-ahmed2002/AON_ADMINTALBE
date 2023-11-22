import React, { useState } from "react";
import { Space, Table, Modal } from "antd";
import "./admintable.css";

const AdminTable = ({ API_DATA }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleChange = () => {
    setIsModalVisible(true);
  };

  const handleDelete = (deletedProduct) => {
    const APIF = async () => {
      try {
        let apiFetch = await fetch(
          `https://dummyjson.com/products/${deletedProduct}`,
          {
            method: "DELETE",
          }
        );

        if (apiFetch.ok) {
          alert(`The Product With The ID ${deletedProduct} Has Been Deleted`);
        } else {
          alert("Check your API");
        }
      } catch (error) {
        console.log("Error fetching API:", error);
      }
    };
    APIF();
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
    const APIF = async () => {
      try {
        let apiFetch = await fetch("https://dummyjson.com/products/1", {
          method: "PUT",
          body: JSON.stringify(),
        });

        if (apiFetch.ok) {
          alert("The Product Has Been Updated");
        } else {
          alert("check your Api");
        }
      } catch (error) {
        console.log("Error fetching API:", error);
      }
    };

    APIF();
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Title",
      dataIndex: "Product",
      key: "Product",
    },
    {
      title: "Description",
      dataIndex: "Description",
      key: "Description",
    },
    {
      title: "Price",
      key: "price",
      dataIndex: "price",
    },
    {
      title: "Actions",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={handleChange}>Modify </a>
          <a onClick={() => handleDelete(record.key)}>Delete</a>
        </Space>
      ),
    },
  ];

  const data = API_DATA.map((item) => ({
    key: item.id,
    name: item.id,
    Product: item.title,
    Description: item.description,
    price: `${item.price}$`,
  }));

  return (
    <div>
      <Table className="table" columns={columns} dataSource={data} />
      <Modal
        title="Modify Product"
        open={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        className="modal"
      >
        <p>Product Name</p>
        <input
          type="text"
          placeholder=" Enter Edit Here..."
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

export default AdminTable;
