import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Gingernet.net</h1>
        <p className="tagline">Welcome to the ericverse</p>
      </header>
      
      <main className="main">
        <section className="hero">
          <h2>Welcome to Gingernet.net</h2>
          <p>I'm gonna put something here</p>
          <p className="coming-soon">Something Coming Soon</p>
        </section>
      </main>

      <footer className="footer">
        <p> {new Date().getFullYear()} Gingernet.net - All rights reserved</p>
      </footer>
    </div>
  )
}

export default App
