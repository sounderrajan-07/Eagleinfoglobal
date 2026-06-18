import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Consultancy from './pages/Consultancy';
import Land from './pages/Land';
import Finance from './pages/Finance';
import Export from './pages/Export';
import BankLoan from './pages/BankLoan';
import Contact from './pages/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/consultancy" element={<Consultancy />} />
            <Route path="/land" element={<Land />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/export" element={<Export />} />
            <Route path="/bank-loan" element={<BankLoan />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        {/* WhatsApp Floating Button */}
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;