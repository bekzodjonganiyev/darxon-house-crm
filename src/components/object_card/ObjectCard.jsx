import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Card, Modal } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

import "./ObjectCard.css";

const ObjectCard = ({ to, defaultTitle, title, objectName, isType }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <Card
        title={isType ? "" : `${defaultTitle}: ${title}`}
        style={{ width: "400px" }}
        actions={[
          <InfoCircleOutlined className="icon info-icon" onClick={showModal} />,
          <EditOutlined className="icon edit-icon" onClick={showModal} />,
          <DeleteOutlined className="icon delete-icon" onClick={showModal} />,
        ]}
      >
        <Link to={`${to ? `object/${to}` : "#"}`} className="object-card_link">
          {objectName}
        </Link>
      </Card>
    </>
  );
};

export default ObjectCard;
