import React, { useEffect, useState, useRef } from "react";
import { PatternFormat } from "react-number-format";


import { Form, Input, Checkbox } from "antd";

import Select from "react-select";
import '../shartnoma/shartnoma.css'
const ShartnomaView = () => {
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
    <div className="container">
      <div className="row">
        <div className="shartnoma__info">
          <h3>Shartnoma tuzish</h3>
          <hr/>
        </div>
        <Form onSubmit>
          <div className="NameInfo">
            <div className="col-4 p-1">
              {" "}
              
                <span className="form-label__text">Ism</span>
                <br />
                <Input
                  name="Name"
                  placeholder="ismingizni kiriting"
                  className="form-control"
                  required
                />
              
            </div>

            <div className="col-4 p-1">
              
                <span className="form-label__text">Familiya</span>
                <br />
                <Input
                  name="LastName"
                  placeholder="familiyangizni kiriting"
                  className="form-control"
                  required
                />
             
            </div>
            <div className="col-4 p-1">
              
                <span className="form-label__text">Otangizni ismi</span>
                <br />
                <Input
                  name="FullName"
                  placeholder="Otangizni kiriting"
                  className="form-control"
                  required
                />
              
            </div>
          </div>
          <div className="NameInfo">
            <div className="col-md-6 box-title p-1">
            
                <span className="form-label__text">Telefon raqami:</span>
                <br />
                <PatternFormat
                  className="form-control"
                  placeholder={"Telefon raqami +998"}
                  value=""
                  format="+998(##)###-##-##"
                  mask={"_"}
                  required
                />
              
            </div>
            <div className="col-6 p-1">
              {" "}
              
                <span className="form-label__text">Passport berilgan joy</span>
                <br />
                <Input
                  name="PassportName"
                  placeholder="manzilni kiriting"
                  className="form-control"
                  required
                />
             
            </div>
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
            <div className="col-6 p-1">
              
                <span className="form-label__text">Uy manzili</span>
                <br />
                <Input
                  name="UyManzili"
                  placeholder="Uy manzili"
                  className="form-control"
                  required
                />
              
            </div>

            <div className="col-2 p-1">
              
                <span className="form-label__text">Bino qavati</span>
                <br />

                <Input
                  name="BinoQavati"
                  placeholder="Bino qavati"
                  className="form-control"
                  required
                />
              
            </div>
            <div className="col-2 p-1">
              
                <span className="form-label__text">uy maydoni</span>
                <br />

                <Input
                  name="BinoQavati"
                  placeholder="Bino qavati"
                  className="form-control"
                  required
                />
              
            </div>
            <div className="col-2 p-1">
              
                <span className="form-label__text">Uy raqami</span>
                <br />

                <Input
                  name="BinoQavati"
                  placeholder="Bino qavati"
                  className="form-control"
                  required
                />
            
            </div>
          </div>
          <div className="NameInfo">
            <div className="col-4 p-1">
              {" "}
          
                <span className="form-label__text">Uyning narxi</span>
                <br />
                <Input
                  name="Name"
                  placeholder="ismingizni kiriting"
                  className="form-control"
                  required
                />
             
            </div>

            <div className="col-4 p-1">
              
                <span className="form-label__text">to'langan narx</span>
                <br />
                <Input
                  name="LastName"
                  placeholder="familiyangizni kiriting"
                  className="form-control"
                  required
                />
             
            </div>
            <div className="col-4 p-1">
             
                <span className="form-label__text">Qolgan narx</span>
                <br />
                <Input
                  name="FullName"
                  placeholder="Otangizni kiriting"
                  className="form-control"
                  required
                />
              
            </div>
          </div>

    
          

          <div className="col-12 box-title p-3">
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
          </div>
          <Checkbox>Kiritilgan ma'lumotlar haqiqiyligini tasdiqlayman</Checkbox>
          <br />
          <button className="btn btn-primary" type="submit">
            Yuborish
          </button>
        </Form>
      </div>
    </div>
  );
}

export default ShartnomaView