import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Navbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='border'>
      <div className='border'>
        <Header />
        <Navbar />
      </div>
    </div>
  )
}

export default App
