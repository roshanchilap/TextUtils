import React, { useState } from "react";
import "../App.css";

function TextForm({ heading, mode }) {
  const handleUpClick = () => {
    let upText = text.toUpperCase();
    setText(upText);
  };
  const handleLowClick = () => {
    let lowText = text.toLowerCase();
    setText(lowText);
  };

  const trimSpaces = () => {
    let trimText = text.split(/[ ]+/);
    setText(trimText.join(" "));
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
  };
  const clearText = () => {
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <div className="head">
          <h1>{heading}</h1>
          <div className="mb-3">
            <textarea
              id="myText"
              className="form-control"
              placeholder="Enter the text!!!"
              rows="8"
              value={text}
              onChange={handleChange}
              style={{
                backgroundColor: mode === "dark" ? "black" : "white",
                color: mode === "dark" ? "white" : "black",
              }}
            ></textarea>
            <br />
            <button
              className="btn btn-primary my-3 mx-2"
              onClick={handleUpClick}
              disabled={text.length === 0}
            >
              Convert to Uppercase
            </button>
            <button
              className="btn btn-secondary my-3 mx-2"
              onClick={handleLowClick}
              disabled={text.length === 0}
            >
              Convert to Lowercase
            </button>
            <button
              className="btn btn-danger my-3 mx-2"
              onClick={trimSpaces}
              disabled={text.length === 0}
            >
              Trim Spaces
            </button>
            <button
              className="btn btn-warning my-3 mx-2"
              onClick={clearText}
              disabled={text.length === 0}
            >
              Clear Text
            </button>
            <button
              className="btn btn-info my-3 mx-2"
              onClick={copyText}
              disabled={text.length === 0}
            >
              Copy Text
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <h3>Your text Summary!!!</h3>
        <p>
          {
            text.split(/\s+/).filter((ele) => {
              return ele.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {text.length === 0 ? 0 : 0.008 * text.split(" ").length} minutes to
          read.
        </p>
        <div className="preview">
          <h3>Preview</h3>
          <pre>{text.length === 0 ? "Nothing to preview 😊" : text}</pre>
        </div>
      </div>
    </>
  );
}

export default TextForm;
