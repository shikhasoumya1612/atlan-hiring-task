import React, { useState, useEffect } from "react";

const Typewriter = ({ text, delay, model }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (currentIndex < text?.output?.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text?.output[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  useEffect(() => {
    setCurrentText("");
    setCurrentIndex(0);
  }, [text, model]);

  return <span>{currentText}</span>;
};

export default Typewriter;
