# web-dev-projects
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
              height="150px"
            />
          </p>

          <ul>
            <li>
              <a href="/account" className="site">
                Im DSP Chatbot Prudent
              </a>
            </li>
            <li>
              <button onClick={toggleInfo}>
                {showInfo ? "Hide Details" : "Show Details"}
              </button>
            </li>

            <li>
              <a href="/account" className="site"></a>
            </li>

            <li>
              <a href="/account" className="site"></a>
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


<div>
      <div className="nav">
        <p className="title">
          <img
            src="data:image/jpeg;base64,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SScAAOk36F7MxEbyLu0eZr/QoC+QftMti/1G+bGOraeJO4LkeI6z+oybR4Y6fyuY6dmEtWvSCAgICAgICAgICAghufuZja1vLQ2bVNFscBI30XHeOg9mzZsuH6+dPPZt4Z/JFkx9rnCmZ4XRudG9pY9ps5rhYg7iF1dL1vWLVneFSY26vNZPBAQEBAQEBAQEBAQcgE4AXJwAFySTsAA2leTMRG8i2dHuY5gLaupb5bbHGbHk7+c71/h1rmeI8R737PH4fP4rWLFtzlYS06cQEBAQEBAQEBAQEBAQUnpWna7KDgLXZHG11vS8Z2PY4LquD1mNPv6zKpmn3kPW1QiAgICAgICAgICDNyTkmeqk5KCMyO6bYNaN73bGj+xdQZ9TjwV7V52/VlWs26LezOzEho7SykT1PpW8SP8Alg9PrHHq2LmNbxK+o92OVf1+a1THFUxWuSiAgICAgICAgICAgICDGylXR08T55HasbGlxPV0Didizx0m9orXrLyZ2jd8+TGeuqHysifLLK8uIiaZLX2AkYAAAC53Ls6Ti02KK2tEREKU72neE5zW0ZvLhLWkNaMRAw3J4SOGAHqt79oWo1fGOXZw/j/CamHzlsMv6L4XkvpZDA76t93x9h5zfeOCh0/GMlOWSN4/N7bDE9EBytmnX0372meWjz4QZmdd2i4HFwC3WHX6fL4bbfCeSG2O0NJdXImJ6MBHggICASg2uSs3aypPkaeRzfTcDGzr13WBHVdVc2twYvFaGdaWnonWQdFgFn1kut/2oCQ3qc8i57AFp9RxqZ5Yo2+Mpq4PVYeTsnw07BHDG2Jg81gDR1neeJWlyZL5J7V53lPERHRlLB6ICAgICAgICAgICAgICDyqaZkjdWRjZG3Bs8BwuNhsV7W01neJ2HaKFrBZrQ0bmgAdwSZmeps7rwEBBrco5Ao6j99SxSne9jS7sNrhTY9Rlx+C0x9WM1iesNFU6N8mv2Rvj9iR/wAHEq3Tiupr5/kwnFVr5dFFGebUVDOowu+MamjjWfziGPcVcR6J6Qbampd2wD4Rr2eNZvKIO4hn0+jTJzdrZZPbkcPy2UV+Lam3nH4Mow1brJ+bNDAbxUkTHelqNLv6jc+9U8mqzZPFaZ+rOKVjpDbWUDJygICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIP/2Q=="
            alt="Bank Of America"
          />
        </p>

        <ul>
          <li>
            <a href="/account" className="site">
              Im DSP Chatbot Prudent
            </a>
          </li>

          <li>
            <a href="/account" className="site"></a>
          </li>

          <li>
            <a href="/account" className="site"></a>
          </li>

          <li>
            <a href="/account" className="site">
              Wiki
            </a>
          </li>
        </ul>
      </div>
    </div>


    .container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
}

.left-side {
  flex: 1;
  padding: 20px;
  background-color: #f4f4f4;
}

.right-side {
  width: 300px;
  padding: 20px;
  background-color: #f4f4f4;
  border-left: 1px solid #ccc;
}

.info {
  background-color: white;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.chat-box {
  margin: 20px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.chat-header {
  background-color: #003366; /* dark blue header */
  color: white;
  padding: 10px;
  font-size: 14px;
}

.chat-input-container {
  padding: 15px;
  background-color: #f9f9f9;
  margin-top: auto;
}

.chat-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 16px;
}

button {
  margin-top: 20px;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
.nav{
  background-color: #ffffff;
  color: #0056b3;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap:2rem;
  padding: 12px;
}
.nav ul{
  padding: 0%;
  display: flex;
  list-style: none;
  gap:2rem;
}
.nav a{
  color: inherit;
  text-decoration: none;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 1.125rem;
  
}
.nav li :hover{
  transform: scale(1.5);
}
