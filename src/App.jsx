import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';

import Homepage from './components/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
