import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Activities from './Pages/Activities';
import Services from './Pages/Services';
import Hire from './Pages/Hire';
import Gallery from './Pages/Gallery';
import Posts from './Pages/Posts';
import Running from './Pages/Running';
import Contact from './Pages/Contact';

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
