import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';

import HomePage from './pages/HomePage';
import ToDoList from './pages/ToDoList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='todolist' element={<ToDoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
