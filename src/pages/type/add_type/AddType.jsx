import React, { useEffect, useRef } from "react";
import { Form, Input, Button, InputNumber, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";

import "../Type.css";

import { addType } from "../../../utils/slices/typeSlice";
import { getObject } from "../../../utils/slices/objectSlice";

const AddType = () => {
  const dispatch = useDispatch();
  const { objects } = useSelector((state) => state.objectSlice);
  const ref = useRef();
  const formData = new FormData();

  const onFinish = (e) => {
    formData.append("name", e.nomi);
    formData.append("padez_soni", e.padez);
    formData.append("qavat_soni", e.qavat);
    formData.append("bir_padez_xona", e.padez_xona);
    formData.append("object", e.obekt);
    for (let i = 0; i < ref.current.input.files.length; i++) {
      formData.append("photo", ref.current.input.files[i]);
    }
    dispatch(addType(formData));
    alert("Qo`shildi")
    window.location.href = "/type"
    console.log(e);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    dispatch(getObject());
    // eslint-disable-next-line
  }, []);

  const selectDom = objects.map((i) => ({
    value: i._id,
    label: i.Nomi,
  }));
  return (
    <div className="typeObject__info">
      <div className="row">
        <h2 className="obyekt__info">Tip qo'shish</h2> <hr />
        <Form
          name="basic"
          labelCol={{ span: 20 }}
          wrapperCol={{ span: 30 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="nomi"
            rules={[
              {
                required: true,
                message: "Nomi!",
              },
            ]}
          >
            <Input placeholder="Nomi" />
          </Form.Item>

          <div style={{ display: "flex", justifyContent: "space-between", gap:"100px" }}>
            <Form.Item
              name="qavat"
              rules={[
                {
                  required: true,
                  message: "Qavat!",
                },
              ]}
            >
              <InputNumber placeholder="Qavat" />
            </Form.Item>

            <Form.Item
              name="padez"
              rules={[
                {
                  required: true,
                  message: "Padez!",
                },
              ]}
            >
              <InputNumber placeholder="Padez" />
            </Form.Item>

            <Form.Item
              name="padez_xona"
              rules={[
                {
                  required: true,
                  message: "Padezdagi xonalar soni!",
                },
              ]}
            >
              <InputNumber placeholder="Xonalar soni" />
            </Form.Item>
          </div>

          <Form.Item
            name="obekt"
            rules={[
              {
                required: true,
                message: "Nomi!",
              },
            ]}
          >
            <Select options={selectDom} placeholder="Obyekt" />
          </Form.Item>

          <Form.Item
            // name="rasm"
            rules={[
              {
                required: true,
                message: "Nomi!",
              },
            ]}
          >
            <Input type="file" ref={ref} multiple/>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddType;
