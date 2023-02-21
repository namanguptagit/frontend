import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header.jsx'
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        
        <Route path='/' element={<Home />} />
        
       
      </Routes>
    </Router>
    );
}

export default App;
