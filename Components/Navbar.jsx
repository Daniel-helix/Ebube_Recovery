import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.jpg';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => {
        setIsOpen(false);
        setActiveDropdown(null);
    };

    const handleDropdownToggle = (index, e) => {
        if (window.innerWidth <= 1024) {
            e.preventDefault();
            setActiveDropdown(activeDropdown === index ? null : index);
        }
    };

    return (
        <header className="header">
            <div className="container nav-container">
                <Link to="/" className="logo-link" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} alt="SMBC Logo" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
                </Link>

                {/* Mobile Toggle Button */}
                <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Navigation Menu */}
                <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
                    <div className="nav-item">
                        <NavLink to="/" className={({ active }) => `nav-link ${active ? 'active' : ''}`} onClick={closeMenu}>
                            Home
                        </NavLink>
                    </div>

                    <div className="nav-item">
                        <NavLink
                            to="/about"
                            className={({ active }) => `nav-link ${active ? 'active' : ''}`}
                            onClick={(e) => handleDropdownToggle(1, e)}
                        >
                            About Us <ChevronDown size={14} />
                        </NavLink>
                        <div className={`nav-dropdown ${activeDropdown === 1 ? 'show' : ''}`}>
                            <NavLink to="/about#expect" className="dropdown-link" onClick={closeMenu}>What to Expect</NavLink>
                            <NavLink to="/about#team" className="dropdown-link" onClick={closeMenu}>Leadership Team</NavLink>
                            <NavLink to="/about#history" className="dropdown-link" onClick={closeMenu}>Our History</NavLink>
                            <NavLink to="/about#beliefs" className="dropdown-link" onClick={closeMenu}>Our Beliefs</NavLink>
                            <NavLink to="/about#associations" className="dropdown-link" onClick={closeMenu}>Baptists Together & SWBA</NavLink>
                        </div>
                    </div>

                    <div className="nav-item">
                        <NavLink to="/activities" className={({ active }) => `nav-link ${active ? 'active' : ''}`} onClick={closeMenu}>
                            Activities
                        </NavLink>
                    </div>

                    <div className="nav-item">
                        <NavLink
                            to="/services"
                            className={({ active }) => `nav-link ${active ? 'active' : ''}`}
                            onClick={(e) => handleDropdownToggle(2, e)}
                        >
                            Services <ChevronDown size={14} />
                        </NavLink>
                        <div className={`nav-dropdown ${activeDropdown === 2 ? 'show' : ''}`}>
                            <NavLink to="/services#sunday" className="dropdown-link" onClick={closeMenu}>Sunday Services</NavLink>
                            <NavLink to="/services#children" className="dropdown-link" onClick={closeMenu}>Children's Work</NavLink>
                            <NavLink to="/services#refreshments" className="dropdown-link" onClick={closeMenu}>Worship & Creche</NavLink>
                            <NavLink to="/services#giving" className="dropdown-link" onClick={closeMenu}>Giving & Support</NavLink>
                        </div>
                    </div>

                    <div className="nav-item">
                        <NavLink to="/hire" className={({ active }) => `nav-link ${active ? 'active' : ''}`} onClick={closeMenu}>
                            Hire Building
                        </NavLink>
                    </div>

                    <div className="nav-item">
                        <NavLink to="/gallery" className={({ active }) => `nav-link ${active ? 'active' : ''}`} onClick={closeMenu}>
                            Gallery
                        </NavLink>
                    </div>

                    <div className="nav-item">
                        <NavLink to="/posts" className={({ active }) => `nav-link ${active ? 'active' : ''}`} onClick={closeMenu}>
                            Posts
                        </NavLink>
                    </div>

                    <div className="nav-item">
                        <NavLink to="/running" className={({ active }) => `nav-link ${active ? 'active' : ''}`} onClick={closeMenu}>
                            Running Church
                        </NavLink>
                    </div>

                    <div className="nav-item" style={{ marginLeft: '12px' }}>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.85rem' }} onClick={closeMenu}>
                            Contact Us
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}
