import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { atomone, atomoneInit } from "@uiw/codemirror-theme-atomone";
import { javascript } from "@codemirror/lang-javascript";

const CodeComponent = ({ code }) => {
  return (
    <CodeMirror
      value={code}
      theme={atomone}
      extensions={[javascript({ jsx: true })]}
      style={{ fontSize: "12px" }}
      readOnly={true}
    />
  );
};

export default CodeComponent;
