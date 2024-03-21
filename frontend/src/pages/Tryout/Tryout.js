import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error from "../Error/Error";
import "./Tryout.css"; // Import CSS file for custom styling

const Tryout = () => {
  const params = useParams();

  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);

  const checkTryout = async () => {
    setError(null);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/model/tryout/${params.id}`
      );

      if (!response.data.tryout) {
        setError({ message: "Tryout does not exist" });
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  useEffect(() => {
    checkTryout();
  }, []);

  const handleSendMessage = () => {
    if (message.trim() === "") return;

    setChats([...chats, { text: message, sentByUser: true }]);
    setMessage("");
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      {error ? (
        <Error status={404} />
      ) : (
        <div className="container chat-container">
          <div className="chat-header">
            <h2>ChatGPT</h2>
            <p>Your friendly AI assistant</p>
          </div>

          <div className="previous-chats">
            {chats.map((chat, index) => (
              <div
                key={index}
                className={`chat-message ${
                  chat.sentByUser ? "user-message" : "bot-message"
                }`}
              >
                {chat.text}
              </div>
            ))}
          </div>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Type your message here..."
              aria-label="Type your message here..."
              aria-describedby="send-button"
              value={message}
              onChange={handleChange}
            />
            <button
              className="btn btn-primary"
              type="button"
              id="send-button"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Tryout;
