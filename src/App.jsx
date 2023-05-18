import { useState } from 'react'
import './App.css'
import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <div className=''>
        <Header />
      </div>
    </div>
  )
}

export default App
