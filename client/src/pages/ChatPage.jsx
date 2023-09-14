import React from "react";

// Components -------------------------------
import Chat from "../components/Chat";
import NavBar from "../components/NavBar";


const ChatPage = ({title}) => {

  return (
    <div>
      <NavBar />
      <div>
        <h1>{title}</h1>
      </div>
      <Chat />
    </div>
  );
};

export default ChatPage;
