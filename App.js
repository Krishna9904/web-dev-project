import React, { useState } from "react";
import "./App.css";
import { Header } from "./Header";

function App() {
  const [showInfo, setShowInfo] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  

  return (
    <>
      <div>
        <div className="nav">
          <p className="title">
            <img
              src="data:image/png;base64,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"
              alt="Bank Of America"
              height="120px"
            />
          </p>

          <ul>
            {/* <li>
              <a href="/account" className="site">
                Im DSP Chatbot Prudent
              </a>
            </li> */}
            <li>
              <div class="checkbox-wrapper-34">
                <input
                  class="tgl tgl-ios"
                  id="toggle-34"
                  type="checkbox"
                  onClick={toggleInfo}
                />
                <label class="tgl-btn" for="toggle-34"></label>
              </div>
              {/* <button onClick={toggleInfo}>
                {showInfo ? "Hide Details" : "Show Details"}
              </button> */}
            </li>

            <li>
              <a href="/account" className="site"></a>
            </li>

            <li>
              <a href="/account" className="site"></a>
            </li>
            <li>
              <a href="/account" className="site">
                Im DSP Chatbot Prudent
              </a>
            </li>

            <li></li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="left-side">
          <h1>Welcome to Your App</h1>
          <p>This is the main content area.</p>

          <div className="chat-box">
            <div className="chat-header">
              Chat with DSP bot by typing your responses in the text box.
            </div>
            <div className="chat-input-container">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type your message here..."
                className="chat-input"
              />
            </div>
          </div>
        </div>

        {showInfo && (
          <div className="right-side">
            <div className="info">
              <h2>Employee Virtual Assistant</h2>
              <p>
                The Employee Virtual Assistant is your first stop for help with
                tech issues or Human Resources questions. It’s always learning
                and being trained to assist you quickly and efficiently.
              </p>
              <ul>
                <li>Mobile Device password reset</li>
                <li>Network drive mapping</li>
                <li>View payslips and pay schedules</li>
                <li>Find your person number</li>
                <li>Webex account request and troubleshooting</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
