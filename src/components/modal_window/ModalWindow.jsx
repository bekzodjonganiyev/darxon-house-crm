import { Card, Modal } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

import "./ModalWindow.css"

const ModalWindow = ({type, isOpen, handleOk, handleCancel, title}) => {

    let content = null

    if (type === "add"){
        content = <h1>Qo`shish formasi</h1>
    } else if (type === "edit"){
        content = <h1>Tahrirlash formasi</h1>
    } else {
        content = <h1>Malomot formasi</h1>
    }

    return (
        <Modal
        title="Basic Modal"
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {
            type === "add"
            ? (<h1></h1>)
            : type === "edit"
            ? (<h1></h1>)
            : ""
        }
      </Modal>
    )
}

export default ModalWindow