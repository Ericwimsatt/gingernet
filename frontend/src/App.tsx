import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Statesmanship } from './pages/Statesmanship/Statesmanship'
import { StatesmanshipPlay } from './pages/Statesmanship/StatesmanshipPlay'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/statesmanship" element={<Statesmanship />} />
        <Route path="/statesmanship/play" element={<StatesmanshipPlay />} />
      </Routes>
    </Router>
  )
}

export default App
