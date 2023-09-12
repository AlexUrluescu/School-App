import React from "react";

// Components -------------------------------
import Chat from "../components/Chat";
import NavBar from "../components/NavBar";


const ChatPage = () => {

  return (
    <div>
      <NavBar />
      <div>
        <h1>ContiChat</h1>
      </div>
      <Chat />
    </div>
  );
};

export default ChatPage;
