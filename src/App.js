import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainHead from './MainHead';
import Contracts from './MainHead/Contract';
import Blog from './MainHead/Blog';
import FAQ from './MainHead/Faq';
import Team from './MainHead/Team';
import ContactUs from './MainHead/ContactUs';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainHead />} />
          <Route path='/contracts' element={<Contracts />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/team' element={<Team />} />
          <Route path='/contact_us' element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
