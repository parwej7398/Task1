
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Head from './MainHead/Head';
import Contracts from './MainHead/Contract';
import Blog from './MainHead/Blog';
import FAQ from './MainHead/Faq';
import Team from './MainHead/Team';
import ContactUs from './MainHead/ContactUs';
import Handyman from './MainHead/pages/Handyman';
import Venue from './MainHead/pages/venue';
import Freelance from './MainHead/pages/Freelance';
import Sign from './MainHead/pages/Sign';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Head />} />
          <Route path='/contracts' element={<Contracts />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/team' element={<Team />} />
          <Route path='/contact_us' element={<ContactUs />} />
          <Route path='/handyman' element={<Handyman />} />
          <Route path='/venue' element={<Venue />} />
          <Route path='/freelance' element={<Freelance />} />
          <Route path='/sign' element={<Sign />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
