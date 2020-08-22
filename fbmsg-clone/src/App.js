import React, { useState, useEffect } from "react";
import "./App.css";
import {
  Button,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";
import Message from "./Message.js";
import database from "./Firebase";
import firebase from "firebase";

function App() {
  const [input, setinput] = useState("");
  const [messages, setmessages] = useState([]);
  const [username, setusername] = useState("");

  useEffect(() => {
    const name = prompt("Please enter your name", "newUser123");
    if (name != null && name.trim() != "") {
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
        setmessages(snapshot.docs.map((doc) => doc.data()))
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
      <form>
        <FormControl className="messageInput">
          <div className="input">
            <InputLabel>Enter message</InputLabel>
            <Input
              type="text"
              value={input}
              onChange={(e) => setinput(e.target.value)}
            />
          </div>
          <div className="submit">
            <Button
              disabled={!input}
              variant="contained"
              color="primary"
              type="submit"
              onClick={(e) => sendMessage(e)}
            >
              SEND
            </Button>
          </div>
        </FormControl>
      </form>

      <div className="messageContainer">
        {messages.map((msg) => (
          <Message msg={msg} myMsg={msg.name === username ? true : false} />
        ))}
      </div>
    </div>
  );
}

export default App;
