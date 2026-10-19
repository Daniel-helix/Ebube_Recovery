import { Link } from 'react-router-dom';
import { Calendar, Users, MapPin, Clock, ArrowRight, BookOpen, Coffee, Sun, Leaf } from 'lucide-react';
import streetView from '../assets/street_view.jpg';
import andyImg from '../assets/andy.jpeg';
import sunflowersPlaytime from '../assets/sunflowers_playtime.jpg';
import sunflowersTrains from '../assets/sunflowers_trains.jpg';
import nativityPlay from '../assets/nativity_play.jpg';
import churchEntrance from '../assets/church_entrance.jpg';
import chapelHall from '../assets/chapel_hall.jpg';

export default function Home() {
    return (
        <div className="fade-in">
            {/* Hero Section */}
            <section className="hero-section" style={{
                backgroundImage: `linear-gradient(rgba(27, 77, 34, 0.75), rgba(27, 77, 34, 0.9)), url('https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1600')`
            }}>
                <div className="container hero-content">
                    <span style={{
                        backgroundColor: 'var(--accent)',
                        color: 'var(--white)',
                        padding: '6px 16px',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: '20px',
                        display: 'inline-block'
                    }}>
                        Welcome to South Molton Baptist Church
                    </span>
                    <h1 className="hero-title" style={{ color: 'var(--white)' }}>A place to belong, grow in faith & serve our community</h1>
                    <p className="hero-subtitle">
                        South Molton Baptist Church is a welcoming community with Jesus at the centre; committed to Him, to each other and to sharing His good news.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/about" className="btn btn-primary">Plan Your Visit</Link>
                        <Link to="/activities" className="btn btn-outline-white">What's On</Link>
                    </div>
                </div>
            </section>

            {/* Quick Intro Section */}
            <section className="section-padding container">
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '48px', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Who We Are & When We Meet</h2>
                        <div style={{
                            padding: '16px 20px',
                            backgroundColor: 'var(--primary-bg)',
                            borderLeft: '4px solid var(--accent)',
                            borderRadius: 'var(--radius-md)',
                            marginBottom: '20px'
                        }}>
                            <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent)', letterSpacing: '0.5px', marginBottom: '4px' }}>
                                Our Mission
                            </div>
                            <p style={{ fontSize: '1.1rem', color: 'var(--primary)', fontStyle: 'italic', fontWeight: 600, margin: 0, lineHeight: 1.5 }}>
                                "South Molton Baptist Church is a welcoming community with Jesus at the centre; committed to Him, to each other and to sharing His good news."
                            </p>
                        </div>
                        <p style={{ fontSize: '1.05rem', color: 'var(--gray-500)', marginBottom: '16px' }}>
                            We are a gathered community of Christians. We believe that church isn't a building, but the people who make it up. We seek to follow Jesus Christ, showing His love in action throughout our local neighborhood.
                        </p>
                        <p style={{ fontSize: '1rem', color: 'var(--gray-500)', marginBottom: '24px' }}>
                            Whether you have been going to church for years, or are looking for answers to life's big questions, you are always welcome here. We are an active member of <strong>Baptists Together</strong> and the <strong>South West Baptist Association</strong>.
                        </p>
                        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Clock size={20} style={{ color: 'var(--primary)' }} />
                                <div>
                                    <strong>Sunday Service</strong>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--gray-500)' }}>10:30 AM - 12:00 PM</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <MapPin size={20} style={{ color: 'var(--primary)' }} />
                                <div>
                                    <strong>Location</strong>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--gray-500)' }}>New Road, South Molton</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
                            <img
                                src={streetView}
                                alt="South Molton Baptist Church Exterior"
                                style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', width: '100%', height: '220px', objectFit: 'cover' }}
                            />
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                <img
                                    src={churchEntrance}
                                    alt="South Molton Baptist Church Entrance"
                                    style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', width: '100%', height: '130px', objectFit: 'cover' }}
                                />
                                <img
                                    src={chapelHall}
                                    alt="South Molton Baptist Church Interior"
                                    style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', width: '100%', height: '130px', objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* "This Week" Alert Section */}
            <section className="bg-light section-padding">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">This Week at SMBC</h2>
                        <p className="section-subtitle">Join us for worship, fellowship, and community activities</p>
                    </div>

                    <div className="announcement-banner">
                        <h3 className="announcement-title" style={{ color: 'var(--primary)', fontWeight: 700 }}>
                            <Calendar style={{ color: 'var(--primary)' }} size={24} />
                            Upcoming Gatherings
                        </h3>
                        <p style={{ color: 'var(--gray-500)', marginBottom: '16px' }}>
                            Here is a snapshot of our core weekly schedule. Drop in or contact us for more information on how to get involved.
                        </p>

                        <div className="announcement-grid">
                            <div className="announcement-item">
                                <div className="announcement-time">Sunday 10:30 AM</div>
                                <strong style={{ display: 'block', margin: '4px 0' }}>Morning Service</strong>
                                <p style={{ fontSize: '0.85rem', color: 'var(--gray-500)' }}>Worship, Biblically-centered children's talk, Lighthouse groups & Creche. Refreshments follow.</p>
                            </div>
                            <div className="announcement-item">
                                <div className="announcement-time">Tuesday 10:00 AM</div>
                                <strong style={{ display: 'block', margin: '4px 0' }}>Sunflowers Parents & Toddlers</strong>
                                <p style={{ fontSize: '0.85rem', color: 'var(--gray-500)' }}>Playtime, crafts, stories, and songs for children. A friendly chat and refreshments for parents.</p>
                            </div>
                            <div className="announcement-item">
                                <div className="announcement-time">Thursday 1:30 PM</div>
                                <strong style={{ display: 'block', margin: '4px 0' }}>Renew Wellbeing Cafe</strong>
                                <p style={{ fontSize: '0.85rem', color: 'var(--gray-500)' }}>A quiet, friendly space to share hobbies, enjoy a coffee, and practice mental wellbeing techniques.</p>
                            </div>
                            <div className="announcement-item">
                                <div className="announcement-time">Friday 6:00 PM</div>
                                <strong style={{ display: 'block', margin: '4px 0' }}>Lighthouse Youth Group</strong>
                                <p style={{ fontSize: '0.85rem', color: 'var(--gray-500)' }}>Games, fellowship, and discussions for primary and secondary school children.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Activities Highlight */}
            <section className="section-padding container">
                <div className="section-header">
                    <h2 className="section-title">Our Key Activities</h2>
                    <p className="section-subtitle">Programs and groups designed to bless and support our community</p>
                </div>

                <div className="grid">
                    {/* Renew Wellbeing */}
                    <div className="card">
                        <div className="card-img-wrapper">
                            <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600" alt="Renew Wellbeing Cafe" className="card-img" />
                            <span className="card-tag">Community</span>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Renew Wellbeing</h3>
                            <p className="card-text">
                                A calm space for mental wellbeing where it's OK not to be OK. Join us to enjoy shared hobbies, a quiet room for prayer or reflection, and connection with others.
                            </p>
                            <Link to="/activities#renew" className="card-footer-link">
                                Learn more <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>

                    {/* Sunflowers Parents & Toddlers */}
                    <div className="card">
                        <div className="card-img-wrapper">
                            <img src={sunflowersTrains} alt="Toddlers playing" className="card-img" />
                            <span className="card-tag">Children</span>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Sunflowers Group</h3>
                            <p className="card-text">
                                A warm, safe and stimulating play environment for parents, grandparents, carers and their children under 5. We enjoy sensory play, crafts, stories, and songs.
                            </p>
                            <Link to="/activities#sunflowers" className="card-footer-link">
                                Learn more <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>

                    {/* Showcase & Passion Play */}
                    <div className="card">
                        <div className="card-img-wrapper">
                            <img src={nativityPlay} alt="Community Theater" className="card-img" />
                            <span className="card-tag">Creative Outreach</span>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">Showcase & Living Nativity</h3>
                            <p className="card-text">
                                We love using drama, music, and community performance to retell the stories of the Bible. Explore our Passion Plays, Nativity, and Showcase talent nights.
                            </p>
                            <Link to="/activities#showcase" className="card-footer-link">
                                Learn more <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet the Minister / Team Intro */}
            <section className="bg-primary-light section-padding">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '48px', alignItems: 'center' }}>
                        <div>
                            <img
                                src={andyImg}
                                alt="Reverend Andy - Church Minister"
                                style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', border: '4px solid var(--white)' }}
                            />
                        </div>
                        <div>
                            <span style={{ color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem' }}>Welcome Message</span>
                            <h2 style={{ fontSize: '2.25rem', color: 'var(--primary)', margin: '8px 0 20px' }}>Meet Our Minister, Andy</h2>
                            <blockquote style={{ fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--dark)', marginBottom: '20px', lineHeight: 1.5 }}>
                                "As minister here at South Molton Baptist Church, I am thrilled to welcome you to our website and invite you to join us! We want this church to be a place where everyone can feel safe, valued, and encouraged. Come along just as you are."
                            </blockquote>
                            <p style={{ color: 'var(--gray-500)', marginBottom: '24px' }}>
                                Andy works alongside our leadership team of trustees and dedicated members to facilitate worship, children's groups, pastoral care, and building hires.
                            </p>
                            <Link to="/about#team" className="btn btn-secondary">Meet the Leadership Team</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Find Us Section */}
            <section className="section-padding container">
                <div className="section-header">
                    <h2 className="section-title">How to Find Us</h2>
                    <p className="section-subtitle">We are centrally located in South Molton with easy access and nearby parking</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', alignItems: 'stretch' }}>
                    <div>
                        <div className="map-placeholder">
                            <div className="map-bg"></div>
                            <div className="map-card">
                                <Leaf size={24} style={{ color: 'var(--primary)', marginBottom: '8px' }} />
                                <strong>South Molton Baptist Church</strong>
                                <p style={{ fontSize: '0.85rem', color: 'var(--gray-500)', margin: '8px 0' }}>28 New Road, South Molton, Devon, EX36 4BH</p>
                                <a
                                    href="https://maps.google.com/?q=South+Molton+Baptist+Church"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                    style={{ padding: '8px 16px', fontSize: '0.8rem', width: '100%', marginTop: '8px' }}
                                >
                                    Open in Google Maps
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div className="info-banner-list">
                            <div className="info-banner-item">
                                <div className="info-banner-icon"><MapPin size={24} /></div>
                                <div>
                                    <strong>Street Directions</strong>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)' }}>Situated on New Road, right next to the town center. Look for the green church signage.</p>
                                </div>
                            </div>
                            <div className="info-banner-item">
                                <div className="info-banner-icon"><Users size={24} /></div>
                                <div>
                                    <strong>Parking & Access</strong>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)' }}>On-street parking is available on New Road, and the Central Car Park is just a 3-minute walk away. Full wheelchair and pram access is provided.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
