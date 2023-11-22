require('dotenv').config()
const express = require('express')
const OpenAI = require('openai')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000

const app = express()
app.use(bodyParser.json())
app.use(cors())

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// async function main() {
//   const completion = await openai.chat.completions.create({
//     messages: [{ role: 'system', content: 'You are a helpful assistant.' }],
//     model: 'gpt-3.5-turbo',
//   })

//   console.log(completion.choices[0])
// }
// main()

app.post('/', async (req, res) => {
  const { message } = req.body
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'system', content: `${message}` }],
    model: 'gpt-3.5-turbo',
  })

  // console.log(completion.choices[0])
  res.json({
    message: completion.choices[0],
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
