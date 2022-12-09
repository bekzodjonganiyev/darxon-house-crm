import React from 'react'
import { Form, Input, Select } from "antd";
const DomObject = () => {
    const selectDom = [
      { value: "1", label: "1-4 qavat" },
      { value: "2", label: "2-9 qavat" },
      { value: "3", label: "2-12 qavat" },
    ];
  return (
    <div>
      <div className="container">
        <div className="row">
          <Form onSubmit>
            <span className="form-label__text">Nomi</span>
            <br />
            <Input
              name="name"
              placeholder="Nomi"
              className="form-control p-2"
              required
            />
            <br />
            <div className="col-md-6">
              <span>uyni tanlang</span>
              <br />
              <Select
                options={selectDom}
                placeholder="uyni tanlang"
               
                required
              />
            </div>
            <button className="btn btn-primary obyekt__btn" type="submit">
              Yuborish
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default DomObject