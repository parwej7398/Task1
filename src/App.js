import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainHead from './MainHead';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainHead />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
