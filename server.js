const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

const API_KEY = "ErsXmm1ZUq6UpoY86TmI";

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/chat", async (req, res) => {
  try {
    const text = req.body.text;

    const response = await fetch(
      `https://api.spiderx.com.br/api/ai/deepseek-v4-flash?api_key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text })
      }
    );

    const data = await response.json();

    res.json({
      reply: data.response || "Sem resposta."
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      reply: "Erro ao conectar com a IA."
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🔥 IMPΞRIX online na porta ${PORT}`);
});