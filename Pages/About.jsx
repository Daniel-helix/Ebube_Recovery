import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Heart, BookOpen, Clock, Users, ArrowRight, ShieldCheck, HelpCircle, Eye, X, ZoomIn, FileText, Calendar, Sparkles } from 'lucide-react';
import andyImg from '../assets/andy.jpeg';
import richardImg from '../assets/richard.jpeg';
import helenImg from '../assets/helen.jpeg';
import chiemeImg from '../assets/chieme.jpeg';
import christineImg from '../assets/christine.jpeg';
import janetImg from '../assets/janet.jpeg';

// Historical Archives & Photos
import historyArchive1988 from '../assets/history_archive_1988.jpg';
import historyArchive1990 from '../assets/history_archive_1990.jpg';
import historyArchive1992 from '../assets/history_archive_1992.jpg';
import history1988Before from '../assets/history_1988_interior_before.jpg';
import history1988Wip from '../assets/history_1988_work_in_progress.jpg';
import history1990Partition from '../assets/history_1990_partition_work.jpg';
import history1990Completed from '../assets/history_1990_completed_interior.jpg';
import history1992BackRoom from '../assets/history_1992_back_room.jpg';
import history1993UpperRoom from '../assets/history_1993_upper_room.jpg';
import history1992Playground from '../assets/history_1992_infants_playground.jpg';
import fellowshipTeaCoffee from '../assets/fellowship_tea_coffee.jpg';

