import React from "react";
import { useState, useEffect } from "react";

//styles
import "../style/ChatPage.css";

// COMPONENTS ---------------------------
import Input from "./Input";
import ButtonCustom from "./ButtonCustom";

// Import socket-io-client ---------------------
import { io } from "socket.io-client";

const socket = io("ws://localhost:50000");

const Chat = () => {
  const [inputValue, setInputValue] = useState("");
  const [serverMessage, setServerMessage] = useState({});
  const [chatMessages, setChatMessages] = useState([]);

  // control the input value ----------------------------------------
  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };


  // the socket is on for server's messages --------------------------
  socket.on("from-server", (chatMessage) => {
    setServerMessage(chatMessage);
    console.log(chatMessage);
    // setChatMessages( prevMessages => [...prevMessages, chatMessage])
  });


  // send the query to the server -----------------------------------------
  const sendToServer = (e) => {
    try {
      e.preventDefault();
      let clientMessage = {
        role: "client",
        message: inputValue,
      };
      socket.emit("to-server", clientMessage);

      setChatMessages((prevMessages) => [...prevMessages, clientMessage]);
      setInputValue("");
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    try {
      if (serverMessage.role === undefined) {
        return;
      }
      setChatMessages((prevMessages) => [...prevMessages, serverMessage]);
    } catch (error) {
      console.log(error);
    }
  }, [serverMessage]);


  return (
    <div className="chat_container">
      <div className="chat">
        {chatMessages.map((message, index) => (
          <div key={index}>
            {message.role === "chat" ? (
              <div className="chat_messages_container">
                <div className="chat_messages">{message.message}</div>
              </div>
            ) : (
              <div className="user_messages_container">
                <div className="user_messages">{message.message}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      <form onSubmit={sendToServer} className="input_container">
        <Input
          type="text"
          value={inputValue}
          changeEvent={handleChangeInput}
          classStyle="input"
          placeholderText="Type"
        />
        <ButtonCustom
          classStyle="button"
          eventFunction={sendToServer}
          typeButton="submit"
        />
      </form>
    </div>
  );
};

export default Chat;
