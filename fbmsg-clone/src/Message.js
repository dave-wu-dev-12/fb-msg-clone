import React, { forwardRef } from "react";
import "./Message.css";

const Message = forwardRef(({ msg, myMsg }, ref) => {
  return (
    <div ref={ref} className={`messageRow ${myMsg && `myMessageRow`}`}>
      {!myMsg && <h6 className="name">{msg.name}</h6>}
      <p className="aMessage">{msg.text}</p>
    </div>
  );
});

export default Message;
