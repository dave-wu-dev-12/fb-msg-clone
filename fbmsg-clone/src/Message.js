import React from "react";
import "./Message.css";

function Message({ msg, myMsg }) {
  return (
    <div className={`messageRow ${myMsg && `myMessageRow`}`}>
      <h6 className="name">{msg.name}</h6>
      <p className="aMessage">{msg.text}</p>
    </div>
  );
}

export default Message;
