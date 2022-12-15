import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Input, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";

import "./Object.css";

import ObjectCard from "../../components/object_card/ObjectCard";

import { getObject } from "../../utils/slices/objectSlice";

const Object = () => {
  const { Search } = Input;
  const { objects, loadingStatus } = useSelector((state) => state.objectSlice);
  let content = null;

  const dispatch = useDispatch();
  const onSearch = (value) => console.log(value);

  useEffect(() => {
    dispatch(getObject())
    // eslint-disable-next-line
  }, []) 

  console.log(loadingStatus);

  if (loadingStatus === "loading") {
    content = <h1>Loading...</h1>;
  } else {
    content = (
      <Space className="object-body">
        {objects &&
          objects.map((i) => (
            <ObjectCard
              to={i._id}
              key={i._id}
              defaultTitle={"Manzili"}
              objectName={i.Nomi}
              title={i.manzili}
              isType={"objekt"}
            />
          ))}
      </Space>
    );
  }
  return (
    <>
      <h1>Obyektlar</h1>
      <div className="object">
        <Space className="object-header">
          <Search
            placeholder="input search text"
            allowClear
            enterButton
            size="large"
            onSearch={onSearch}
          />
          <Link to="/create-object">
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

export default Object;
