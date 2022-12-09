import React from "react";
import { Form, Input, Button } from "antd";
import Upload from "antd/es/upload/Upload";
const TypeObekt = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <h2 className="obyekt__info">Tip qo'shish</h2> <hr />
          <Form onSubmit>
            <span className="form-label__text">Nomi</span>
            <br />
            <Input
              name="name"
              placeholder="Nomi"
              className="form-control p-2"
              required
            />
            <span className="form-label__text">Padez soni</span>
            <br />
            <Input
              type="number"
              name="padez_soni"
              placeholder="Padez soni"
              className="form-control p-2"
              required
            />
            <span className="form-label__text">Qavat soni</span>
            <br />
            <Input
              type="number"
              name="qavat_soni"
              placeholder="Qavat soni"
              className="form-control p-2"
              required
            />
            <span className="form-label__text">Bir Padezda Xonalar soni</span>
            <br />
            <Input
              type="number"
              name="bir_padez_xona"
              placeholder="Bir Padezda Xonalar soni"
              className="form-control p-2"
              required
            />
            <div className="col-md-6 box-title p-1">
              <span className="form-label__text">Rasm yuklash</span>
              <Upload
                name="photo"
                className="upload_file"
                accept=".png,.jpg"
                beforeUpload={(file) => {
                  return false;
                }}
              >
                <Button className="bg:">Select file</Button>
              </Upload>
            </div>
            <button className="btn btn-primary obyekt__btn" type="submit">
              Yuborish
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default TypeObekt;
