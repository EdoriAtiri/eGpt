import { useEffect, useState } from 'react'
import './normal.css'
import './App.css'

function App() {
  const [input, setInput] = useState()
  const [chatLog, setChatLog] = useState([
    {
      user: 'gpt',
      message: 'how can i help you',
    },
    {
      user: 'me',
      message: 'i want to use chatgpt today',
    },
  ])

  async function handleSubmit(e) {
    e.preventDefault()
    setChatLog([...chatLog, { user: 'me', message: `${input}` }])
    setInput('')
    const response = await fetch('http://localhost:3000/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: chatLog.map((message) => message.message).join(),
      }),
    })

    const data = await response.json()
  }

  return (
    <>
      <div className='App'>
        <aside className='sidemenu'>
          <div className='side-menu-button'>
            <span>+</span> New Chat
          </div>
        </aside>

        <section className='chatbox'>
          <div className='chat-log'>
            {chatLog.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}

            <div className='chat-message chatgpt'>
              <div className='chat-message-center'>
                <div className='avatar chatgpt'></div>
                <div className='message'>I am an AI</div>
              </div>
            </div>
          </div>

          <div className='chat-input-holder'>
            <form onSubmit={handleSubmit}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className='chat-input-textarea'
              ></input>
            </form>
          </div>
        </section>
      </div>
    </>
  )
}

const ChatMessage = ({ message }) => {
  return (
    <div className={`chat-message ${message.user === 'gpt' && 'chatgpt'}`}>
      <div className='chat-message-center'>
        <div className={`avatar ${message.user === 'gpt' && 'chatgpt'}`}></div>
        <div className='message'>{message.message}</div>
      </div>
    </div>
  )
}

export default App
