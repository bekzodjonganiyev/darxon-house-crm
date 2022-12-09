import React, { useRef } from "react";
import {CloudUploadOutlined } from "@ant-design/icons";
import '../type/Type.css'
import { Col, Row, Form, Input, Button, Upload, InputNumber } from "antd";
const TypeObekt = () => {
   const onFinish = (values) => {
     console.log("Success:", values);
   };
   const onFinishFailed = (errorInfo) => {
     console.log("Failed:", errorInfo);
   };
  return (
    <div>
      <div className="typeObject__info">
        <div className="row">
          <h2 className="obyekt__info">Tip qo'shish</h2> <hr />
          <Form
            onSubmit
            name="basic"
            // ref={useRef}
            autoComplete="off"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            
          >
            <Form.Item
              label="Nomi"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Username is required",
                },
              ]}
            >
              <Input className="typeObject__Info" />
            </Form.Item>
            <div className="">
              <Row>
                <Form.Item
                  label="Padez soni"
                  name="padez"
                  rules={[
                    {
                      required: true,
                      message: "Padez soni",
                    },
                  ]}
                >
                  <InputNumber className="object__number" />
                </Form.Item>

                <Form.Item
                  label="Qavat soni"
                  name="qavat"
                  rules={[
                    {
                      required: true,
                      message: "Qavat soni",
                    },
                  ]}
                >
                  <InputNumber className="object__number" />
                </Form.Item>

                <Form.Item
                  label="Xona soni"
                  name="xona"
                  rules={[
                    {
                      required: true,
                      message: "Xona soni",
                    },
                  ]}
                >
                  <InputNumber className="object__number" />
                </Form.Item>
              </Row>
            </div>

            <Form.Item label="Upload" valuePropName="fileList">
              <Upload
                name="photo"
                action="/upload.do"
                listType="picture-card"
                accept=".png,.jpg"
                beforeUpload={(file) => {
                  return false;
                }}
                rules={[
                  {
                    required: true,
                    message: "Username is required",
                  },
                ]}
              >
                <div>
                  <CloudUploadOutlined />

                  <div className="">Rasm yuklash</div>
                </div>
              </Upload>
            </Form.Item>
            <Form.Item>
              <Button className="typeObject__btn" type="primary" htmlType="submit">
                Yuborish
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default TypeObekt;
