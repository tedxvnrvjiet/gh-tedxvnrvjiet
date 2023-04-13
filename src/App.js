import { useState } from 'react';
import './App.css';
import Navbar from './components/common/Navbar';
import Nav from './components/common/Nav';
import Footer from './components/footer/Footer';
import Loading from './components/loading/Loading';
import { Route, Routes } from 'react-router-dom';
import About from './components/about/About'
import Team from './components/team/Team'
import Sponsors from './components/sponsors/Sponsors'
import ContactUs from './components/contactUs/ContactUs.js'
import Home from './components/home/Home';

function App() {

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 4000);

  return (
    <> { loading ? <Loading /> :
      <div style={{ position: "relative" }}>
      <div style={{zIndex:"1"}}>
      <ParticlesBackground/>
      </div>
      <div>
        {/* <Navbar/> */}
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/team' element={<Team />} />
          <Route path='/sponsors' element={<Sponsors />} />
          <Route path='/contact-us' element={<ContactUs />} />
        </Routes>
        <Footer />
        </div>
    </div>

    }
    
    </>
  );
}

export default App;
