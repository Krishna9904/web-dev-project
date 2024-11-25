import React, { useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as use from "@tensorflow-models/universal-sentence-encoder";

const EmbeddingApp = () => {
  const [inputText, setInputText] = useState("");
  const [embeddings, setEmbeddings] = useState([]);
  const [loading, setLoading] = useState(false);

  const generateEmbeddings = async () => {
    if (!inputText.trim()) {
      alert("Please enter text to generate embeddings.");
      return;
    }

    setLoading(true);
    try {
      const model = await use.load(); // Load the Universal Sentence Encoder model
      const embeddingTensor = await model.embed([inputText]); // Generate embeddings
      const embeddingArray = embeddingTensor.arraySync()[0]; // Extract the embedding as an array

      setEmbeddings(embeddingArray);
    } catch (error) {
      console.error("Error generating embeddings:", error);
      alert("Failed to generate embeddings. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>String to Vector Embeddings</h2>
      <textarea
        style={{
          width: "100%",
          height: "100px",
          padding: "10px",
          marginBottom: "10px",
          fontSize: "16px",
        }}
        placeholder="Enter text here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
        onClick={generateEmbeddings}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Embeddings"}
      </button>
      <div>
        {embeddings.length > 0 && (
          <>
            <h3>Embeddings:</h3>
            <div
              style={{
                maxHeight: "300px",
                overflowY: "auto",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                background: "#f9f9f9",
              }}
            >
              <pre style={{ fontSize: "14px" }}>
                {JSON.stringify(embeddings, null, 2)}
              </pre>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EmbeddingApp;
