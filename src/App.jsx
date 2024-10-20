import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  
  const [primery, setPrimery] = useState('rgba(0, 0, 0, .5)')
  const [secudary, setSecudary] = useState('#BF8A26')

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home primery={primery} secudary={secudary} />}  />

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
