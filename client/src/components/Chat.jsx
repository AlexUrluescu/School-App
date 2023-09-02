import React from "react";
import { useState } from "react";

//styles
import "../style/ChatPage.css";

// COMPONENTS ---------------------------
import Input from "./Input";
import ButtonCustom from "./ButtonCustom";

// import { useState } from "react";
import { io } from "socket.io-client";

const socket = io("ws://localhost:50000");

const Chat = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const [serverMessage, setServerMessage] = useState(null);

  socket.on("from-server", (msg) => {
    setServerMessage(msg);
    console.log(msg);
  });

  const sendToServer = () => {
    try {
      socket.emit("to-server", inputValue);
      setInputValue("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="chat_container">
      <div className="chat">{serverMessage}</div>
      <div className="input_container">
        <Input
          type="text"
          value={inputValue}
          changeEvent={handleChangeInput}
          classStyle="input"
          placeholderText="Type"
        />
        <ButtonCustom
          classStyle="button"
          textName="Send"
          eventFunction={sendToServer}
        />
      </div>
    </div>
  );
};

export default Chat;
