import React, { useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as use from "@tensorflow-models/universal-sentence-encoder";

const EmbeddingApp = () => {
  const [inputText, setInputText] = useState("");
  const [embeddings, setEmbeddings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateEmbeddings = async () => {
    if (!inputText.trim()) {
      alert("Please enter text to generate embeddings.");
      return;
    }

    setLoading(true);
    setError("");
    setEmbeddings([]);

    try {
      // Log TensorFlow.js backend info
      console.log("TensorFlow.js backend:", tf.getBackend());
      console.log("Loading Universal Sentence Encoder model...");

      // Load the Universal Sentence Encoder model
      const model = await use.load();
      console.log("Model loaded successfully.");

      // Generate embeddings
      const embeddingTensor = await model.embed([inputText]);
      const embeddingArray = embeddingTensor.arraySync()[0]; // Extract the embeddings
      embeddingTensor.dispose(); // Dispose the tensor to free memory

      setEmbeddings(embeddingArray);
    } catch (err) {
      console.error("Error generating embeddings:", err);
      setError("Failed to generate embeddings. Please check the console for details.");
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
      {error && <p style={{ color: "red" }}>{error}</p>}
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
