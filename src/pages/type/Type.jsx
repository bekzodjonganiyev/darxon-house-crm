import React from "react";
import { Button, Space, Input } from "antd";

import "./Type.css";

import ObjectCard from "../../components/object_card/ObjectCard";

const Type = () => {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  const a = [1, 2, 34, 4, 5, 6, 342, 4, 5, 6, 76];

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
          <Button type="primary" size="large">
            Tip qo'shish
          </Button>
        </Space> 

        <Space className="type-body">
          {a.map((i) => (
            <ObjectCard
              key={i}
              defaultTitle={"Turi"}
              title={"Example title"}
              objectName={"Bino turi"}
            />
          ))}
        </Space>

      </div>
    </>
  );
};
export default Type;
