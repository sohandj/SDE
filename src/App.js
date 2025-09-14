import './App.css'
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro"
import Skills from './Components/Skills';

import Footer from './Components/Footer';
import Certificate from './Components/Certificate';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro/>
      <Skills/>
      <Certificate/>
      <Footer/>
    </div>
  );
}

export default App;
