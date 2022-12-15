import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Input, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";

import "./SingleObject.css";

import ObjectCard from "../../../components/object_card/ObjectCard";

import { getHouse } from "../../../utils/slices/houseSlice";

const SingleObject = () => {
  const { Search } = Input;
  const { houses, loadingStatus } = useSelector((state) => state.houseSlice);
  let content = null;

  const dispatch = useDispatch();
  const id = useParams();
  const onSearch = (value) => console.log(value);

  const filteredHouses = houses.filter((item) => item?.category?._id === id);

  useEffect(() => {
    dispatch(getHouse());
    // eslint-disable-next-line
  }, []);

  if (loadingStatus === "loading") {
    content = <h1>Loading...</h1>;
  } else {
    content = (
      <Space className="object-body">
        {filteredHouses.length !== 0
          ? filteredHouses.map((i) => (
              <ObjectCard
                to={i._id}
                key={i._id}
                objectName={i.tartirb_raqami}
                isType={true}
              />
            ))
          : <h1>Bu obyektda dom mavjud emas</h1>
        }
      </Space>
    );
  }

  return (
    <>
      <h1>Domlar</h1>
      <div className="object">
        <Space className="object-header">
          <Search
            placeholder="input search text"
            allowClear
            enterButton
            size="large"
            onSearch={onSearch}
          />
          <Link to="/object-dom">
            <Button type="primary" size="large">
              Obyekt qo'shish
            </Button>
          </Link>
        </Space>
        {content}
      </div>
    </>
  );
};

export default SingleObject;
