import "./App.css";
import WebSocketCall from "./components/WebSocketCall";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";

function App() {
  const [messages, setMessages] = useState([]);
  const socket = io("localhost:5001/", {
    transports: ["websocket"],
    cors: {
      origin: "http://localhost:3000/",
    },
  });
  useEffect(() => {
      

      socket.on("connect", (data) => {
        console.log(data);
      });

      socket.on("disconnect", (data) => {
        console.log(data);
      });

      return function cleanup() {
        socket.disconnect();
      };
    
  }, []);
  useEffect(() => {
    socket.on("data", (data) => {
      setMessages([...messages, data.data]);
    });
    return () => {
      socket.off("data", () => {
        console.log("data event was removed");
      });
    };
  }, [socket, messages]);

  return (
    <div className="App">
      <h1 className="text-xl text-center">React/Flask App + socket.io</h1>

    </div>
  );
}

export default App;
