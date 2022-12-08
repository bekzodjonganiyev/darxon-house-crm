import React from "react";
import { Button, Input, Space } from "antd";

import "./Object.css";

import ObjectCard from "../../components/object_card/ObjectCard";

const Object = () => {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  const a = [1, 2, 34, 4, 5, 6, 342, 4, 5, 6, 76];

  return (
    <>
      <h1>Obyektlar</h1>
      <div className="object">
        <Space className="object-header" direction="horizontal">
          <Search
            placeholder="input search text"
            allowClear
            enterButton
            size="large"
            onSearch={onSearch}
          />
          <Button type="primary" size="large">
            Obyekt qo'shish
          </Button>
        </Space>

        <Space className="object-body">
          {a.map((i) => (
            <ObjectCard
              key={i}
              to={"a"}
              title={"Example title"}
              objectName={"Object name"}
            />
          ))}
        </Space>
      </div>
    </>
  );
};

export default Object;
