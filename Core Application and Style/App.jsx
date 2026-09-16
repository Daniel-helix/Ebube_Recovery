import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Activities from './pages/Activities';
import Services from './pages/Services';
import Hire from './pages/Hire';
import Gallery from './pages/Gallery';
import Posts from './pages/Posts';
import Running from './pages/Running';
import Contact from './pages/Contact';

export default function App() {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/activities" element={<Activities />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/hire" element={<Hire />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/posts" element={<Posts />} />
                        <Route path="/running" element={<Running />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}
