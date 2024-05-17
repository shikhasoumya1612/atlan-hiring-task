import React from "react";
import about from "../../assets/about.png";
import "./About.css";

//display about section
const About = () => {
  return (
    <div className="container-fluid my-5" id="about">
      <p className="text-large text-bold text-center mt-3">About us</p>
      <div className="row my-5">
        <div className="col-md-6">
          <div className="img-section">
            <img src={about} alt="about" />
          </div>
        </div>
        <div className="col-md-5">
          <p className="text-medium my-5">
            Welcome to our LLM Explorer app, your gateway to exploring a
            fascinating world of Language Model Models (LLMs)! Our app is
            designed to provide you with a comprehensive understanding of
            various LLMs, their capabilities, and applications. In today's
            digital age, language models have revolutionized the way we interact
            with technology, enabling machines to understand and generate
            human-like text. From aiding in natural language processing tasks to
            powering virtual assistants, LLMs have become indispensable tools
            across a wide range of industries. With our app, users can delve
            into the intricate workings of different LLMs, from the foundational
            models to the cutting-edge advancements. Whether you're a seasoned
            researcher, a curious enthusiast, or a developer seeking the right
            model for your project, our app offers something for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
