require('dotenv').config()
const express = require('express')
const app = express()
const OpenAI = require('openai')
const port = 3000

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
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'system', content: 'You are a helpful assistant.' }],
    model: 'gpt-3.5-turbo',
  })

  console.log(completion.choices[0])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
