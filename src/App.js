import './App.css';
import '../src/Components/Home/Home.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
function App() {

  return (
    <Router>
      <Header />
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
      </Routes>
      <Footer />
    </Router>
    );
}

export default App;
