const express = require("express");
const Chat = require("../model/chat");
const axios = require("axios");

const router = express.Router();

// AI route
router.post("/ask-ai", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
       model: "openrouter/auto",
        messages: [
          { role: "user", content: prompt }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000",
          "X-Title": "MERN AI App"
        }
      }
    );

    res.json({
      result: response.data.choices[0].message.content
    });

  } catch (err) {
    console.log("ERROR DETAILS:", err.response?.data || err.message);
    res.status(500).json({ error: err.message });
  }
});

// SAVE route
router.post("/save", async (req, res) => {
  const { prompt, response } = req.body;

  try {
    const chat = new Chat({ prompt, response });
    await chat.save();
    res.json({ message: "Saved successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;