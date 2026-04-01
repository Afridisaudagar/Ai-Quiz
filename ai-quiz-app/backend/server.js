import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// API route
app.post("/generate-quiz", async (req, res) => {
  const { topic } = req.body;

  // Dummy AI response (baad me real AI add karenge)
  const quiz = [
    {
      question: `What is ${topic}?`,
      options: ["Option A", "Option B", "Option C"],
      answer: "Option A"
    }
  ];

  res.json(quiz);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});