import './App.css';
import Navbar from './components/common/Navbar';
import ParticlesBackground from './components/ParticlesBackground';
function App() {

  return (
    <div>
      <div style={{zIndex:"1"}}>
      <ParticlesBackground/>
      </div>
      <div>
      <Navbar/>
      </div>
    </div>
  );
}

export default App;
