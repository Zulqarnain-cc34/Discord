import React from "react";
import "../Css/chat.css";
import Header from "./Header";
import Chatarea from "./Chatarea";
function Chat() {
  return (
    <div className="chat">
      <Header />
      <Chatarea />
    </div>
  );
}

export default Chat;
