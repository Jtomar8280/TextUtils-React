import React, { useState } from "react";

export default function TextArea(props) {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const handleClear = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleToUpper = () => {
    setText(text.toUpperCase());
  };

  const handleToLower = () => {
    setText(text.toLowerCase());
  };

  const handleExtraSpaces = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
  };

  const handleRemoveSpecialChars = () => {
    let newText = text.replace(/[^\p{L}\p{N}\s]/gu, "");
    setText(newText);
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    if (text === "") {
      showAlert("Enter something first", "danger");
    } else {
      showAlert("Text copied successfully!", "success");
    }
  };

  const [text, setText] = useState("");

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  const charcount = text.length;

  const TimeToRead =
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length * 0.004;

  return (
    <>
      {alert && (
        <div className={`alert alert-${alert.type} w-100 w-md-50 mx-auto`} role="alert">
          {alert.msg}
        </div>
      )}
      <div className="container col-lg-8 col-md-10 col-12 mx-auto">
        <textarea
          className="form-control shadow-sm"
          value={text}
          onChange={handleOnChange}
          id="floatingTextarea"
          rows="12"
          style={{
            borderColor: "grey",
            backgroundColor: props.mode === "dark" ? "#06263f" : "#e3f2fd",
            color: props.mode === "dark" ? "#e3f2fd" : "black",
          }}
        ></textarea>
        <div className="d-flex flex-wrap gap-2 mt-3">
          <button
            type="button"
            className="btn btn-outline-primary"
            style={{
              backgroundColor: props.mode === "dark" ? "#000509" : "#e3f2fd",
              color: props.mode === "light" ? "#000509" : "#e3f2fd",
            }}
            onClick={handleClear}
          >
            Clear
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            style={{
              backgroundColor: props.mode === "dark" ? "#000509" : "#e3f2fd",
              color: props.mode === "light" ? "#000509" : "#e3f2fd",
            }}
            onClick={handleToUpper}
          >
            Convert To Upper
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            style={{
              backgroundColor: props.mode === "dark" ? "#000509" : "#e3f2fd",
              color: props.mode === "light" ? "#000509" : "#e3f2fd",
            }}
            onClick={handleToLower}
          >
            Convert To Lower
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            style={{
              backgroundColor: props.mode === "dark" ? "#000509" : "#e3f2fd",
              color: props.mode === "light" ? "#000509" : "#e3f2fd",
            }}
            onClick={handleExtraSpaces}
          >
            Clear Extra Spaces
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            style={{
              backgroundColor: props.mode === "dark" ? "#000509" : "#e3f2fd",
              color: props.mode === "light" ? "#000509" : "#e3f2fd",
            }}
            onClick={handleRemoveSpecialChars}
          >
            Remove Special chars
          </button>
          <button
            type="button"
            className="btn btn-outline-primary"
            style={{
              backgroundColor: props.mode === "dark" ? "#000509" : "#e3f2fd",
              color: props.mode === "light" ? "#000509" : "#e3f2fd",
            }}
            onClick={handleCopyText}
          >
            Copy Text
          </button>
        </div>
      </div>
      <div className="container col-lg-8 col-md-10 col-12 mx-auto my-4">
        <h1>Text Summary</h1>
        <div className="row mt-3">
          <div className="col-6">
            <h5>Words</h5>
            <h3>{wordCount}</h3>
          </div>

          <div className="col-6">
            <h5>Characters</h5>
            <h3>{charcount}</h3>
          </div>
        </div>
        <h5>Time To Read: {TimeToRead}</h5>
      </div>
      <div className="container col-lg-8 col-md-10 col-12 mx-auto my-4">
        <h1>Preview</h1>
        <div className="card shadow-sm">
          <div className="card-body">{text || "Nothing to preview"}</div>
        </div>
      </div>
    </>
  );
}
