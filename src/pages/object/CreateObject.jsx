import React from 'react'
import { Form, Input, DatePicker,Button } from "antd";
import '../object/Object.css'
const CreateObject = () => {
    const onFinish = (e) => {
      console.log(e.ObektInfo);
    };
    
  return (
    <div>
      <div className="creatObject__info">
        <div className="row">
          <h2 className="obyekt__info">Obyekt qo'shish</h2> <hr />
          <Form
            onSubmit
            name="basic"
            autoComplete="off"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <div className="obektName">
              <div className="ssc">
                <span>
                  <label htmlFor="Ism">Obyekt nomi</label>
                </span>

                <Form.Item
                  className="ObektInfo"
                  name="Nomi"
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
              </div>
              <div className="ssc">
                <span>
                  <label htmlFor="Ism">Obyekt manzili</label>
                </span>

                <Form.Item
                  className="ObektInfo"
                  name="manzili"
                  rules={[
                    {
                      required: true,
                      message: "Obyekt manzili",
                    },
                  ]}
                >
                  <Input className="CreatObject__data" />
                </Form.Item>
              </div>
              <div className="object-data">
                <span>
                  <label htmlFor="Ism">Boshlanish sanasi</label>

                  <Form.Item
                    name="QurilishniBoshlanishSanasi"
                    className=""
                    required
                    rows={10}
                  >
                    <DatePicker className="ObjektData-info" />
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
                    <DatePicker className="ObjektData-info" />
                  </Form.Item>
                </span>
              </div>
              <Form.Item>
                <Button type="primary" className='btn' htmlType="submit">
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