import React, { useEffect, useRef } from "react";
import { Row, Form, Input, Button, InputNumber, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";

import "../Type.css";

import { addType, getType } from "../../../utils/slices/typeSlice";
import { getObject } from "../../../utils/slices/objectSlice";

const AddType = () => {
  const dispatch = useDispatch();
  const { objects } = useSelector((state) => state.objectSlice);
  const ref = useRef();
  const formData = new FormData();

  const onFinish = (e) => {
    formData.append("name", e.name);
    formData.append("padez_soni", e.padez);
    formData.append("qavat_soni", e.qavat);
    formData.append("bir_padez_xona", e.xona);
    formData.append("object", e.domType);
    for (let i = 0; i<ref.current.files.length; i++) {
      formData.append("photo", ref.current.files[i]);
    }
    dispatch(addType(formData));
    alert("Qo'shildi");
    window.location.href = "/";
  };

  useEffect(() => {
    dispatch(getObject());
    // eslint-disable-next-line
  }, []);

  console.log(objects)

  const selectDom = objects.map((i) => ({
    value: i._id,
    label: i.Nomi,
  }));
  return (
    <div>
      <div className="typeObject__info">
        <div className="row">
          <h2 className="obyekt__info">Tip qo'shish</h2> <hr />
          <Form
            onSubmit
            name="basic"
            autoComplete="off"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
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
                  label="Xonalar soni"
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

            <Form.Item
              rules={[
                {
                  required: true,
                  message: "rasm yuklamadi",
                },
              ]}
              required
            >
              <input type="file" multiple ref={ref} />
            </Form.Item>
            <div className="ssc">
              <span>
                <label htmlFor="Ism">Dom tipini tanlang</label>
              </span>
              <Form.Item
                className="domType"
                name="domType"
                required
                rules={[
                  {
                    required: true,
                    message: "Dom tipi",
                  },
                ]}
              >
                <Select
                  options={selectDom}
                  placeholder="uyni tanlang"
                  required
                />
              </Form.Item>
            </div>
            <Form.Item>
              <Button
                className="typeObject__btn"
                type="primary"
                htmlType="submit"
              >
                Yuborish
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddType;
