import React from 'react'
import { Form, Input} from "antd";

const CreateObject = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <h2 className='obyekt__info'>Obyekt qo'shish</h2> <hr />
          <Form onSubmit>
            <span className="form-label__text">Nomi</span>
            <br />
            <Input
              name="Name"
              placeholder="ismingizni kiriting"
              className="form-control p-2"
              required
            />
            <span className="form-label__text">manzili</span>
            <br />
            <Input
              name="Name"
              placeholder="ismingizni kiriting"
              className="form-control p-2"
              required
            />
            <div className="NameInfo">
              <div className="col-md-6 p-2">
                <span className="form-label__text">
                  Qurilishni Boshlanish Sanasi
                </span>
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
              <div className="col-md-6 p-2">
                <span className="form-label__text">
                  Qurilishni Bitish Sanasi
                </span>
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
            <button className="btn btn-primary obyekt__btn" type="submit">
              Yuborish
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default CreateObject