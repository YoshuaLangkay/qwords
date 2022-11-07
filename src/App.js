import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Navbar';
import Home from './components/Home';
import Slide from './components/carousel';
import PricingList from './components/PricingList';
import Features from './components/Features';
import Testi from './components/Testi';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Slide />
        <PricingList />
        <Features />
        <Testi />

          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