export default function About() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('expect');
    const [lightboxItem, setLightboxItem] = useState(null);

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
                                    src={fellowshipTeaCoffee}
                                    alt="Church members serving refreshments and tea at the kitchen hatch"
                                    style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', marginBottom: '16px', width: '100%', height: '260px', objectFit: 'cover' }}
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
                                <p style={{ fontStyle: 'italic', fontSize: '1.15rem', color: 'var(--dark)', fontWeight: 500, lineHeight: 1.6 }}>
                                    "South Molton Baptist Church is a welcoming community with Jesus at the centre; committed to Him, to each other and to sharing His good news."
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
                        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 36px' }}>
                            <span style={{
                                backgroundColor: 'var(--primary-bg)',
                                color: 'var(--primary)',
                                padding: '4px 14px',
                                borderRadius: 'var(--radius-full)',
                                fontSize: '0.8rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                marginBottom: '12px',
                                display: 'inline-block'
                            }}>
                                Our Heritage & Journey of Faith
                            </span>
                            <h2 style={{ marginBottom: '12px', fontSize: '2.2rem' }}>Our Church History</h2>
                            <p style={{ color: 'var(--gray-500)', fontSize: '1.05rem', lineHeight: 1.6 }}>
                                South Molton Baptist Church has served the community of South Molton for over a century and a half. Discover key milestones in our journey, illustrated with authentic archival photographs and records documenting the transformation of our chapel.
                            </p>
                        </div>

                        {/* Historical Timeline */}
                        <div className="timeline">
                            {/* 1843 */}
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-year">1843</div>
                                <div className="timeline-content">
                                    <span className="timeline-badge">Foundations</span>
                                    <h3 style={{ color: 'var(--primary)', fontSize: '1.2rem', marginBottom: '8px' }}>Early Gatherings in South Molton</h3>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--gray-500)', lineHeight: 1.6 }}>
                                        A small, faithful gathering of Baptists began meeting in private rooms in South Molton to pray and study the Bible together, desiring to establish a permanent Baptist witness in the town.
                                    </p>
                                </div>
                            </div>

                            {/* 1895 */}
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-year">1895</div>
                                <div className="timeline-content">
                                    <span className="timeline-badge">Chapel Dedication</span>
                                    <h3 style={{ color: 'var(--primary)', fontSize: '1.2rem', marginBottom: '8px' }}>Chapel Construction on New Road</h3>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--gray-500)', lineHeight: 1.6 }}>
                                        With funds raised by members and the assistance of the wider association, our current chapel buildings on New Road were constructed and dedicated for public worship.
                                    </p>
                                </div>
                            </div>

                            {/* 1970s */}
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-year">1970s</div>
                                <div className="timeline-content">
                                    <span className="timeline-badge">Community Expansion</span>
                                    <h3 style={{ color: 'var(--primary)', fontSize: '1.2rem', marginBottom: '8px' }}>Building Extensions & Youth Rooms</h3>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--gray-500)', lineHeight: 1.6 }}>
                                        Extensions were added to include the kitchen, toilets, and the schoolroom (which now houses the Lighthouse children's group), expanding our ability to host youth works and mid-week clubs.
                                    </p>
                                </div>
                            </div>

                            {/* Easter 1988 */}
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-year">Easter 1988</div>
                                <div className="timeline-content">
                                    <span className="timeline-badge">Historic Transformation</span>
                                    <h3 style={{ color: 'var(--primary)', fontSize: '1.2rem', marginBottom: '8px' }}>Removal of Pews & Sanctuary Redecoration</h3>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--gray-500)', lineHeight: 1.6 }}>
                                        Easter 1988 marked the beginning of a decisive and visionary modernisation. The original fixed wooden pews were dismantled and removed, opening up the sanctuary into a flexible space suitable for modern worship, drama, and community fellowship.
                                    </p>

                                    <div className="timeline-images">
                                        <div
                                            className="timeline-img-card"
                                            onClick={() => setLightboxItem({
                                                title: 'Easter 1988: Interior Before Removal of Pews',
                                                description: 'Original archive photograph from Easter 1988 showing the Victorian pews and original sanctuary layout before redecoration.',
                                                url: history1988Before
                                            })}
                                        >
                                            <div className="img-container">
                                                <img src={history1988Before} alt="Easter 1988 Interior before removal of pews" />
                                                <div className="img-hover-overlay">
                                                    <ZoomIn size={18} /> Click to expand
                                                </div>
                                            </div>
                                            <div className="caption">
                                                <strong>Easter 1988:</strong> Interior of church before removal of pews and redecoration.
                                            </div>
                                        </div>

                                        <div
                                            className="timeline-img-card"
                                            onClick={() => setLightboxItem({
                                                title: 'Work In Progress: Sanctuary Refurbishment',
                                                description: 'Sanctuary renovation underway, viewed through the wooden doorway frame with ladder and exposed stone wall.',
                                                url: history1988Wip
                                            })}
                                        >
                                            <div className="img-container">
                                                <img src={history1988Wip} alt="Sanctuary Work In Progress" />
                                                <div className="img-hover-overlay">
                                                    <ZoomIn size={18} /> Click to expand
                                                </div>
                                            </div>
                                            <div className="caption">
                                                <strong>Work in Progress:</strong> Renovation underway inside the sanctuary.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 1990 */}
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-year">1990</div>
                                <div className="timeline-content">
                                    <span className="timeline-badge">Modernisation Completed</span>
                                    <h3 style={{ color: 'var(--primary)', fontSize: '1.2rem', marginBottom: '8px' }}>Sanctuary Refurbishment & Reopening</h3>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--gray-500)', lineHeight: 1.6 }}>
                                        Completed in 1990, the sanctuary re-opened with a beautifully refurbished interior: flexible modern seating replacing the heavy pews, fresh wall finishes, an arched alcove with celebratory scripture banner, and improved heating and carpet.
                                    </p>

                                    <div className="timeline-images">
                                        <div
                                            className="timeline-img-card"
                                            onClick={() => setLightboxItem({
                                                title: 'Sanctuary Partition Works in Progress',
                                                description: 'Construction of the new glazed wooden screen partition and floor installation inside the main sanctuary.',
                                                url: history1990Partition
                                            })}
                                        >
                                            <div className="img-container">
                                                <img src={history1990Partition} alt="Sanctuary Partition Work" />
                                                <div className="img-hover-overlay">
                                                    <ZoomIn size={18} /> Click to expand
                                                </div>
                                            </div>
                                            <div className="caption">
                                                <strong>Sanctuary Alterations:</strong> Installation of the wooden partition divider and floor.
                                            </div>
                                        </div>

                                        <div
                                            className="timeline-img-card"
                                            onClick={() => setLightboxItem({
                                                title: 'Completed In 1990: Refurbished Sanctuary',
                                                description: 'The refurbished main sanctuary in 1990, featuring comfortable modern chairs, redecorated chancel arch, and celebration banner.',
                                                url: history1990Completed
                                            })}
                                        >
                                            <div className="img-container">
                                                <img src={history1990Completed} alt="Sanctuary Completed In 1990" />
                                                <div className="img-hover-overlay">
                                                    <ZoomIn size={18} /> Click to expand
                                                </div>
                                            </div>
                                            <div className="caption">
                                                <strong>Completed In 1990:</strong> Refurbished sanctuary with flexible chairs and wall banner.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 1992 */}
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-year">1992</div>
                                <div className="timeline-content">
                                    <span className="timeline-badge">Fellowship & Community</span>
                                    <h3 style={{ color: 'var(--primary)', fontSize: '1.2rem', marginBottom: '8px' }}>Sanctuary Alterations & Move to Back Room</h3>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--gray-500)', lineHeight: 1.6 }}>
                                        Further building improvements took place in 1992. While the main sanctuary was being altered, Sunday services and mid-week prayer meetings moved temporarily into the back hall, maintaining uninterrupted worship and an intimate family atmosphere.
                                    </p>

                                    <div className="timeline-images">
                                        <div
                                            className="timeline-img-card"
                                            onClick={() => setLightboxItem({
                                                title: '1992: Services in the Back Room',
                                                description: 'Church moves to the back room whilst the main sanctuary is altered.',
                                                url: history1992BackRoom
                                            })}
                                        >
                                            <div className="img-container">
                                                <img src={history1992BackRoom} alt="1992 Church in the back room" />
                                                <div className="img-hover-overlay">
                                                    <ZoomIn size={18} /> Click to expand
                                                </div>
                                            </div>
                                            <div className="caption">
                                                <strong>1992:</strong> Church moves to the back room whilst main sanctuary is altered.
                                            </div>
                                        </div>

                                        <div
                                            className="timeline-img-card"
                                            onClick={() => setLightboxItem({
                                                title: '1992: Chapel from Infants School Playground',
                                                description: 'View of the South Molton Baptist Church building and courtyard from the Infants School Playground in 1992.',
                                                url: history1992Playground
                                            })}
                                        >
                                            <div className="img-container">
                                                <img src={history1992Playground} alt="1992 Church from Infants School Playground" />
                                                <div className="img-hover-overlay">
                                                    <ZoomIn size={18} /> Click to expand
                                                </div>
                                            </div>
                                            <div className="caption">
                                                <strong>1992:</strong> Church exterior as viewed from the Infants School Playground.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 1993 */}
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-year">1993</div>
                                <div className="timeline-content">
                                    <span className="timeline-badge">Hospitality</span>
                                    <h3 style={{ color: 'var(--primary)', fontSize: '1.2rem', marginBottom: '8px' }}>Fellowship in the Upper Room</h3>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--gray-500)', lineHeight: 1.6 }}>
                                        With the completion of the Upper Room, church members gathered for coffee, Bible study, and fellowship. Archival photography captures members sharing refreshments together, an enduring tradition that continues after every Sunday service today.
                                    </p>

                                    <div className="timeline-images" style={{ gridTemplateColumns: 'minmax(280px, 450px)' }}>
                                        <div
                                            className="timeline-img-card"
                                            onClick={() => setLightboxItem({
                                                title: '1993: Coffee in the Upper Room',
                                                description: 'Church members enjoying coffee together in the Upper Room in 1993. Left to Right: Diana Barker, David Barker, Julie Kingett, Joan + Alf.',
                                                url: history1993UpperRoom
                                            })}
                                        >
                                            <div className="img-container" style={{ height: '220px' }}>
                                                <img src={history1993UpperRoom} alt="1993 Coffee in the Upper Room" />
                                                <div className="img-hover-overlay">
                                                    <ZoomIn size={18} /> Click to expand
                                                </div>
                                            </div>
                                            <div className="caption">
                                                <strong>1993 Coffee in the Upper Room:</strong> (L to R) Diana Barker, David Barker, Julie Kingett, Joan + Alf.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Present Day */}
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-year">Today</div>
                                <div className="timeline-content">
                                    <span className="timeline-badge">A Living Legacy</span>
                                    <h3 style={{ color: 'var(--primary)', fontSize: '1.2rem', marginBottom: '8px' }}>A Welcoming Community with Jesus at the Centre</h3>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--gray-500)', lineHeight: 1.6 }}>
                                        Today, South Molton Baptist Church stands firmly on this rich heritage. With ongoing investments into audio-visual equipment, accessibility ramps, and warm hospitality, we remain committed to Christ, to each other, and to sharing His love throughout South Molton.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Archival Documents Box */}
                        <div className="history-archive-box">
                            <div className="history-archive-header">
                                <div>
                                    <h3 style={{ color: 'var(--primary)', fontSize: '1.4rem', marginBottom: '4px' }}>
                                        Authentic Historical Archives & Scanned Records
                                    </h3>
                                    <p style={{ color: 'var(--gray-500)', fontSize: '0.95rem', margin: 0 }}>
                                        High-resolution scans of the original historical photographic records and handwritten church notes. Click any document to inspect in full detail.
                                    </p>
                                </div>
                                <div>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600, backgroundColor: 'var(--white)', padding: '6px 14px', borderRadius: 'var(--radius-full)', border: '1px solid var(--secondary-light)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                        <FileText size={16} /> 3 Original Archive Sheets
                                    </span>
                                </div>
                            </div>

                            <div className="history-archive-grid">
                                {/* Archive Sheet 1 */}
                                <div
                                    className="archive-card"
                                    onClick={() => setLightboxItem({
                                        title: 'Church Archive Record: Easter 1988 Sanctuary Renovation',
                                        description: 'Original historical archive page with handwritten annotations: "EASTER 1988. INTERIOR OF CHURCH BEFORE REMOVAL OF PEWS AND REDECORATION" and "WORK IN PROGRESS".',
                                        url: historyArchive1988
                                    })}
                                >
                                    <div className="archive-thumb-wrap">
                                        <img src={historyArchive1988} alt="Easter 1988 Church Archive Record" />
                                        <div className="archive-overlay">
                                            <ZoomIn size={28} />
                                            <span>Inspect Full Document</span>
                                        </div>
                                    </div>
                                    <div className="archive-card-body">
                                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '4px' }}>
                                            Archive Record &bull; Easter 1988
                                        </span>
                                        <h4 style={{ color: 'var(--primary)', fontSize: '1.05rem', marginBottom: '6px' }}>
                                            Pews Removal & Work in Progress
                                        </h4>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--gray-500)', lineHeight: 1.4, margin: 0 }}>
                                            Original sheet showing the sanctuary before removal of the pews alongside the inner doorway construction and ladders.
                                        </p>
                                    </div>
                                </div>

                                {/* Archive Sheet 2 */}
                                <div
                                    className="archive-card"
                                    onClick={() => setLightboxItem({
                                        title: 'Church Archive Record: 1990 Sanctuary Completion',
                                        description: 'Original historical archive page documenting the partition wall construction and the redecorated sanctuary marked "Completed In 1990".',
                                        url: historyArchive1990
                                    })}
                                >
                                    <div className="archive-thumb-wrap">
                                        <img src={historyArchive1990} alt="1990 Church Archive Record" />
                                        <div className="archive-overlay">
                                            <ZoomIn size={28} />
                                            <span>Inspect Full Document</span>
                                        </div>
                                    </div>
                                    <div className="archive-card-body">
                                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '4px' }}>
                                            Archive Record &bull; 1990
                                        </span>
                                        <h4 style={{ color: 'var(--primary)', fontSize: '1.05rem', marginBottom: '6px' }}>
                                            Sanctuary Completed in 1990
                                        </h4>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--gray-500)', lineHeight: 1.4, margin: 0 }}>
                                            Original sheet showing the wood partition installation and the finished sanctuary with comfortable chairs and celebration banner.
                                        </p>
                                    </div>
                                </div>

                                {/* Archive Sheet 3 */}
                                <div
                                    className="archive-card"
                                    onClick={() => setLightboxItem({
                                        title: 'Church Archive Record: 1992–1993 Sanctuary Alterations & Upper Room',
                                        description: 'Original historical archive page with handwritten records: "1992 Church moves to the back room whilst the main sanctuary is altered", "1993 Coffee in the Upper Room", and "1992 Church from Infants School Playground".',
                                        url: historyArchive1992
                                    })}
                                >
                                    <div className="archive-thumb-wrap">
                                        <img src={historyArchive1992} alt="1992-1993 Church Archive Record" />
                                        <div className="archive-overlay">
                                            <ZoomIn size={28} />
                                            <span>Inspect Full Document</span>
                                        </div>
                                    </div>
                                    <div className="archive-card-body">
                                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '4px' }}>
                                            Archive Record &bull; 1992–1993
                                        </span>
                                        <h4 style={{ color: 'var(--primary)', fontSize: '1.05rem', marginBottom: '6px' }}>
                                            Back Room, Upper Room & Grounds
                                        </h4>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--gray-500)', lineHeight: 1.4, margin: 0 }}>
                                            Original sheet recording the 1992 back room services, 1993 Upper Room coffee with named members, and playground view.
                                        </p>
                                    </div>
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

            {/* History Lightbox Modal */}
            {lightboxItem && (
                <div className="lightbox" onClick={() => setLightboxItem(null)}>
                    <button
                        className="lightbox-close"
                        onClick={() => setLightboxItem(null)}
                        aria-label="Close image preview"
                    >
                        <X size={32} />
                    </button>

                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()} style={{ textAlign: 'center' }}>
                        <img
                            src={lightboxItem.url}
                            alt={lightboxItem.title}
                            className="lightbox-img"
                        />
                        <div className="lightbox-caption" style={{ maxWidth: '750px', margin: '16px auto 0' }}>
                            <h3 style={{ color: 'var(--white)', fontSize: '1.25rem', marginBottom: '6px' }}>{lightboxItem.title}</h3>
                            <p style={{ fontSize: '0.95rem', color: '#c8d2c9', lineHeight: 1.5 }}>
                                {lightboxItem.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
