import React, { useRef, useState } from "react";
import { PatternFormat } from "react-number-format";
import { Form, Input, Button, Checkbox, InputNumber } from "antd";
import { jsPDF } from "jspdf";

import "../shartnoma/shartnoma.css";
import Test2 from "../../components/Test2";

const ShartnomaView = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: "a3",
      unit: "px",
    });

    // Adding the fonts.
    doc.setFont("Inter-Regular", "normal");
    doc.html(ref.current, {
      async callback(doc) {
        await doc.save("document");
      },
    });
  };

  // const print = () => {
  //   let elem = document.getElementById("toPdf");
  //   elem.scrollIntoView();
  //   h2c(elem).then(canvas => {
  //     //document.body.appendChild(canvas)
  //     const img = canvas.toDataURL("image/png", 1);
  //     //console.log(`"data:image/png;base64,${img}"`)

  //     var imgWidth = 150;
  //     var pageHeight = 200;
  //     var imgHeight = (canvas.height * imgWidth) / canvas.width;
  //     var heightLeft = imgHeight;

  //     const pdf = new JSpdf("p", "mm");
  //     var position = 10;

  //     pdf.addImage(img, "PNG", 0, position, imgWidth, imgHeight, 100);
  //     heightLeft -= pageHeight;

  //     while (heightLeft >= 0) {
  //       position = heightLeft - imgHeight;
  //       pdf.addPage();
  //       pdf.addImage(img, "PNG", 0, position, imgWidth, imgHeight);
  //       heightLeft -= pageHeight;
  //     }

  //     //pdf.addImage(img, 'PNG', 0, 0)
  //     pdf.save("export.pdf");
  //   });

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
            <Form.Item style={{ display: "flex" }}>
              <Button
                className="typeObject__btn"
                type="primary"
                htmlType="submit"
              >
                Yuborish
              </Button>

              <Button
                onClick={() => setIsVisible(!isVisible)}
                className="typeObject__btn"
                type="primary"
              >
                Yuborish
              </Button>
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
            height: "400px",
            width: "800px",
            overflowY: "scroll",
            background: "white",
            fontSize: "15px",
          }}
        >
          <div
            className="pdf-inner"
            ref={ref}
            id="toPdf"
            style={{
              marginRight: "30px",
              padding:"2rem",
              "page-break-after": "always",
              textAlign: "center",
            }}
          >
            <Test2 />
          </div>
          <br />
          <Button onClick={handleGeneratePdf}>Yukalsh</Button>
        </div>
      )}
    </div>
  );
};

export default ShartnomaView;
