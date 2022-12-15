import React, {useState} from "react";
import {  Link } from "react-router-dom";
import "./ObjectCard.css";

import { Card, Modal, Form, Input, DatePicker,  Upload, InputNumber, } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  InfoCircleOutlined,
 
} from "@ant-design/icons";



const ObjectCard = ({ to, defaultTitle, title, objectName, isType}) => {
  // const ShartNoma =>{}
  const [isModalInfo, setIsModalInfo] = useState(false);
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [isModalDelete, setIsModalDelete] = useState(false);
  const handleOk = () => {
  };

  return (
    <>
      {/* edit  */}
      <Modal
        title="Info"
        open={isModalInfo}
        onOk={handleOk}
        onCancel={() => setIsModalInfo(false)}
      >
        {isType === "tip" ? (
          <Form
            onSubmit
            name="basic"
            autoComplete="off"
            initialValues={{
              remember: true,
            }}
          >
            <span>
              <label htmlFor="Ism">Tip nomi</label>
            </span>
            <Form.Item className="ObektInfo" name="name" required>
              <Input className="CreatObject__data" />
            </Form.Item>
            <div className="object-info">
              <span>
                <label htmlFor="Ism">padez soni</label>
                <Form.Item name="padez_soni">
                  <InputNumber className="object__Info" />
                </Form.Item>
              </span>

              <span>
                <label htmlFor="Ism">Qavat nomi</label>

                <Form.Item name="qavat_soni">
                  <InputNumber className="object__Info" />
                </Form.Item>
              </span>
              <span>
                <label htmlFor="Ism">xona nomi</label>

                <Form.Item name="bir_padez_xona">
                  <InputNumber className="object__Info" />
                </Form.Item>
              </span>
            </div>
            <Form.Item name="photo" valuePropName="fileList" required>
              <Upload
                name="photo"
                action="/upload.do"
                listType="picture-card"
                accept=".png,.jpg"
                beforeUpload={(file) => {
                  return false;
                }}
              >
                {/* <div>
                  <div className="">Rasm yuklash</div>
                </div> */}
              </Upload>
            </Form.Item>
          </Form>
        ) : (
          <Form
            onSubmit
            name="basic"
            autoComplete="off"
            initialValues={{
              remember: true,
            }}
          >
            <span>
              <label htmlFor="Ism">Object nomi</label>
            </span>
            <Form.Item className="ObektInfo" name="Nomi" required>
              <Input className="CreatObject__data" />
            </Form.Item>
            <span>
              <label htmlFor="Ism">Object manzili</label>
            </span>
            <Form.Item className="ObektInfo" name="manzili" required>
              <Input className="CreatObject__data" />
            </Form.Item>
            <div className="object-data">
              <span>
                <label htmlFor="Ism">Boshlanish sanasi</label>

                <Form.Item
                  name="QurilishniBoshlanishSanasi"
                  className=""
                  required
                  rows={10}
                >
                  <DatePicker className="ObjektData" />
                </Form.Item>
              </span>
              <span>
                <label htmlFor="Ism">Tugash sanasi</label>

                <Form.Item
                  name="QurilishniBitishSanasi"
                  className=""
                  required
                  rows={10}
                >
                  <DatePicker className="ObjektData" />
                </Form.Item>
              </span>
            </div>
          </Form>
        )}
      </Modal>
      
      <Modal
        title="edit"
        open={isModalEdit}
        onOk={handleOk}
        onCancel={() => setIsModalEdit(false)}
      >
        {isType === "tip" ? (
          <Form
            onSubmit
            name="basic"
            autoComplete="off"
            initialValues={{
              remember: true,
            }}
          >
            <span>
              <label htmlFor="Ism">Tip nomi</label>
            </span>
            <Form.Item className="ObektInfo" name="name" required>
              <Input className="CreatObject__data" />
            </Form.Item>
            <div className="object-info">
              <span>
                <label htmlFor="Ism">padez soni</label>
                <Form.Item name="padez_soni">
                  <InputNumber className="object__Info" />
                </Form.Item>
              </span>

              <span>
                <label htmlFor="Ism">Qavat nomi</label>

                <Form.Item name="qavat_soni">
                  <InputNumber className="object__Info" />
                </Form.Item>
              </span>
              <span>
                <label htmlFor="Ism">xona nomi</label>

                <Form.Item name="bir_padez_xona">
                  <InputNumber className="object__Info" />
                </Form.Item>
              </span>
            </div>
            <Form.Item name="photo" valuePropName="fileList" required>
              <Upload
                name="photo"
                action="/upload.do"
                listType="picture-card"
                accept=".png,.jpg"
                beforeUpload={(file) => {
                  return false;
                }}
              >
                {/* <div>
                  <div className="">Rasm yuklash</div>
                </div> */}
              </Upload>
            </Form.Item>
          </Form>
        ) : (
          <>
            <Form
              onSubmit
              name="basic"
              autoComplete="off"
              initialValues={{
                remember: true,
              }}
            >
              <span>
                <label htmlFor="Ism">Object nomi</label>
              </span>
              <Form.Item className="ObektInfo" name="Nomi" required>
                <Input className="CreatObject__data" />
              </Form.Item>
              <span>
                <label htmlFor="Ism">Object manzili</label>
              </span>
              <Form.Item className="ObektInfo" name="manzili" required>
                <Input className="CreatObject__data" />
              </Form.Item>
              <div className="object-data">
                <span>
                  <label htmlFor="Ism">Boshlanish sanasi</label>

                  <Form.Item
                    name="QurilishniBoshlanishSanasi"
                    className=""
                    required
                    rows={10}
                  >
                    <DatePicker className="ObjektData" />
                  </Form.Item>
                </span>
                <span>
                  <label htmlFor="Ism">Tugash sanasi</label>

                  <Form.Item
                    name="QurilishniBitishSanasi"
                    className=""
                    required
                    rows={10}
                  >
                    <DatePicker className="ObjektData" />
                  </Form.Item>
                </span>
              </div>
            </Form>
          </>
        )}
      </Modal>

      <Modal
        title="Delete"
        open={isModalDelete}
        onOk={handleOk}
        onCancel={() => setIsModalDelete(false)}
      >
        {isType === "tip" ? <h1>tip-delete</h1> : <h1>object-delete</h1>}
      </Modal>
      <Card
        title={isType === "tip" ? "" : `${defaultTitle}: ${title}`}
        style={{ width: "400px" }}
        actions={[
          <InfoCircleOutlined
            className="icon info-icon"
            onClick={() => setIsModalInfo(true)}
          />,
          <EditOutlined
            className="icon edit-icon"
            onClick={() => setIsModalEdit(true)}
          />,
          <DeleteOutlined
            className="icon delete-icon"
            onClick={() => setIsModalDelete(true)}
          />,
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
