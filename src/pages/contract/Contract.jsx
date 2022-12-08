import React from "react";
import { Button, Space, Table, Input } from "antd";
import {
  DownloadOutlined,
  PrinterOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import "./Contract.css";

const Contract = () => {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  const a = [1, 2, 34, 4, 5, 6, 342, 4, 5, 6, 76];

  const columns = [
    {
      title: "Full Name",
      width: 100,
      dataIndex: "name",
      key: "name",
      fixed: "left",
    },
    {
      title: "Age",
      width: 100,
      dataIndex: "age",
      key: "age",
      fixed: "left",
    },
    {
      title: "Column 1",
      dataIndex: "address",
      key: "1",
      width: 150,
    },
    {
      title: "Column 2",
      dataIndex: "address",
      key: "2",
      width: 150,
    },
    {
      title: "Column 3",
      dataIndex: "address",
      key: "3",
      width: 150,
    },
    {
      title: "Column 4",
      dataIndex: "address",
      key: "4",
      width: 150,
    },
    {
      title: "Column 5",
      dataIndex: "address",
      key: "5",
      width: 150,
    },
    {
      title: "Column 6",
      dataIndex: "address",
      key: "6",
      width: 150,
    },
    {
      title: "Column 7",
      dataIndex: "address",
      key: "7",
      width: 150,
    },
    {
      title: "Column 8",
      dataIndex: "address",
      key: "8",
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 150,
      render: () => (
        <div style={{ display: "flex", alignItems: "flex-end", gap: "30px" }}>
          <DownloadOutlined className="icon download-icon" />
          <PrinterOutlined className="icon print-icon" />
          <UploadOutlined className="icon upload-icon" />
        </div>
      ),
    },
  ];

  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edrward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }

  return (
    <>
      <h1 className="title">Shartnomalar</h1>
      <div className="contract">
        <Space className="contract-header" direction="horizontal">
          <Search
            placeholder="input search text"
            allowClear
            enterButton
            size="large"
            onSearch={onSearch}
          />
          <Button type="primary" size="large">
            Shartnoma qilish
          </Button>
        </Space>

        <Table
          className="contract-body"
          size="small"
          columns={columns}
          dataSource={data}
          pagination={{
            position: ["bottomCenter"],
          }}
          scroll={{
            x: 1500,
            y: 400,
          }}
        />
      </div>
    </>
  );
};
export default Contract;
