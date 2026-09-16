import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Heart } from 'lucide-react';

export default function Contact() {
    const [contactSubmitted, setContactSubmitted] = useState(false);
    const [prayerSubmitted, setPrayerSubmitted] = useState(false);

    const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', subject: 'general', msg: '' });
    const [prayerForm, setPrayerForm] = useState({ name: '', request: '', confidentiality: 'chain' });

    const handleContactSubmit = (e) => {
        e.preventDefault();
        setContactSubmitted(true);
    };

    const handlePrayerSubmit = (e) => {
        e.preventDefault();
        setPrayerSubmitted(true);
    };

    return (
        <div className="container section-padding fade-in">
            <div className="section-header">
                <h1 className="section-title">Contact & Find Us</h1>
                <p className="section-subtitle">Get in touch, submit a prayer request, or plan your journey to our chapel.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'flex-start', marginBottom: '64px' }}>

                {/* CONTACT FORM */}
                <div style={{ background: 'var(--white)', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-lg)', padding: '32px', boxShadow: 'var(--shadow-md)' }}>
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '16px' }}>Send Us a Message</h2>
                    <p style={{ color: 'var(--gray-500)', marginBottom: '24px', fontSize: '0.9rem' }}>
                        Have a question about services, building hire, or activities? Drop us a line and we will reply as soon as possible.
                    </p>

                    {contactSubmitted ? (
                        <div style={{ textAlign: 'center', padding: '40px 0' }}>
                            <Send size={48} style={{ color: 'var(--primary)', marginBottom: '16px' }} />
                            <h3 style={{ color: 'var(--primary)', marginBottom: '8px' }}>Message Received!</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)' }}>
                                Thank you for contacting us. We will review your message and respond shortly.
                            </p>
                            <button className="btn btn-secondary" style={{ marginTop: '24px', fontSize: '0.85rem' }} onClick={() => {
                                setContactSubmitted(false);
                                setContactForm({ name: '', email: '', phone: '', subject: 'general', msg: '' });
                            }}>
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleContactSubmit}>
                            <div className="form-group">
                                <label className="form-label">Full Name *</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    required
                                    value={contactForm.name}
                                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">Email Address *</label>
                                    <input
                                        type="email"
                                        className="form-input"
                                        required
                                        value={contactForm.email}
                                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="form-input"
                                        value={contactForm.phone}
                                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Subject *</label>
                                <select
                                    className="form-select"
                                    value={contactForm.subject}
                                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                                >
                                    <option value="general">General Enquiry</option>
                                    <option value="hire">Building Hire</option>
                                    <option value="youth">Children / Youth Work</option>
                                    <option value="pastoral">Pastoral Support / Andy</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Your Message *</label>
                                <textarea
                                    className="form-textarea"
                                    rows="4"
                                    required
                                    value={contactForm.msg}
                                    onChange={(e) => setContactForm({ ...contactForm, msg: e.target.value })}
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                Send Message
                            </button>
                        </form>
                    )}
                </div>

                {/* PRAYER REQUEST FORM & INFO */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

                    {/* Prayer requests */}
                    <div style={{ background: 'var(--primary-bg)', border: '2px dashed var(--primary)', borderRadius: 'var(--radius-lg)', padding: '32px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                            <Heart style={{ color: 'var(--primary)' }} />
                            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)' }}>Prayer Requests</h2>
                        </div>
                        <p style={{ color: 'var(--gray-500)', marginBottom: '20px', fontSize: '0.9rem', lineHeight: 1.6 }}>
                            We believe in the power of prayer. If you are going through a difficult time, need guidance, or want to give thanks, we would love to pray for you.
                        </p>

                        {prayerSubmitted ? (
                            <div style={{ textAlign: 'center', padding: '24px 0', background: 'var(--white)', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-200)' }}>
                                <Heart size={40} style={{ color: 'var(--primary)', marginBottom: '12px' }} />
                                <h4 style={{ color: 'var(--primary)', marginBottom: '6px' }}>Request Logged</h4>
                                <p style={{ fontSize: '0.85rem', color: 'var(--gray-500)', padding: '0 16px' }}>
                                    Your request has been sent. Our prayer team will lift you up in prayer. God bless you.
                                </p>
                                <button className="btn btn-secondary" style={{ marginTop: '16px', padding: '6px 16px', fontSize: '0.8rem' }} onClick={() => {
                                    setPrayerSubmitted(false);
                                    setPrayerForm({ name: '', request: '', confidentiality: 'chain' });
                                }}>
                                    Submit another request
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handlePrayerSubmit}>
                                <div className="form-group">
                                    <label className="form-label">Your Name (optional)</label>
                                    <input
                                        type="text"
                                        className="form-input"
                                        placeholder="Anonymous"
                                        value={prayerForm.name}
                                        onChange={(e) => setPrayerForm({ ...prayerForm, name: e.target.value })}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Prayer Request Details *</label>
                                    <textarea
                                        className="form-textarea"
                                        rows="3"
                                        required
                                        placeholder="What would you like us to pray for?"
                                        value={prayerForm.request}
                                        onChange={(e) => setPrayerForm({ ...prayerForm, request: e.target.value })}
                                    ></textarea>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Confidentiality *</label>
                                    <select
                                        className="form-select"
                                        value={prayerForm.confidentiality}
                                        onChange={(e) => setPrayerForm({ ...prayerForm, confidentiality: e.target.value })}
                                    >
                                        <option value="chain">Share with Church Prayer Chain (Confidential)</option>
                                        <option value="minister">Share Privately with Minister Andy Only</option>
                                        <option value="public">Share in Sunday Service Prayers (Public)</option>
                                    </select>
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ width: '100%', backgroundColor: 'var(--primary)' }}>
                                    Submit Prayer Request
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Quick contact details */}
                    <div style={{ background: 'var(--white)', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-lg)', padding: '32px', boxShadow: 'var(--shadow-md)' }}>
                        <h3 style={{ color: 'var(--primary)', marginBottom: '16px' }}>Office Contact Info</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div style={{ display: 'flex', gap: '12px' }}>
                                <MapPin className="download-icon" size={20} />
                                <div>
                                    <strong>Address</strong>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--gray-500)' }}>
                                        South Molton Baptist Church<br />
                                        28 New Road, South Molton, Devon, EX36 4BH
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '12px' }}>
                                <Phone className="download-icon" size={20} />
                                <div>
                                    <strong>Phone</strong>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--gray-500)' }}>01769 572344</div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '12px' }}>
                                <Mail className="download-icon" size={20} />
                                <div>
                                    <strong>Email</strong>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--gray-500)' }}>office@southmoltonbaptistchurch.co.uk</div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '12px' }}>
                                <Clock className="download-icon" size={20} />
                                <div>
                                    <strong>Office Hours</strong>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--gray-500)' }}>Tuesday & Thursday: 9:30 AM - 1:00 PM</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* MAP AND FIND US */}
            <div style={{ borderTop: '1px solid var(--gray-200)', paddingTop: '56px' }}>
                <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '24px', textAlign: 'center' }}>Map & Directions</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', alignItems: 'stretch' }}>
                    <div>
                        <div className="map-placeholder" style={{ height: '350px' }}>
                            <div className="map-bg"></div>
                            <div className="map-card" style={{ padding: '16px' }}>
                                <strong>South Molton Baptist Church</strong>
                                <p style={{ fontSize: '0.8rem', color: 'var(--gray-500)', margin: '4px 0' }}>28 New Road, EX36 4BH</p>
                                <a
                                    href="https://maps.google.com/?q=South+Molton+Baptist+Church"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                    style={{ padding: '6px 12px', fontSize: '0.75rem', width: '100%', marginTop: '4px' }}
                                >
                                    Get Directions
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px', textAlign: 'left' }}>
                        <div>
                            <strong style={{ display: 'block', marginBottom: '4px' }}>By Car</strong>
                            <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)' }}>
                                From the A361 (North Devon Link Road), take the turnoff to South Molton. Follow the road onto New Road. The chapel is located on the right-hand side, just before the central town square.
                            </p>
                        </div>
                        <div>
                            <strong style={{ display: 'block', marginBottom: '4px' }}>Parking</strong>
                            <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)' }}>
                                On Sundays, free parking is available on New Road and nearby streets. Alternatively, the town's Central Car Park is located directly behind the high street, just a 3-minute walk away.
                            </p>
                        </div>
                        <div>
                            <strong style={{ display: 'block', marginBottom: '4px' }}>Accessibility</strong>
                            <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)' }}>
                                The chapel entrance is step-free. We have double doors for easy pram and wheelchair entry, an accessible toilet, and an induction loop system in the main chapel space for those with hearing aids.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
