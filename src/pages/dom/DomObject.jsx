import React, { useEffect } from "react";
import { Button, Form, Input, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { getType } from "../../utils/slices/typeSlice";
import { addHouse } from "../../utils/slices/houseSlice";

const DomObject = () => {
  const dispatch = useDispatch();
  const { types } = useSelector((state) => state.typeSlice);

  useEffect(() => {
    dispatch(getType());
    // eslint-disable-next-line
  }, []);

  const selectDom = types.map((i) => ({
    value: i._id,
    label: i.name,
  }));

  const onFinish = (e) => {
    console.log(e);
    dispatch(addHouse(e));
  };

  return (
    <div className="row">
      <h2 className="obyekt__info">Dom qo'shish</h2> <hr />
      <Form onFinish={onFinish}>
        <div className="ssc">
          <span>
            <label htmlFor="Ism">Dom tartib raqami</label>
          </span>
          <Form.Item
            className="domName"
            name="domName"
            required
            rules={[
              {
                required: true,
                message: "Dom tartib raqami",
              },
            ]}
          >
            <Input className="CreatObject__data" />
          </Form.Item>
        </div>
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
            <Select options={selectDom} placeholder="uyni tanlang" required />
          </Form.Item>
        </div>
        <Form.Item>
          <Button
            className="btn btn-primary obyekt__btn"
            htmlType="submit"
            type="primary"
          >
            Yuborish
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DomObject;
