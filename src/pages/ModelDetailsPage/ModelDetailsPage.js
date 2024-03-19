import React, { useState } from "react";
import styles from "./ModelDetailsPage.module.css";
import Typewriter from "../../components/Typewriter";
import CodeComponent from "../../components/CodeComponent";

const ModelDetailsPage = () => {
  const model = {
    model_image:
      "https://duet-cdn.vox-cdn.com/thumbor/0x0:1820x1213/2400x1600/filters:focal(910x607:911x608):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24247717/lp_logo_3.0.jpg",
    model_name: "Chat GPT",
    model_description:
      "We launched ChatGPT as a research preview so we could learn more about the system’s strengths and weaknesses and gather user feedback to help us improve upon its limitations. Since then, millions of people have given us feedback, we’ve made several important updates and we’ve seen users find value across a range of professional use-cases, including drafting & editing content, brainstorming ideas, programming help, and learning new topics.",

    examples: [
      {
        title: "Advanced Reasoning",
        description:
          "We love our free users and will continue to offer free access to ChatGPT. By offering this subscription pricing, we will be able to help support free access availability to as many people as possible.",
        input:
          "We love our free users and will continue to offer free access to ChatGPT. By offering this subscription pricing, we will be able to help support free access availability to as many people as possible.",
        output:
          "We love our free users and will continue to offer free access to ChatGPT. By offering this subscription pricing, we will be able to help support free access availability to as many people as possible.We love our free users and will continue to offer free access to ChatGPT. By offering this subscription pricing, we will be able to help support free access availability to as many people as possible.We love our free users and will continue to offer free access to ChatGPT. By offering this subscription pricing, we will be able to help support free access availability to as many people as possible.We love our free users and will continue to offer free access to ChatGPT. By offering this subscription pricing, we will be able to help support free access availability to as many people as possible.",
      },
      {
        title: "Creativity",
        description:
          "We launched ChatGPT as a research preview so we could learn more about the system’s strengths and weaknesses and gather user feedback to help us improve upon its limitations. Since then, millions of people have given us feedback, we’ve made several important updates and we’ve seen users find value across a range of professional use-cases, including drafting & editing content, brainstorming ideas, programming help, and learning new topics.",
        input:
          "We launched ChatGPT as a research preview so we could learn more about the system’s strengths and weaknesses and gather user feedback to help us improve upon its limitations. Since then, millions of people have given us feedback, we’ve made several important updates and we’ve seen users find value across a range of professional use-cases, including drafting & editing content, brainstorming ideas, programming help, and learning new topics.",
        output:
          "We love our free users and will continue to offer free access to ChatGPT. By offering this subscription pricing, we will be able to help support free access availability to as many people as possible.We love our free users and will continue to offer free access to ChatGPT. By offering this subscription pricing, we will be able to help support free access availability to as many people as possible.We love our free users and will continue to offer free access to ChatGPT. By offering this subscription pricing, we will be able to help support free access availability to as many people as possible.We love our free users and will continue to offer free access to ChatGPT. By offering this subscription pricing, we will be able to help support free access availability to as many people as possible.",
      },
      {
        title: "Vision",
        description:
          "In an evaluation involving both biology experts and students, we found that GPT-4 provides at most a mild uplift in biological threat creation accuracy. While this uplift is not large enough to be conclusive, our finding is a starting point for continued research and community deliberation.",
        input:
          "In an evaluation involving both biology experts and students, we found that GPT-4 provides at most a mild uplift in biological threat creation accuracy. While this uplift is not large enough to be conclusive, our finding is a starting point for continued research and community deliberation.",
        output:
          "We love our free users and will continue to offer free access to ChatGPT. By offering this subscription pricing, we will be able to help support free access availability to as many people as possible.We love our free users and will continue to offer free access to ChatGPT. By offering this subscription pricing, we will be able to help support free access availability to as many people as possible.We love our free users and will continue to offer free access to ChatGPT. By offering this subscription pricing, we will be able to help support free access availability to as many people as possible.We love our free users and will continue to offer free access to ChatGPT. By offering this subscription pricing, we will be able to help support free access availability to as many people as possible.",
      },
    ],

    code_snippet: `
const apiKey = "YOUR_API_KEY"; // Replace "YOUR_API_KEY" with your actual API key
const prompt = "Once upon a time,";

async function generateText(prompt) {
  const response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": \`Bearer \${apiKey}\`
    },
    body: JSON.stringify({
      model: "text-davinci-003", // Adjust the model based on your preference
      prompt: prompt,
      max_tokens: 100 // Adjust the max tokens based on the length of text you want
    })
  });
  
  const data = await response.json();
  return data.choices[0].text.trim();
}

generateText(prompt)
  .then(text => {
    console.log("Generated Text:", text);
  })
  .catch(error => {
    console.error("Error:", error);
  });
`,
  };

  const [selectedExample, setSelectedExample] = useState(model.examples[0]);

  return (
    <div className="container-fluid">
      <div className="row mt-5 mx-md-3 mx-sm-1 ">
        <div className="col-md-6">
          <p className="text-large ">{model.model_name}</p>
          <p className="text-medium mt-3">{model.model_description}</p>
        </div>
        <div className="col-md-6">
          <div className={`${styles["model-image"]} py-auto`}>
            <img src={model.model_image} alt="model" />
          </div>
        </div>
      </div>

      <div>
        <div className="d-flex flex-row gap-5 mt-5  mx-md-3 mx-sm-1">
          {model.examples.map((example) => (
            <p
              className={`text-medium ${
                selectedExample.title === example.title
                  ? styles["example_title"]
                  : "text-secondary"
              } mb-0`}
              role="button"
              onClick={() => {
                setSelectedExample(example);
              }}
            >
              {example.title}
            </p>
          ))}
        </div>
        <hr className="mt-1 ms-md-3 ms-sm-1" />
      </div>

      <div className="row">
        <div className="col-lg-4 col-sm-6">
          <p className="text-small pt-3 ms-md-3 ms-sm-1">
            {selectedExample.description}
          </p>
        </div>
        <div className="col-lg-2 col-md-0"></div>
        <div className="col-md-6 ">
          <div className="border border-2 me-5">
            <div className="border-bottom border-2 p-2 ">
              <p className="text-small text-bold">Input</p>
              <p className="text-small pt-2">{selectedExample.input}</p>
            </div>
            <div className="p-2">
              <p className="text-small text-bold">Output</p>
              <p className="text-small">
                <Typewriter text={selectedExample} delay={2} />
              </p>
            </div>
          </div>
        </div>
        <hr className="my-5" />
      </div>

      <div className="row ms-md-3 ms-sm-1">
        <div className="col-md-6">
          <p className="text-medium pt-3 text-bold">Code Snippet</p>
          <div className="pt-3 ">
            <CodeComponent code={model.code_snippet} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetailsPage;
