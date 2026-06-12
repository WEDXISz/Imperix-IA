const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

const API_KEY = "ErsXmm1ZUq6UpoY86TmI"

app.post("/chat", async (req, res) => {

const text = req.body.text

try {

const response = await fetch(
`https://api.spiderx.com.br/api/ai/deepseek-v4-flash?api_key=${API_KEY}`,
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
console.log(e)
res.json({ reply: "Erro na IA" })
}

})

app.listen(process.env.PORT || 3000, () => {
console.log("🔥 IMPΞRIX online")
})