import React, { useState } from "react";
import { PatternFormat } from "react-number-format";


import { Form, Input, Button, Checkbox, InputNumber } from "antd";

import Select from "react-select";
import '../shartnoma/shartnoma.css'
const ShartnomaView = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [mapDistrict, setMapDistrict] = useState([]);
  const selectRegion2 = [
    { value: "Toshkent viloyat", label: "Toshkent viloyat" },
    { value: "Toshkent shahar", label: "Toshkent shahar" },
    { value: "Surxondaryo", label: "Surxondaryo viloyati" },
    { value: "Namangan", label: "Namangan viloyati" },
    { value: "Andijon", label: "Andijon viloyati" },

    { value: "Samarqand", label: "Samarqand viloyat" },
    { value: "Sirdaryo", label: "Sirdaryo viloyati" },
    { value: "Navoiy", label: "Navoiy viloyati" },
    { value: "Buxoro", label: "Buxoro viloyati" },
    { value: "Jizzax", label: "Jizzax viloyati" },

    { value: "Qashqadaryo", label: "Qashqadaryo viloyat" },
    { value: "Qoraqolpog`iston", label: "Qoraqolpog`iston" },
    { value: "Xorazm", label: "Xorazm viloyati" },
    { value: "Farg'ona", label: "Farg'ona viloyati" },

    function selectDistrict(event) {
      if (event === "Toshkent viloyat")
        setMapDistrict([
          "Bekabod",
          "Piskent",
          "Bo'stonliq",
          "Bo'ka",
          "Chinoz",
          "Qibray",
          "Ohongaron",
          "Oqqo'rg'on",
          "Parkent",
          "Quyi chirchiq",
          "O'rta chirchiq",
          "Yangiyo'l",
          "Yuqori chirchiq",
          "Zangiota",
          "Chirchiq",
        ]);
      else if (event === "Toshkent shahar")
        setMapDistrict([
          "Mirobod",
          "Bektemir",
          "Mirzo Ulug'bek",
          "Sergili",
          "Olmozor",
          "Uchtepa",
          "Shayxontoxur",
          "Yashnabod ",
          "Chilonzor",
          "Yunudabod",
          "Yakkasaroy",
        ]);
      else if (event === "Surxondaryo")
        setMapDistrict([
          "Angor",
          "Boysun",
          "Bandixon",
          "Denov",
          "Jarqo`rg`on",
          "Qorlik",
          "Qiziriq",
          "Qumqo`rg`on",
          "Muzrobod",
          "Sariosiyo",
          "Sariq",
          "Sharg`un",
          "Sherobod",
          "Sho`rchi",
          "Termiz",
          "Uchqizil",
          "Uzun",
          "Xalqobod",
        ]);
      else if (event === "Andijon")
        setMapDistrict([
          "Oq oltin",
          "Oltinko`l",
          "Andijon",
          "Asaka",
          "Ohunboboev",
          "Baliqchi",
          "Bo`z",
          "Buloqboshi",
          "Qorasuv",
          "Kuyganyor",
          "Qo`rg`ontepa",
          "Marhamat",
          "Poytug``",
          "Pahtaobod",
          "Shahrihon",
          "Xonobod",
          "Xodjabod",
        ]);
      else if (event === "Namangan")
        setMapDistrict([
          "Chortoq",
          "Chust",
          "Jomasho`y",
          "Kosonsoy",
          "Namangan",
          "Pop",
          "Toshbuloq",
          "To`raqo`rg`on",
          "Uchqo`rg`on",
          "Xaqqulabod",
        ]);
      else if (event === "Samarqand")
        setMapDistrict([
          "Oqtosh",
          "Bulung`ur",
          "Chelak",
          "Darband",
          "Jumboy",
          "Juma",
          "Go`zalkent",
          "Gulobod",
          "Ishtihon",
          "Kattaqo`rg`on",
          "Qo`shrobod",
          "Loish",
          "Nurobod",
          "Payariq",
          "Payshanba",
          "Samarqand",
          "Tayloq",
          "Urgut",
          "Ziadin",
        ]);
      else if (event === "Sirdaryo")
        setMapDistrict([
          "Baxt",
          "Boyovut",
          "Sirdaryo",
          "Guliston",
          "Navro`z",
          "Sayxun",
          "Sardoba",
          "Shirin",
          "Sirdaryo",
          "Terenozek",
          "Xovos",
          "Yangiyer",
        ]);
      else if (event === "Navoiy")
        setMapDistrict([
          "Beshrobot",
          "Konimex",
          "Karmana",
          "Qiziltepa",
          "Navoiy",
          "Nurota",
          "Tomdibuloq",
          "Uchquduq",
          "Yangirobot",
          "Zarafshon",
        ]);
      else if (event === "Buxoro")
        setMapDistrict([
          "Olot",
          "Buhoro",
          "Galaosiyo",
          "Gazli",
          "G`ijduvon",
          "Kogon",
          "Qorako`l",
          "Qorovulbozor",
          "Romitan",
          "Shofirkon",
          "Vobkent",
          "Jondor",
        ]);
      else if (event === "Jizzax")
        setMapDistrict([
          "Aydarko`l",
          "Balandchaqir",
          "Dashtobod",
          "Dostlik",
          "Jizzax",
          "Gagarin",
          "G`allaorol",
          "G`oliblar",
          "Marjonbuloq",
          "Pahtakor",
          "Uchtepa",
          "O`smat",
          "Yangiqishloq",
          "Zomin",
          "Zafarobod",
          "Zarbdor",
        ]);
      else if (event === "Qashqadaryo")
        setMapDistrict([
          "Beshkent",
          "Chiroqchi",
          "Dehqonobod",
          "G`uzor",
          "Qamashi",
          "Karashina",
          "Qarshi",
          "Koson",
          "Kasbi",
          "Kitob",
          "Muborak",
          "Mug`lon",
          "Shahrisabz",
          "Talimarjon",
          "Yakkabog'",
          "Mirishkor",
          "Nishon",
        ]);
      else if (event === "Qoraqolpog`iston")
        setMapDistrict([
          "Oqmangit",
          "Beruniy",
          "Bo`ston",
          "Chimboy",
          "Qanliko`l",
          "Qorao`zak",
          "Kegeyli",
          "Qo`ng`irot",
          "Mang`it",
          "Mo`ynoq",
          "Nukus",
          "Shumanay",
          "Taxiatosh",
          "Taxtako`pir",
          "To`rtko`l",
          "Xo`jayli",
        ]);
      else if (event === "Xorazm")
        setMapDistrict([
          "Bog'ot tumani",
          "Gurlan tumani",
          "Qo'shko'pir tumani",
          "Shovot tumani",
          "Urganch shahri",
          "Urganch tumani",
          "Xazorasp tumani",
          "Xiva tumani",
          "  Xonqa tumani",
          "Yangiariq tumani",
          "Yangibozor tumani",
        ]);
      else if (event === "Farg'ona")
        setMapDistrict([
          "Oltiariq tumani",
          "Bagʻdod tumani",
          "Beshariq tumani",
          "Buvayda tumani",
          "Dangʻara tumani",
          "Fargʻona tumani",
          "Furqat tumani",
          "Qoʻshtepa tumani",
          "Quva tumani",
          "Rishton tumani",
          "Soʻx tumani",
          "Toshloq tumani",
          "Uchkoʻprik tumani",
          "  Oʻzbekiston tumani",
          "Yozyovon tumani",
        ]);
    },
  ];
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

          {/* <div className="col-12 box-title p-3">
            <span>Yashash hududi:</span>
            <Select options={selectRegion2} onChange={(e)=>{console.log(e.target.value)}}/>
          </div>

          <div className="col-12 box-title p-3">
            <Select>
              {mapDistrict.map((item, index) => (
                <Select.Option value={item} key={index}>
                  {item}
                  
                </Select.Option>
              ))}
            </Select>
          </div> */}
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
    </div>
  );
}

export default ShartnomaView