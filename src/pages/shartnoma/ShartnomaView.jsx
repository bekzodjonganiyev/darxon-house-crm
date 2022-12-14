import React, { useRef } from "react";
import { PatternFormat } from "react-number-format";
import { Form, Input, Button, Checkbox, InputNumber } from "antd";
import Pdf from "react-to-pdf";

import '../shartnoma/shartnoma.css'


const ShartnomaView = () => {
  const ref = useRef()

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="shartnomaObject__info">
      <div className="row">
        <div className="shartnoma__info">
          <h3>Shartnoma tuzish</h3>
          <hr />
        </div>
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
          <div className="NameInfo">
            <Form.Item
              label="Ism"
              rules={[
                {
                  required: true,
                  message: "Ismingizni kiriting",
                },
              ]}
            >
              <Input
                className="object__manzil"
                placeholder="Ismingizni kiriting"
              />
            </Form.Item>
            <Form.Item
              label="Familiya"
              name="FullName"
              rules={[
                {
                  required: true,
                  message: "familiya",
                },
              ]}
            >
              <Input
                className="object__manzil"
                placeholder="familiyangizni kiriting"
              />
            </Form.Item>
            <Form.Item
              label="Otangizni ismi"
              name="Otchestva"
              rules={[
                {
                  required: true,
                  message: "Otangizni ismi",
                },
              ]}
            >
              <Input className="object__manzil" placeholder="Otangizni ismi" />
            </Form.Item>
          </div>
          <div className="NameInfo">
            <Form.Item>
              <PatternFormat
                className="form-control"
                placeholder={"Telefon raqami +998"}
                value=""
                format="+998(##)###-##-##"
                mask={"_"}
                required
              />
            </Form.Item>
            <Form.Item
              label="uy manzili"
              name="passportName"
              rules={[
                {
                  required: true,
                  message: "Uy manzili",
                },
              ]}
            >
              <Input className="object__manzil" />
            </Form.Item>
          </div>
          <div className="NameInfo">
            <div className="col-md-4 box-title p-1">
              <span className="form-label__text">Passport seriya:</span>
              <br />
              <Input
                name="PassportSeria"
                placeholder="AA1234567"
                className="form-control"
                required
              />
            </div>

            <div className="col-md-4 box-title p-1">
              <span className="form-label__text">Passport JSHR raqami:</span>
              <br />
              <Input
                name="PassportSeria"
                placeholder="12345678901234"
                className="form-control"
                required
              />
            </div>
            <div className="col-4 p-1">
              <span className="form-label__text">Passport berilgan vaqt</span>
              <br />
              <data />
              <Input
                type="date"
                name="LastName"
                placeholder="familiyangizni kiriting"
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="NameInfo">
            <Form.Item
              label="uy manzili"
              name="UyManzili"
              rules={[
                {
                  required: true,
                  message: "Uy manzili",
                },
              ]}
            >
              <Input className="object__manzil" />
            </Form.Item>
            <Form.Item
              label="Qavat"
              name="UyQavat"
              rules={[
                {
                  required: true,
                  message: "Bino qavati",
                },
              ]}
            >
              <InputNumber className="object__numbers" />
            </Form.Item>
            <Form.Item
              label="uy maydoni"
              name="UyMaydoni"
              rules={[
                {
                  required: true,
                  message: "Uy maydoni",
                },
              ]}
            >
              <InputNumber className="object__numbers" />
            </Form.Item>
            <Form.Item
              label="uy raqami"
              name="UyRaqami"
              rules={[
                {
                  required: true,
                  message: "Uy raqami",
                },
              ]}
            >
              <InputNumber className="object__numbers" />
            </Form.Item>
          </div>
          <div className="NameInfo">
            <Form.Item
              label="Uyning narxi"
              name="UyningNarxi"
              rules={[
                {
                  required: true,
                  message: "Uyning narxi",
                },
              ]}
            >
              <InputNumber className="object__number" />
            </Form.Item>
            <Form.Item
              label="to'langan narx"
              name="tolanganNarx"
              rules={[
                {
                  required: true,
                  message: "to'langan narx",
                },
              ]}
            >
              <InputNumber className="object__number" />
            </Form.Item>
            <Form.Item
              label="Qolgan narx"
              name="QolganNarx"
              rules={[
                {
                  required: true,
                  message: "Qolgan narx",
                },
              ]}
            >
              <InputNumber className="object__number" />
            </Form.Item>
          </div>
          <div className="checout__btn">
            <Checkbox>
              Kiritilgan ma'lumotlar haqiqiyligini tasdiqlayman
            </Checkbox>
            <br />
            <Form.Item>
              <Button
                className="typeObject__btn"
                type="primary"
                htmlType="submit"
              >
                Yuborish
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>

      <div className="pdf">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => <Button onClick={toPdf}>Generate Pdf</Button>}
        </Pdf>
        <div ref={ref}>
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some happen!</h2>
        </div>
      </div>
    </div>
  );
}

export default ShartnomaView