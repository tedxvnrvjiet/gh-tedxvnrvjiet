import { useState } from 'react';
import './App.css';
import Navbar from './components/common/Navbar';
import Nav from './components/common/Nav';
import Footer from './components/footer/Footer';
import Loading from './components/loading/Loading';
import { Route, Routes } from 'react-router-dom';
import About from './components/about/About'
import Team from './components/team/Team'
import Team2K24 from './components/Team2K24/Team2K24.js'
import Sponsors from './components/sponsors/Sponsors'
import ContactUs from './components/contactUs/ContactUs.js'
import Home from './components/home/Home';
import Archives from './components/pasteditions/Archives'
import Register from './components/register/Register';
import background from '../src/components/images/background.jpg'

function App() {

  const [loading, setLoading] = useState(false);

  // setTimeout(() => {
  //   setLoading(false);
  // }, 4000);

  return (
    <> { loading ? <Loading /> :
      // <div style={{ position: "relative" }}>
      // <div style={{zIndex:"1"}}>
      // </div>
      <div style={{backgroundImage:`url(${background})`,backgroundRepeat:"repeat",backgroundSize:"cover", overflowX: "hidden"}}>
        {/* <Navbar/> */}
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/past-editions' element={<Archives />} />
          <Route path='/team' element={<Team />} />
          <Route path='/team24' element={<Team2K24 />} />
          <Route path='/sponsors' element={<Sponsors />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer />
        </div>
    // </div>

    }
    
    </>
  );
}

export default App;
