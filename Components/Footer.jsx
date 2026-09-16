import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import logo from '../assets/logo.jpg';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Logo & Info */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                            <img src={logo} alt="SMBC Logo" style={{ height: '45px', width: 'auto', objectFit: 'contain', borderRadius: '4px', backgroundColor: 'white', padding: '4px' }} />
                        </div>
                        <p style={{ fontSize: '0.9rem', color: '#c8d2c9', marginBottom: '24px' }}>
                            A warm, welcoming family-friendly Baptist church in South Molton, Devon. We are a place to belong, grow in faith and serve our community.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: '#c8d2c9' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <MapPin size={16} style={{ color: 'var(--accent)' }} />
                                <span>28 New Road, South Molton, Devon, EX36 4BH</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Phone size={16} style={{ color: 'var(--accent)' }} />
                                <span>01769 572344</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Mail size={16} style={{ color: 'var(--accent)' }} />
                                <span>office@southmoltonbaptistchurch.co.uk</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Navigation */}
                    <div>
                        <h3 className="footer-title">Quick Links</h3>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/activities">Activities</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/hire">Hire Our Building</Link></li>
                            <li><Link to="/gallery">Photo Gallery</Link></li>
                            <li><Link to="/posts">Posts & Sermons</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Useful External Links */}
                    <div>
                        <h3 className="footer-title">Useful Links</h3>
                        <ul className="footer-links">
                            <li>
                                <a href="https://capuk.org/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                    Christians Against Poverty (CAP) <ExternalLink size={12} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.bmsworldmission.org/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                    BMS World Mission <ExternalLink size={12} />
                                </a>
                            </li>
                            <li>
                                <a href="https://wellfound.org.uk/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                    WellFound <ExternalLink size={12} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.opendoorsuk.org/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                    Open Doors UK <ExternalLink size={12} />
                                </a>
                            </li>
                            <li>
                                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#c8d2c9', cursor: 'default' }}>
                                    South Children's Work Project (SCWP)
                                </span>
                            </li>
                            <li>
                                <a href="https://www.baptist.org.uk/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                    Baptists Together <ExternalLink size={12} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.swbaptists.org.uk/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                    South West Baptist Association <ExternalLink size={12} />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Policies & Info */}
                    <div>
                        <h3 className="footer-title">Policies & Running</h3>
                        <ul className="footer-links">
                            <li><Link to="/running#policies">Safeguarding Policy</Link></li>
                            <li><Link to="/running#policies">Working with Vulnerable Adults</Link></li>
                            <li><Link to="/running#policies">Bullying & Safeguarding</Link></li>
                            <li><Link to="/running#policies">Health & Safety Policy</Link></li>
                            <li><Link to="/running#membership">Become a Member</Link></li>
                            <li><Link to="/running#giving">Financial Giving</Link></li>
                            <li><Link to="/running#meetings">Members Meetings</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom footer bar */}
                <div className="footer-bottom">
                    <div>
                        &copy; {currentYear} South Molton Baptist Church. All rights reserved. Registered Charity No. 1150493.
                    </div>
                    <div style={{ display: 'flex', gap: '16px' }}>
                        <Link to="/running#policies" style={{ color: '#c8d2c9' }}>Privacy Policy</Link>
                        <span>&bull;</span>
                        <Link to="/running#policies" style={{ color: '#c8d2c9' }}>Cookies</Link>
                        <span>&bull;</span>
                        <a href="http://churches-together.org.uk/" target="_blank" rel="noopener noreferrer" style={{ color: '#c8d2c9', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            Churches Together <ExternalLink size={12} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
