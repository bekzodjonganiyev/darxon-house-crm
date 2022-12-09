import React from 'react'
import { Form, Input, DatePicker,Button } from "antd";
import '../object/Object.css'
const { RangePicker } = DatePicker;
const CreateObject = () => {
    const onFinish = (values) => {
      console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
  return (
    <div>
      <div className="creatObject__info">
        <div className="row">
          <h2 className="obyekt__info">Obyekt qo'shish</h2> <hr />
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
            <div className="obektName">
              <Form.Item
                className="ObektInfo"
                name="ObektInfo"
                label="Obyekt nomi"
                required
                rules={[
                  {
                    required: true,
                    message: "Obyekt soni",
                  },
                ]}
              >
                <Input className="CreatObject__data" />
              </Form.Item>

              <Form.Item
                className="ObektInfo"
                name="ObyektManzili"
                label="Obyekt manzili"
                rules={[
                  {
                    required: true,
                    message: "Obyekt manzili",
                  },
                ]}
              >
                <Input className="CreatObject__data" />
              </Form.Item>
              <Form.Item
                className="ObektInfo"
                label="Boshlanish va tugash sanasi"
                required
                rows={10}
              >
                <RangePicker className="CreatObject__data" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Yuborish
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default CreateObject