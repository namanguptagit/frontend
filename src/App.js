import './App.css';
import '../src/Components/Home/Home.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Login  from './Components/Login/Login.jsx';
function App() {

  return (
    <Router>
      <Header />
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/Account' element={<Login/>} />
        
      </Routes>
      <Footer />
    </Router>
    );
}

export default App;
