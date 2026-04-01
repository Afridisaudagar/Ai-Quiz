import React, { useState } from "react";
import { generateQuiz } from "../services/api";

const QuizPage = () => {
  const [topic, setTopic] = useState("");
  const [quiz, setQuiz] = useState([]);

  const handleGenerate = async () => {
    const data = await generateQuiz(topic);
    setQuiz(data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>AI Quiz Generator</h2>

      <input
        type="text"
        placeholder="Enter topic (e.g. React)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <button onClick={handleGenerate}>
        Generate Quiz
      </button>

      <div>
        {quiz.map((q, index) => (
          <div key={index} style={{ marginTop: "20px" }}>
            <h4>{q.question}</h4>
            {q.options.map((opt, i) => (
              <p key={i}>👉 {opt}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizPage;