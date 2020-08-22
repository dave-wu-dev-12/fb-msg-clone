import React, { useState, useEffect } from "react";
import "./App.css";
import { FormControl, Input, IconButton } from "@material-ui/core";
import Message from "./Message.js";
import database from "./Firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";

function App() {
  const [input, setinput] = useState("");
  const [messages, setmessages] = useState([]);
  const [username, setusername] = useState("");

  useEffect(() => {
    const name = prompt("Please enter your name", "newUser123");
    if (name != null && name.trim() !== "") {
      setusername(name);
      alert(`Your name is now ${name}`);
    }
    return () => {};
  }, []);

  useEffect(() => {
    database
      .collection("messages")
      .orderBy("time", "asc")
      .onSnapshot((snapshot) =>
        setmessages(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    database.collection("messages").add({
      name: username,
      text: input,
      time: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setinput("");
  };

  return (
    <div className="App">
      <h2 className="username">Happy Chatting {username}</h2>
      <form className="messageInput">
        <FormControl class="formcontrol">
          <Input
            className="input"
            type="text"
            value={input}
            onChange={(e) => setinput(e.target.value)}
          />
          <IconButton
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={(e) => sendMessage(e)}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <div className="messageContainer">
        <FlipMove>
          {messages.map(({ data, id }) => (
            <Message
              key={id}
              msg={data}
              myMsg={data.name === username ? true : false}
            />
          ))}
        </FlipMove>
      </div>
    </div>
  );
}

export default App;
