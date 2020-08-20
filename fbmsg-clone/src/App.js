import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setinput] = useState("");
  const [messages, setmessages] = useState([]);

  const sendMessage = (event) => {
    event.preventDefault();
    setmessages([...messages, input]);
    setinput("");
  };

  return (
    <div className="App">
      <form className="messageInput">
        <input
          type="text"
          className="input"
          value={input}
          onChange={(e) => setinput(e.target.value)}
        ></input>
        <button
          className="button"
          type="submit"
          onClick={(e) => sendMessage(e)}
        >
          SEND
        </button>
      </form>

      <div className="messge">
        {messages.map((msg) => (
          <p>{msg}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
