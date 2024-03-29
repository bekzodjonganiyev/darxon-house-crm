import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Space, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";

import "./Type.css";

import ObjectCard from "../../components/object_card/ObjectCard";

import { getType } from "../../utils/slices/typeSlice";

const Type = () => {
  const { Search } = Input;
  const { types, loadingStatus } = useSelector((state) => state.typeSlice);
  let content = null;
  
  const dispatch = useDispatch();
  const onSearch = (value) => console.log(value);

  useEffect(() => {
    dispatch(getType())
    // eslint-disable-next-line
  }, []);
  
  if (loadingStatus === "loading") {
    content = <h1>Loading...</h1>;
  } else {
    content = (
      <Space className="type-body">
        {types &&
          types.map((i) => (
            <ObjectCard
              key={i._id}
              objectName={i.name}
              isType={"tip"}
            />
          ))}
      </Space>
    );
  }

  return (
    <>
      <h1>Tiplar</h1>
     
      <div className="type">
        <Space className="type-header">
          <Search
            placeholder="input search text"
            allowClear
            enterButton
            size="large"
            onSearch={onSearch}
          />
          <Link to="/type-object">
            <Button type="primary" size="large">
              Tip qo'shish
            </Button>
          </Link>
        </Space>
        {content}
      </div>
    </>
  );
};
export default Type;
