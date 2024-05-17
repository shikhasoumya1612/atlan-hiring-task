import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Error from "../Error/Error";
import "./Tryout.css";
import { generateGeminiResponse } from "../../utils/geminiTryout";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Tryout = () => {
  const params = useParams();

  const chatsContainerRef = useRef(null);

  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [typing, setTyping] = useState(false);
  //Check the value of Tryout
  const checkTryout = async () => {
    setError(null);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/model/tryout/${params.id}`
      );

      if (!response.data.tryout) {
        setError({ message: "Tryout does not exist" });
      }
    } catch (error) {
      setError(error);
    }
  };

  const handleSendMessage = async () => {
    if (message.trim() === "") return;

    // chat history is fixed. It does not contain new message and gemini message

    // chat before the new cycle i.e. current message and gemini message
    const chatHistory = [...chats];

    const newMessage = message;
    setMessage("");

    // chat with the chat history and new message
    setChats([...chatHistory, { text: newMessage, sentByUser: true }]);

    setTyping(true);

    const geminiMessage = await generateGeminiResponse(chatHistory, newMessage);

    setTyping(false);

    // chat with the chat history, new message and gemini message
    setChats([
      ...chatHistory,
      { text: newMessage, sentByUser: true },
      { text: geminiMessage, sentByUser: false },
    ]);

    localStorage.setItem(
      "chats",
      JSON.stringify([
        ...chatHistory,
        { text: newMessage, sentByUser: true },
        { text: geminiMessage, sentByUser: false },
      ])
    );
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleClearAll = () => {
    localStorage.removeItem("chats");
    setChats([]);
  };

  useEffect(() => {
    checkTryout();
    const storedChats = localStorage.getItem("chats");
    if (storedChats) {
      setChats(JSON.parse(storedChats));
    }
  }, []);

  useEffect(() => {
    // Scroll the chats container to the bottom
    if (chatsContainerRef.current) {
      chatsContainerRef.current.scrollTop =
        chatsContainerRef.current.scrollHeight;
    }
  }, [chats]);

  return (
    <>
      {error ? (
        <Error status={404} />
      ) : (
        <div className="container chat-container mt-3">
          <div className="chat-header">
            <h2 className="text-large">Gemini</h2>
            <p className="text-medium">Your friendly AI assistant</p>
          </div>

          <div className="previous-chats " ref={chatsContainerRef}>
            {chats.map((chat, index) => (
              <div
                className={`d-flex me-3 ${
                  chat.sentByUser ? "justify-content-end" : ""
                }`}
              >
                <div
                  key={index}
                  className={`chat-message text-small ${
                    chat.sentByUser ? "user-message" : "bot-message"
                  }`}
                >
                  {chat.text}
                </div>
              </div>
            ))}
            {typing && (
              <>
                <div className="w-50">
                  <Skeleton className="typing-skeleton" count={2} />
                </div>
                <div className="w-25">
                  <Skeleton className="typing-skeleton" count={1} />
                </div>
              </>
            )}
          </div>

          <div className="input-group mb-3 pe-4">
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
              className={`btn btn-primary ${typing && "disabled"}`}
              type="button"
              id="send-button"
              onClick={handleSendMessage}
            >
              <p className="text-small m-0">Send</p>
            </button>

            <button
              className={`btn btn-outline-danger ${typing && "disabled"} mx-2`}
              type="button"
              id="clear-button"
              onClick={handleClearAll}
            >
              <p className="text-small m-0">Clear All</p>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Tryout;
