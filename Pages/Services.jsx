import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Calendar, Heart, BookOpen, Coffee, Gift, HelpCircle } from 'lucide-react';
import sundayService from '../assets/sunday_service.jpg';

export default function Services() {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash.replace('#', '');
        if (hash) {
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div className="container section-padding fade-in">
            <div className="section-header">
                <h1 className="section-title">Sunday Services & Worship</h1>
                <p className="section-subtitle">Information about our weekly gatherings, children's ministries, and practical church life.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>

                {/* SUNDAY SERVICES */}
                <section id="sunday" style={{ scrollMarginTop: '100px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', alignItems: 'center' }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                <div style={{ backgroundColor: 'var(--primary-bg)', color: 'var(--primary)', padding: '10px', borderRadius: 'var(--radius-sm)' }}>
                                    <Calendar size={28} />
                                </div>
                                <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)' }}>Our Weekly Morning Service</h2>
                            </div>
                            <span style={{ display: 'inline-block', backgroundColor: 'var(--accent)', color: 'var(--white)', padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 700, marginBottom: '16px' }}>
                                SUNDAYS AT 10:30 AM
                            </span>
                            <p style={{ color: 'var(--gray-500)', marginBottom: '16px', fontSize: '1rem' }}>
                                We gather every Sunday morning in the chapel to sing, pray, read scripture, and listen to a message based on the Bible. The service is structured to be informal, friendly, and accessible to people of all backgrounds.
                            </p>
                            <p style={{ color: 'var(--gray-500)', marginBottom: '16px' }}>
                                A typical service starts with notices and family news, followed by opening worship. We value interactive ministry, which is why there is always a children's spot before they go to their groups, and a time for sharing answers to prayer.
                            </p>
                            <div style={{ backgroundColor: 'var(--light)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-200)' }}>
                                <strong>Duration:</strong> Approximately 75 minutes. Dress code is completely casual—just come as you are.
                            </div>
                        </div>
                        <div>
                            <img
                                src={sundayService}
                                alt="Worship band leading Sunday Service"
                                style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                </section>

                <hr style={{ border: 'none', borderTop: '1px solid var(--gray-200)' }} />

                {/* WORSHIP BAND & REFRESHMENTS */}
                <section id="refreshments" style={{ scrollMarginTop: '100px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '40px', alignItems: 'center' }}>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=600"
                                alt="Coffee, tea and cakes after church"
                                style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}
                            />
                        </div>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                <div style={{ backgroundColor: 'var(--primary-bg)', color: 'var(--primary)', padding: '10px', borderRadius: 'var(--radius-sm)' }}>
                                    <Coffee size={28} />
                                </div>
                                <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)' }}>Worship & Refreshments</h2>
                            </div>
                            <p style={{ color: 'var(--gray-500)', marginBottom: '16px', fontSize: '1rem' }}>
                                <strong>Music & Band:</strong> We are blessed with a talented band of musicians who lead us in praise. We use a variety of worship materials, blending contemporary Christian songs (such as Getty Music, Townend, and Hillsong) with rich, classic hymns.
                            </p>
                            <p style={{ color: 'var(--gray-500)', marginBottom: '16px' }}>
                                <strong>Fellowship Café:</strong> Immediately following the benediction, everyone is invited to the rear space for drinks. We serve freshly ground filter coffee, tea, squash, and gluten-free/vegan biscuits or homemade cakes. It's a wonderful space to chat with old friends and make new ones.
                            </p>
                            <div style={{ backgroundColor: 'var(--primary-bg)', padding: '16px', borderRadius: 'var(--radius-md)', color: 'var(--primary)', fontWeight: 600 }}>
                                We love welcoming visitors! Don't run off after the service—let us buy you a coffee and say hello.
                            </div>
                        </div>
                    </div>
                </section>

                <hr style={{ border: 'none', borderTop: '1px solid var(--gray-200)' }} />

                {/* CHILDREN'S WORK */}
                <section id="children" style={{ scrollMarginTop: '100px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', alignItems: 'center' }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                <div style={{ backgroundColor: 'var(--primary-bg)', color: 'var(--primary)', padding: '10px', borderRadius: 'var(--radius-sm)' }}>
                                    <BookOpen size={28} />
                                </div>
                                <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)' }}>Sunday Children's Groups</h2>
                            </div>
                            <p style={{ color: 'var(--gray-500)', marginBottom: '16px', fontSize: '1rem' }}>
                                We are a multi-generational family and prioritize our children. We have two key groups running during our Sunday services:
                            </p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'var(--gray-500)', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <li><strong>Lighthouse:</strong> For children aged 3 to 11. They participate in crafts, sensory play, games, and dynamic lessons exploring the teachings of the Bible.</li>
                                <li><strong>Crèche:</strong> For babies and toddlers under 3. Fully equipped with toys, playmats, changing facilities, and sound connectivity to the main chapel so parents won't miss out.</li>
                            </ul>
                            <p style={{ color: 'var(--gray-500)', marginBottom: '16px' }}>
                                Children join the main congregation for the first 15 minutes of the service and are called forward for a fun "Children's Talk" before heading out to their groups.
                            </p>
                            <div style={{ backgroundColor: 'var(--light)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-200)' }}>
                                <strong>Safety:</strong> We have a robust Safeguarding policy. All leaders are fully vetted, DBS-cleared, and child-safe trained. Learn more on our <Link to="/running#policies" style={{ fontWeight: 'bold' }}>Policies page</Link>.
                            </div>
                        </div>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=600"
                                alt="Happy children playing with toys"
                                style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}
                            />
                        </div>
                    </div>
                </section>

                <hr style={{ border: 'none', borderTop: '1px solid var(--gray-200)' }} />

                {/* GIVING & OFFERING */}
                <section id="giving" style={{ scrollMarginTop: '100px', marginBottom: '24px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '40px', alignItems: 'center' }}>
                        <div>
                            <div style={{ backgroundColor: 'var(--primary-bg)', padding: '32px', borderRadius: 'var(--radius-lg)', border: '2px dashed var(--primary)', textAlign: 'center' }}>
                                <Gift size={48} style={{ color: 'var(--primary)', marginBottom: '16px' }} />
                                <h3 style={{ color: 'var(--primary)', marginBottom: '12px' }}>Standing Orders & Forms</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)', marginBottom: '20px' }}>
                                    If you wish to set up a regular standing order or request Gift Aid declaration forms, please visit our dedicated running page.
                                </p>
                                <Link to="/running#giving" className="btn btn-primary" style={{ fontSize: '0.9rem' }}>Giving Instructions</Link>
                            </div>
                        </div>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                <div style={{ backgroundColor: 'var(--primary-bg)', color: 'var(--primary)', padding: '10px', borderRadius: 'var(--radius-sm)' }}>
                                    <Gift size={28} />
                                </div>
                                <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)' }}>Offering & Giving</h2>
                            </div>
                            <p style={{ color: 'var(--gray-500)', marginBottom: '16px', fontSize: '1rem' }}>
                                We believe that giving is a part of our worship and gratitude to God. The money raised is used to fund our minister, keep the chapel heated and operating, support local children's initiatives, and fund world mission organizations.
                            </p>
                            <p style={{ color: 'var(--gray-500)', marginBottom: '16px' }}>
                                There is <strong>no pressure</strong> to give. We do not pass an offering plate during the service. If you would like to make a contribution, there is a secure wooden donation box placed near the main double-doors at the rear of the chapel.
                            </p>
                            <div style={{ backgroundColor: 'var(--light)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-200)' }}>
                                <strong>Gift Aid:</strong> If you are a UK taxpayer, filling out a Gift Aid declaration form increases the value of your donation by 25% at no extra cost to you.
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
