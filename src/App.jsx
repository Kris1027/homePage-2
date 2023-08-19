import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';

import HomePage from './pages/HomePage';
import ToDoList from './pages/ToDoList';
import NotePad from './pages/NotePad';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='todolist' element={<ToDoList />} />
        <Route path='notepad' element={<NotePad />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
