// import { useState } from 'react'
import './normal.css'
import './App.css'

function App() {
  async function handleSubmit(e) {
    e.preventDefault()
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
            <div className='chat-message'>
              <div className='chat-message-center'>
                <div className='avatar'></div>
                <div className='message'>Hello World</div>
              </div>
            </div>

            <div className='chat-message chatgpt'>
              <div className='chat-message-center'>
                <div className='avatar chatgpt'></div>
                <div className='message'>I am an AI</div>
              </div>
            </div>
          </div>
          <div className='chat-input-holder'>
            <form onSubmit={handleSubmit}>
              <input className='chat-input-textarea'></input>
            </form>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
