const express = require("express")
const cors = require("cors")
const fetch = require("node-fetch")

const app = express()
app.use(cors())
app.use(express.json())

// 🔐 SUA API FICA ESCONDIDA AQUI
const API_KEY = "SUA_API_AQUI"

app.post("/chat", async (req, res) => {

const text = req.body.text

try {

const response = await fetch(
`https://api.spiderx.com.br/api/ai/deepseek-v4-flash?api_key=${ErsXmm1ZUq6UpoY86TmI}`,
{
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ text })
}
)

const data = await response.json()

res.json({
reply: data.response || "Sem resposta"
})

} catch (e) {
res.json({ reply: "Erro na IA" })
}

})

app.listen(3000, () => {
console.log("IMPΞRIX backend rodando")
})