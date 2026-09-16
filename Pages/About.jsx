import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Heart, BookOpen, Clock, Users, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import andyImg from '../assets/andy.jpeg';
import richardImg from '../assets/richard.jpeg';
import helenImg from '../assets/helen.jpeg';
import chiemeImg from '../assets/chieme.jpeg';
import christineImg from '../assets/christine.jpeg';
import janetImg from '../assets/janet.jpeg';

export default function About() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('expect');

    useEffect(() => {
        const hash = location.hash.replace('#', '');
        if (hash && ['expect', 'team', 'history', 'beliefs', 'associations'].includes(hash)) {
            setActiveTab(hash);
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
        window.history.pushState(null, '', `#${tabId}`);
    };

    return (
        <div className="container section-padding fade-in" style={{ minHeight: '80vh' }}>
            <div className="section-header">
                <h1 className="section-title">About Our Church</h1>
                <p className="section-subtitle">Discover who we are, what we believe, and what to expect when you visit.</p>
            </div>

            {/* Tabs Navigation */}
            <div className="tabs-header">
                <button
                    className={`tab-btn ${activeTab === 'expect' ? 'active' : ''}`}
                    onClick={() => handleTabClick('expect')}
                >
                    What to Expect
                </button>
                <button
                    className={`tab-btn ${activeTab === 'team' ? 'active' : ''}`}
                    onClick={() => handleTabClick('team')}
                >
                    Leadership Team
                </button>
                <button
                    className={`tab-btn ${activeTab === 'beliefs' ? 'active' : ''}`}
                    onClick={() => handleTabClick('beliefs')}
                >
                    Our Beliefs
                </button>
                <button
                    className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`}
                    onClick={() => handleTabClick('history')}
                >
                    History
                </button>
                <button
                    className={`tab-btn ${activeTab === 'associations' ? 'active' : ''}`}
                    onClick={() => handleTabClick('associations')}
                >
                    Baptists Together & SWBA
                </button>
            </div>

            {/* Tab Contents */}
            <div className="tab-content">

                {/* WHAT TO EXPECT TAB */}
                {activeTab === 'expect' && (
                    <div id="expect" className="fade-in">
                        <h2 style={{ marginBottom: '24px', fontFamily: 'var(--font-heading)' }}>Visiting Us for the First Time?</h2>
                        <p style={{ color: 'var(--gray-500)', marginBottom: '32px', fontSize: '1.05rem' }}>
                            We know that visiting a new church can feel a bit daunting. Here is a breakdown of what happens on a Sunday morning to help you feel right at home.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', marginBottom: '48px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                <div style={{ display: 'flex', gap: '16px' }}>
                                    <div style={{ background: 'var(--primary-bg)', color: 'var(--primary)', padding: '12px', borderRadius: 'var(--radius-md)', height: 'fit-content' }}>
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '4px' }}>The Sunday Service</h3>
                                        <p style={{ fontSize: '0.95rem', color: 'var(--gray-500)' }}>
                                            Our services begin at <strong>10:30 AM</strong>. They usually last about an hour and a quarter. We start with notices, then a mix of modern and traditional worship songs.
                                        </p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '16px' }}>
                                    <div style={{ background: 'var(--primary-bg)', color: 'var(--primary)', padding: '12px', borderRadius: 'var(--radius-md)', height: 'fit-content' }}>
                                        <Heart size={24} />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '4px' }}>Worship Style & The Band</h3>
                                        <p style={{ fontSize: '0.95rem', color: 'var(--gray-500)' }}>
                                            We have a live music band consisting of piano, guitars, and singers. We sing a mix of classic hymns and contemporary worship material. Everything is projected onto a screen, so it is easy to follow.
                                        </p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '16px' }}>
                                    <div style={{ background: 'var(--primary-bg)', color: 'var(--primary)', padding: '12px', borderRadius: 'var(--radius-md)', height: 'fit-content' }}>
                                        <BookOpen size={24} />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '4px' }}>Children's Talk & Lighthouse Groups</h3>
                                        <p style={{ fontSize: '0.95rem', color: 'var(--gray-500)' }}>
                                            About 15 minutes into the service, there is a short "Children's Talk." Following this, the children go to their own groups, called <strong>Lighthouse</strong>, where they learn about the Bible in fun, creative ways.
                                        </p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '16px' }}>
                                    <div style={{ background: 'var(--primary-bg)', color: 'var(--primary)', padding: '12px', borderRadius: 'var(--radius-md)', height: 'fit-content' }}>
                                        <Users size={24} />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '4px' }}>Crèche & Families</h3>
                                        <p style={{ fontSize: '0.95rem', color: 'var(--gray-500)' }}>
                                            We have a crèche room for babies and toddlers under 3. Parents are welcome to sit in with their children; there are toys, changing mats, and a audio-link to the main service.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=600"
                                    alt="Refreshments, coffee and home bakes"
                                    style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', marginBottom: '16px' }}
                                />
                                <div style={{ padding: '16px', background: 'var(--light)', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-200)' }}>
                                    <h4 style={{ color: 'var(--primary)', marginBottom: '6px', fontSize: '1rem' }}>Refreshments & Fellowship</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--gray-500)' }}>
                                        After the service, please stay for a free cup of tea, freshly brewed filter coffee, biscuits, or home-baked treats. It is a wonderful chance to chat and make friends.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div style={{ backgroundColor: 'var(--primary-bg)', padding: '24px', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--accent)' }}>
                            <h3 style={{ color: 'var(--primary)', marginBottom: '8px', fontSize: '1.2rem' }}>Offering & Giving</h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--gray-500)' }}>
                                We do not pass a collection plate during the service. There is a box at the back of the chapel for cash/check donations, or you can find standing order information in our <a href="/running#giving" style={{ fontWeight: 'bold' }}>Giving section</a>. Visitors are our guests and should feel under no obligation to contribute.
                            </p>
                        </div>
                    </div>
                )}

                {/* LEADERSHIP TEAM TAB */}
                {activeTab === 'team' && (
                    <div id="team" className="fade-in">
                        <h2 style={{ marginBottom: '24px' }}>Meet Our Leadership Team</h2>
                        <p style={{ color: 'var(--gray-500)', marginBottom: '40px' }}>
                            Our church is led by our minister and a team of elected trustees (Deacons) who meet regularly to pray and steer the operations of the chapel.
                        </p>

                        <div className="grid" style={{ marginBottom: '48px' }}>
                            <div className="card" style={{ textAlign: 'center', padding: '24px' }}>
                                <img
                                    src={andyImg}
                                    alt="Andy"
                                    style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 16px', border: '3px solid var(--primary-light)' }}
                                />
                                <h3 style={{ color: 'var(--primary)', fontSize: '1.25rem' }}>Andy</h3>
                                <span style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase' }}>Minister</span>
                                <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)', marginTop: '12px' }}>
                                    Leading worship, teaching the bible, and providing pastoral support across South Molton.
                                </p>
                            </div>

                            <div className="card" style={{ textAlign: 'center', padding: '24px' }}>
                                <img
                                    src={richardImg}
                                    alt="Richard"
                                    style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 16px', border: '3px solid var(--primary-light)' }}
                                />
                                <h3 style={{ color: 'var(--primary)', fontSize: '1.25rem' }}>Richard</h3>
                                <span style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase' }}>Deacon / Treasurer</span>
                                <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)', marginTop: '12px' }}>
                                    Overseeing the financial health of the church, gift-aid management, and building budgets.
                                </p>
                            </div>

                            <div className="card" style={{ textAlign: 'center', padding: '24px' }}>
                                <img
                                    src={helenImg}
                                    alt="Helen"
                                    style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 16px', border: '3px solid var(--primary-light)' }}
                                />
                                <h3 style={{ color: 'var(--primary)', fontSize: '1.25rem' }}>Helen</h3>
                                <span style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase' }}>Deacon / Secretary</span>
                                <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)', marginTop: '12px' }}>
                                    Managing administration, church meetings, policies, and communications.
                                </p>
                            </div>

                            <div className="card" style={{ textAlign: 'center', padding: '24px' }}>
                                <img
                                    src={chiemeImg}
                                    alt="Chieme"
                                    style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 16px', border: '3px solid var(--primary-light)' }}
                                />
                                <h3 style={{ color: 'var(--primary)', fontSize: '1.25rem' }}>Chieme</h3>
                                <span style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase' }}>Deacon / Kids Helper</span>
                                <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)', marginTop: '12px' }}>
                                    Helping organize the Sunday school material, Sunflowers Toddlers and Friday Lighthouse activities.
                                </p>
                            </div>

                            <div className="card" style={{ textAlign: 'center', padding: '24px' }}>
                                <img
                                    src={christineImg}
                                    alt="Christine"
                                    style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 16px', border: '3px solid var(--primary-light)' }}
                                />
                                <h3 style={{ color: 'var(--primary)', fontSize: '1.25rem' }}>Christine</h3>
                                <span style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase' }}>Deacon / pastoral</span>
                                <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)', marginTop: '12px' }}>
                                    Coordinating community care, visiting the homebound, and managing prayer chains.
                                </p>
                            </div>
                        </div>

                        {/* Special Roles */}
                        <div style={{ background: 'var(--light)', padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-200)' }}>
                            <h3 style={{ color: 'var(--primary)', marginBottom: '20px' }}>Key Support Roles</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                                    <img
                                        src={janetImg}
                                        alt="Janet Lock"
                                        style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--primary-light)' }}
                                    />
                                    <div>
                                        <strong>Janet Lock</strong>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 'bold' }}>Designated Person for Safeguarding (DPS)</div>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--gray-500)' }}>Ensures our child protection and vulnerable adult protocols are fully adhered to.</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                                    <Heart className="info-banner-icon" size={40} />
                                    <div>
                                        <strong>Ros Todd</strong>
                                        <div style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 'bold' }}>Lead First Aider</div>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--gray-500)' }}>Oversees medical kits, first aid incident reporting and chapel risk analysis.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* OUR BELIEFS TAB */}
                {activeTab === 'beliefs' && (
                    <div id="beliefs" className="fade-in">
                        <h2 style={{ marginBottom: '16px' }}>What We Believe</h2>
                        <p style={{ color: 'var(--gray-500)', marginBottom: '32px' }}>
                            South Molton Baptist Church holds to traditional Christian beliefs, sharing the gospel of Jesus Christ. Below is an outline of our core mission and doctrine.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', textAlign: 'left' }}>
                            <div style={{ padding: '24px', background: 'var(--primary-bg)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--primary)' }}>
                                <h3 style={{ color: 'var(--primary)', marginBottom: '8px' }}>Our Mission Statement</h3>
                                <p style={{ fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--dark)' }}>
                                    "To know Christ and to make Him known; to represent His love within the South Molton community by words and deeds."
                                </p>
                            </div>

                            <div>
                                <h3 style={{ color: 'var(--primary)', marginBottom: '8px', fontSize: '1.25rem' }}>About God</h3>
                                <p style={{ color: 'var(--gray-500)' }}>
                                    We believe in one God, existing eternally in three persons: Father, Son, and Holy Spirit. We believe God created the heavens and the earth out of love and desires an intimate relationship with all humanity.
                                </p>
                            </div>

                            <div>
                                <h3 style={{ color: 'var(--primary)', marginBottom: '8px', fontSize: '1.25rem' }}>About Mission</h3>
                                <p style={{ color: 'var(--gray-500)' }}>
                                    We believe that the church is called to engage in God's mission. This involves telling others the good news of salvation through Jesus, caring for the poor and marginalized, and seeking justice and peace in the world.
                                </p>
                            </div>

                            <div>
                                <h3 style={{ color: 'var(--primary)', marginBottom: '8px', fontSize: '1.25rem' }}>About the Bible</h3>
                                <p style={{ color: 'var(--gray-500)' }}>
                                    We believe that the Bible is the inspired word of God. It is our final authority in all matters of Christian faith, life, and conduct. We encourage all members to read, study, and apply its teachings daily.
                                </p>
                            </div>

                            <div>
                                <h3 style={{ color: 'var(--primary)', marginBottom: '8px', fontSize: '1.25rem' }}>About Baptism</h3>
                                <p style={{ color: 'var(--gray-500)' }}>
                                    As Baptists, we practice "Believers' Baptism." We believe that baptism by full immersion in water is a public declaration of an individual's personal faith in Jesus Christ, representing their dying to their old life and rising to walk in newness of life.
                                </p>
                            </div>

                            <div>
                                <h3 style={{ color: 'var(--primary)', marginBottom: '8px', fontSize: '1.25rem' }}>About the Church</h3>
                                <p style={{ color: 'var(--gray-500)' }}>
                                    We believe that the local church is a gathering of believers who have covenanted together. Under the guidance of the Holy Spirit, the members in meeting have the ultimate responsibility for discerning God's will for the church's life and ministry.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* HISTORY TAB */}
                {activeTab === 'history' && (
                    <div id="history" className="fade-in">
                        <h2 style={{ marginBottom: '16px' }}>Our History</h2>
                        <p style={{ color: 'var(--gray-500)', marginBottom: '32px' }}>
                            South Molton Baptist Church has a rich history of serving our local community for over a century. Here are some of our key milestones.
                        </p>

                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-year">1843</div>
                                <div className="timeline-content">
                                    <h3 style={{ color: 'var(--primary)', fontSize: '1.15rem', marginBottom: '8px' }}>Early Gatherings</h3>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)' }}>
                                        A small group of Baptists began meeting in private rooms in South Molton to pray and study the Bible together, desiring to establish a permanent Baptist witness in the town.
                                    </p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-year">1895</div>
                                <div className="timeline-content">
                                    <h3 style={{ color: 'var(--primary)', fontSize: '1.15rem', marginBottom: '8px' }}>Chapel Construction</h3>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)' }}>
                                        With funds raised by members and the assistance of the wider association, our current chapel buildings on New Road were constructed and dedicated for public worship.
                                    </p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-year">1970s</div>
                                <div className="timeline-content">
                                    <h3 style={{ color: 'var(--primary)', fontSize: '1.15rem', marginBottom: '8px' }}>Building Extensions</h3>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)' }}>
                                        Extensions were added to include the kitchen, toilets, and the schoolroom (which now houses the Lighthouse children's group), expanding our ability to host youth works and mid-week clubs.
                                    </p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-year">2010</div>
                                <div className="timeline-content">
                                    <h3 style={{ color: 'var(--primary)', fontSize: '1.15rem', marginBottom: '8px' }}>Renovations & Modernisation</h3>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)' }}>
                                        Major renovation works were undertaken to modernize the interior, replacing static pews with comfortable, flexible chairs, introducing central heating, and adding accessibility ramps.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* ASSOCIATIONS TAB */}
                {activeTab === 'associations' && (
                    <div id="associations" className="fade-in" style={{ textAlign: 'left' }}>
                        <h2 style={{ marginBottom: '20px', color: 'var(--primary)' }}>Baptists Together & South West Baptist Association</h2>

                        <p style={{ color: 'var(--gray-500)', marginBottom: '24px', fontSize: '1.05rem', lineHeight: 1.7 }}>
                            South Molton Baptist Church is a self-governing, independent church. We operate independently in many ways, including choosing our minister, managing our finances, and running our buildings. However, we believe that we are stronger together. We are part of a wider family of churches locally and nationally.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '40px' }}>
                            <div style={{ background: 'var(--light)', padding: '28px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-200)' }}>
                                <h3 style={{ color: 'var(--primary)', marginBottom: '12px', fontSize: '1.25rem' }}>Baptists Together</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--gray-500)', marginBottom: '16px' }}>
                                    Formerly known as the Baptist Union of Great Britain (BUGB). They hold our buildings in trust, offer legal advice, and help oversee key structural governance. This connection links us to over 2,000 Baptist churches in the UK.
                                </p>
                                <a
                                    href="https://www.baptist.org.uk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary"
                                    style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                                >
                                    Visit Baptists Together website
                                </a>
                            </div>

                            <div style={{ background: 'var(--light)', padding: '28px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-200)' }}>
                                <h3 style={{ color: 'var(--primary)', marginBottom: '12px', fontSize: '1.25rem' }}>South West Baptist Association (SWBA)</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--gray-500)', marginBottom: '16px' }}>
                                    The regional association that supports our minister, facilitates church-to-church networks, and provides essential training and back-up in safeguarding, children's and youth work, preparation for ministry, and mission support.
                                </p>
                                <a
                                    href="https://www.swbaptists.org.uk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary"
                                    style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                                >
                                    Visit SWBA website
                                </a>
                            </div>
                        </div>

                        <div style={{ background: 'var(--primary-bg)', padding: '24px', borderRadius: 'var(--radius-md)' }}>
                            <h4 style={{ color: 'var(--primary)', marginBottom: '8px' }}>Need help finding us?</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--gray-500)' }}>
                                You can view our location details, parking advice, and interactive maps in our <a href="/contact" style={{ fontWeight: 'bold', color: 'var(--primary)' }}>Contact page</a>.
                            </p>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}
