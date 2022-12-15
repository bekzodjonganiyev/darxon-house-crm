import { useRef } from "react";
import { Form, Input, DatePicker, Button } from "antd";
import { useDispatch } from "react-redux";

import "../object/Object.css";

import { addObject } from "../../utils/slices/objectSlice";

const CreateObject = () => {
  const { RangePicker } = DatePicker;
  const dispatch = useDispatch();
  const inputRef = useRef()
  const formData = new FormData();

  const onFinish = (e) => {
    formData.append("Nomi", e.ObektInfo);
    formData.append("manzili", e.ObyektManzili);
    formData.append("QurilishniBoshlanishSanasi", e.ObektData[0].format("YYYY-MM-DD"));
    formData.append("QurilishniBitishSanasi", e.ObektData[1].format("YYYY-MM-DD"));
    for(let i = 0; i<inputRef.current.files.length;  i++){
      formData.append("photo", inputRef.current?.files[i]);
    }
    dispatch(
      addObject(formData)
    );
    alert("Qo'shildi")
    window.location.href = "/"
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
                  name="ObektInfo"
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
                  name="ObyektManzili"
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
              <div className="ssc">
                <span>
                  <label htmlFor="Ism">Boshlanish va tugash sanasi</label>
                </span>

                <Form.Item
                  name="ObektData"
                  className="ObektInfo"
                  required
                  rows={10}
                >
                  <RangePicker className="CreatObject__data" />
                </Form.Item>
              </div>
              <div className="ssc">
                <span>
                  <label htmlFor="Ism">Obyekt rasmimi yuklang</label>
                </span>

                <Form.Item
                  name="photo"
                  className="ObektInfo"
                  required
                >
                  <input ref={inputRef} type="file" multiple name="photo" id="" />
                </Form.Item>
              </div>

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
};

export default CreateObject;
