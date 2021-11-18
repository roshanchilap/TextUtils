import React, { useState } from "react";
import "../App.css";

function TextForm({ heading }) {
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
    let cpText = document.getElementById("myText");
    cpText.select();
    navigator.clipboard.writeText(cpText.value);
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
            ></textarea>
            <br />
            <button
              className="btn btn-primary my-3 mx-2"
              onClick={handleUpClick}
            >
              Convert to Uppercase
            </button>
            <button
              className="btn btn-secondary my-3 mx-2"
              onClick={handleLowClick}
            >
              Convert to Lowercase
            </button>
            <button className="btn btn-danger my-3 mx-2" onClick={trimSpaces}>
              Trim Spaces
            </button>
            <button className="btn btn-warning my-3 mx-2" onClick={clearText}>
              Clear Text
            </button>
            <button className="btn btn-info my-3 mx-2" onClick={copyText}>
              Copy Text
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <h3>Your text Summary!!!</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} mins read.</p>
        <div className="preview">
          <h3>Preview</h3>
          <pre>
            {text.length === 0 ? "Please enter some text to preview." : text}
          </pre>
        </div>
      </div>
    </>
  );
}

export default TextForm;
