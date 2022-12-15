import React, { useRef, useState } from "react";
import { PatternFormat } from "react-number-format";
import { Form, Input, Button, DatePicker, InputNumber } from "antd";
import { jsPDF } from "jspdf";

import "../shartnoma/shartnoma.css";
import Test2 from "../../components/Test2";

const ShartnomaView = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [obj, setObj] = useState({});

  const handleGeneratePdf = () => {
    const doc = new jsPDF("p","px","a3", true);

    // Adding the fonts.
    doc.setFont("Inter-Regular", "normal");
    doc.html(ref.current, {
      async callback(doc) {
        await doc.save("document");
      },
    });
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    setObj({ ...values });
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
            <div className="box-info">
              <span>
                <label htmlFor="Ism">Ism</label>
              </span>
              <Form.Item
                name="ism"
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
            </div>
            <div className="box-info">
              <span>
                <label htmlFor="Ism">Familiya</label>
              </span>
              <Form.Item
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
            </div>
            <div className="box-info">
              <span>
                <label htmlFor="Ism">Otangizni ismi</label>
              </span>
              <Form.Item
                name="OtasiIsmi"
                rules={[
                  {
                    required: true,
                    message: "Otangizni ismi",
                  },
                ]}
              >
                <Input
                  className="object__manzil"
                  placeholder="Otangizni ismi"
                />
              </Form.Item>
            </div>
          </div>
          <div className="NameInfo">
            <div className="box-info">
              <span>
                <label htmlFor="Ism">Viloyat, Shahar</label>
              </span>
              <Form.Item
                name="viloyat"
                rules={[
                  {
                    required: true,
                    message: "viloyatni kiriting",
                  },
                ]}
              >
                <Input
                  className="object__manzil"
                  placeholder="Viloyat, Shahar"
                />
              </Form.Item>
            </div>
            <div className="box-info">
              <span>
                <label htmlFor="Ism">shahar, tuman</label>
              </span>
              <Form.Item
                name="shahar"
                rules={[
                  {
                    required: true,
                    message: "shaharni kiriting",
                  },
                ]}
              >
                <Input className="object__manzil" placeholder="shahar, tuman" />
              </Form.Item>
            </div>
            <div className="box-info">
              <span>
                <label htmlFor="Ism">telefon nomer</label>
              </span>
              <Form.Item name="phone">
                <PatternFormat
                  className="object__manzil dssds"
                  placeholder={"Telefon raqami +998"}
                  value=""
                  format="+998(##)###-##-##"
                  mask={"_"}
                  required
                />
              </Form.Item>
            </div>
          </div>
          <div className="NameInfo">
            <div className="box-info">
              <span>
                <label htmlFor="Ism">Passport seriya</label>
              </span>
              <Form.Item
                name="passportseria"
                rules={[
                  {
                    required: true,
                    message: "Passport seriya kiriting",
                  },
                ]}
              >
                <Input className="object__manzil" placeholder="AA1234567" />
              </Form.Item>
            </div>
            <div className="box-info">
              <span>
                <label htmlFor="Ism">JSHR raqami</label>
              </span>
              <Form.Item
                name="jshr"
                rules={[
                  {
                    required: true,
                    message: "JSHR raqami kiriting",
                  },
                ]}
              >
                <Input
                  className="object__manzil"
                  placeholder="12345678901234"
                />
              </Form.Item>
            </div>
            <div className="box-info">
              <span>
                <label htmlFor="Ism">berilgan vaqt</label>
              </span>
              <Form.Item
                name="pasdata"
                rules={[
                  {
                    required: true,
                    message: "passport berilgan vaqtni kiriting",
                  },
                ]}
              >
                <DatePicker className="object__manzil" />
              </Form.Item>
            </div>
          </div>

          <div className="NameInfo">
            <div className="box-info">
              <span>
                <label htmlFor="Ism">uy manzili</label>
              </span>
              <Form.Item
                name="UyManzili"
                rules={[
                  {
                    required: true,
                    message: "Uy manzili",
                  },
                ]}
              >
                <Input className="object__manzil" placeholder="uy manzili" />
              </Form.Item>
            </div>
            <div className="box-info">
              <span>
                <label htmlFor="Ism">uy raqami</label>
              </span>
              <Form.Item
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

            <div className="box-info">
              <span>
                <label htmlFor="Ism">Qavat</label>
              </span>
              <Form.Item
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
            </div>
            <div className="box-info">
              <span>
                <label htmlFor="Ism">uy maydoni</label>
              </span>
              <Form.Item
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
            </div>
            <div className="box-info">
              <span>
                <label htmlFor="Ism">xona soni</label>
              </span>
              <Form.Item
                name="xonaSoni"
                rules={[
                  {
                    required: true,
                    message: "xona soni ",
                  },
                ]}
              >
                <InputNumber className="object__numbers" />
              </Form.Item>
            </div>

            <div className="box-info">
              <span>
                <label htmlFor="Ism">xona raqami</label>
              </span>
              <Form.Item
                name="XonaRaqami"
                rules={[
                  {
                    required: true,
                    message: "xona raqami",
                  },
                ]}
              >
                <InputNumber className="object__numbers" />
              </Form.Item>
            </div>
          </div>
          <div className="NameInfo">
            <div className="box-info">
              <span>
                <label htmlFor="Ism">Uyning narxi</label>
              </span>
              <Form.Item
                name="UyningNarxi"
                rules={[
                  {
                    required: true,
                    message: "Uyning narxi",
                  },
                ]}
              >
                <InputNumber className="object__manzil" />
              </Form.Item>
            </div>
            <div className="box-info">
              <span>
                <label htmlFor="Ism">to'langan narx</label>
              </span>
              <Form.Item
                name="tolanganNarx"
                rules={[
                  {
                    required: true,
                    message: "to'langan narx",
                  },
                ]}
              >
                <InputNumber className="object__manzil" />
              </Form.Item>
            </div>
            <div className="box-info">
              <span>
                <label htmlFor="Ism">Qolgan narx</label>
              </span>
              <Form.Item
                name="QolganNarx"
                rules={[
                  {
                    required: true,
                    message: "Qolgan narx",
                  },
                ]}
              >
                <InputNumber className="object__manzil" />
              </Form.Item>
            </div>
          </div>

          <div className="checout__btn">
            <Form.Item>
              <div style={{ display: "flex" }}>
                <Button
                  className="typeObject__btn"
                  type="primary"
                  htmlType="submit"
                >
                  Yuborish
                </Button>

                <Button
                  onClick={() => {
                    setIsVisible(!isVisible);
                    console.log(obj);
                  }}
                  className="typeObject__btn"
                  type="primary"
                >
                  Ko'rish
                </Button>
              </div>
            </Form.Item>
          </div>
        </Form>
      </div>

      {isVisible && (
        <div
          className="pdf-wrapper"
          style={{
            position: "absolute",
            top: "0px",
            left: "50%",
            transform: "translateX(-50%)",
            height: "600px",
            width: "800px",
            overflowY: "scroll",
            background: "white",
            border: "10px solid gray",
            fontSize: "15px",
          }}
        >
          <div
            className="pdf-inner"
            ref={ref}
            id="toPdf"
            style={{
              marginRight: "30px",
              padding: "2rem",
              "page-break-after": "always",
              textAlign: "center",
            }}
          >
            <Test2
              investorAddress={obj.shahar}
              investorName={obj.ism}
              investorSurname={obj.FullName}
              investorFather={obj.OtasiIsmi}
              investorPhone={obj.phone}
              passportDate={obj.pasdata.format("YYYY-MM-DD")}
              passportSerial={obj.passportseria}
              jshshr={obj.jshr}
              houseeNumber={obj.UyRaqami}
              homeLayer={obj.UyQavat}
              homeArea={obj.UyMaydoni}
              homeNumber={obj.xonaSoni}
              totalPrice={obj.UyningNarxi}
              flatNumber={"backendan kelmayapyi"}
            />
          </div>
          <Button style={{ marginLeft: "30px" }} onClick={handleGeneratePdf} type="primary">
            Yukalsh
          </Button>
          <br />
        </div>
      )}
    </div>
  );
};

export default ShartnomaView;
