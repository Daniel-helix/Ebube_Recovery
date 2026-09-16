import { useState } from 'react';
import { Home, Coffee, Info, DollarSign, Calculator, Send } from 'lucide-react';
import chapelHall from '../assets/chapel_hall.jpg';
import sunflowersPlaytime from '../assets/sunflowers_playtime.jpg';

export default function Hire() {
    // Calculator State
    const [room, setRoom] = useState('beacon');
    const [hours, setHours] = useState(2);
    const [useKitchen, setUseKitchen] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        org: '',
        email: '',
        phone: '',
        date: '',
        roomChoice: 'beacon',
        hoursChoice: '2',
        kitchenChoice: 'no',
        notes: '',
        ethosAgreed: false
    });
    const [submitted, setSubmitted] = useState(false);

    // Calculate pricing
    const roomRates = {
        main: 22,
        beacon: 16,
        lighthouse: 14
    };

    const calculateTotal = () => {
        let rate = roomRates[room] || 0;
        let total = rate * hours;
        if (useKitchen) {
            total += 15; // Flat fee for kitchen hire
        }
        return total;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.ethosAgreed) {
            alert("Please review and agree to our hiring ethos statement before submitting.");
            return;
        }
        setSubmitted(true);
    };

    return (
        <div className="container section-padding fade-in">
            <div className="section-header">
                <h1 className="section-title">Hiring Our Buildings</h1>
                <p className="section-subtitle">We offer modern, accessible facilities for hire to community groups, charities, and private events.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '48px', alignItems: 'flex-start' }}>

                {/* ROOM DETAILS & PRICES */}
                <div>
                    <h2 style={{ marginBottom: '20px', color: 'var(--primary)' }}>Available Rooms & Rates</h2>
                    <p style={{ color: 'var(--gray-500)', marginBottom: '32px' }}>
                        We have a variety of multi-purpose spaces that can be hired individually or together. All hirers have access to toilets, baby changing facilities, and free Wi-Fi.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>

                        {/* Main Space */}
                        <div style={{ display: 'flex', gap: '24px', background: 'var(--light)', padding: '24px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-200)', flexWrap: 'wrap' }}>
                            <img
                                src={chapelHall}
                                alt="Main Chapel Space Interior"
                                style={{ width: '180px', height: '120px', borderRadius: 'var(--radius-md)', objectFit: 'cover', flexShrink: 0 }}
                            />
                            <div style={{ flexGrow: 1, minWidth: '200px' }}>
                                <h3 style={{ color: 'var(--primary)', marginBottom: '6px', fontSize: '1.2rem' }}>Main Chapel Space</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)', marginBottom: '12px' }}>
                                    Our largest room. It has flexible seating for up to 120 people, underfloor heating, full PA/sound system, and audio-visual projector screens. Ideal for lectures, concerts, and large community meetings.
                                </p>
                                <strong>Rate: £22 per hour</strong>
                            </div>
                        </div>

                        {/* The Beacon */}
                        <div style={{ display: 'flex', gap: '20px', background: 'var(--light)', padding: '24px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-200)' }}>
                            <div style={{ flexGrow: 1 }}>
                                <h3 style={{ color: 'var(--primary)', marginBottom: '6px', fontSize: '1.2rem' }}>The Beacon Room</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)', marginBottom: '12px' }}>
                                    A cozy, carpeted meeting room featuring comfortable seating for up to 25 people. Great for committee meetings, counseling groups, training courses, and craft activities.
                                </p>
                                <strong>Rate: £16 per hour</strong>
                            </div>
                        </div>

                        {/* Lighthouse Room */}
                        <div style={{ display: 'flex', gap: '24px', background: 'var(--light)', padding: '24px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-200)', flexWrap: 'wrap' }}>
                            <img
                                src={sunflowersPlaytime}
                                alt="Lighthouse Room Playgroup Setup"
                                style={{ width: '180px', height: '120px', borderRadius: 'var(--radius-md)', objectFit: 'cover', flexShrink: 0 }}
                            />
                            <div style={{ flexGrow: 1, minWidth: '200px' }}>
                                <h3 style={{ color: 'var(--primary)', marginBottom: '6px', fontSize: '1.2rem' }}>Lighthouse Room</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)', marginBottom: '12px' }}>
                                    A bright, practical space with wipe-clean flooring. Equipped with toys, toddler-sized furniture, and child-safe features. Perfect for children's birthday parties and playgroups.
                                </p>
                                <strong>Rate: £14 per hour</strong>
                            </div>
                        </div>

                        {/* Kitchen */}
                        <div style={{ display: 'flex', gap: '20px', background: 'var(--light)', padding: '24px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-200)' }}>
                            <div style={{ flexGrow: 1 }}>
                                <h3 style={{ color: 'var(--primary)', marginBottom: '6px', fontSize: '1.2rem' }}>Commercial Grade Kitchen</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)', marginBottom: '12px' }}>
                                    Fully equipped kitchen including commercial dishwasher, double ovens, large fridge, kettle, and crockery/cutlery. Can be hired in conjunction with any room.
                                </p>
                                <strong>Rate: £15 flat fee per booking</strong>
                            </div>
                        </div>

                    </div>

                    {/* Ethos Statement */}
                    <div style={{ padding: '32px', background: 'var(--primary-bg)', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--primary)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                            <Info style={{ color: 'var(--primary)' }} />
                            <h3 style={{ color: 'var(--primary)', fontSize: '1.25rem' }}>Our Building Hire Ethos</h3>
                        </div>
                        <p style={{ fontSize: '0.95rem', color: 'var(--gray-500)', marginBottom: '12px', lineHeight: 1.6 }}>
                            South Molton Baptist Church is a Christian community of faith. While we welcome bookings from a wide variety of groups, we reserve the right to decline hires that directly contradict our core Christian principles, promote alternative spiritualism, or involve activities that we deem harmful or inappropriate for a house of God.
                        </p>
                        <p style={{ fontSize: '0.95rem', color: 'var(--gray-500)' }}>
                            By hiring our building, you agree to respect our Christian ethos and ensure that activities, language, and behavior remain respectful of our chapel's religious history.
                        </p>
                    </div>
                </div>

                {/* SIDEBAR: ESTIMATOR & BOOKING FORM */}
                <div>
                    {/* Price Estimator Widget */}
                    <div className="calculator-box" style={{ marginBottom: '32px' }}>
                        <h3 style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                            <Calculator size={20} />
                            Booking Price Estimator
                        </h3>

                        <div className="form-group">
                            <label className="form-label">Select Room</label>
                            <select className="form-select" value={room} onChange={(e) => setRoom(e.target.value)}>
                                <option value="main">Main Chapel Space (£22/hr)</option>
                                <option value="beacon">The Beacon Room (£16/hr)</option>
                                <option value="lighthouse">Lighthouse Room (£14/hr)</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Hire Duration (Hours)</label>
                            <input
                                type="number"
                                className="form-input"
                                min="1"
                                max="12"
                                value={hours}
                                onChange={(e) => setHours(Math.max(1, parseInt(e.target.value) || 1))}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-checkbox">
                                <input
                                    type="checkbox"
                                    checked={useKitchen}
                                    onChange={(e) => setUseKitchen(e.target.checked)}
                                />
                                <span>Include Kitchen Hire (+ £15 flat fee)</span>
                            </label>
                        </div>

                        <div style={{ textAlign: 'center', borderTop: '1px solid var(--secondary-light)', paddingTop: '16px', marginTop: '16px' }}>
                            <span style={{ fontSize: '0.85rem', color: 'var(--gray-500)', textTransform: 'uppercase', fontWeight: 600 }}>Estimated Total</span>
                            <div className="calc-price">£{calculateTotal()}</div>
                            <span style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>Subject to terms and calendar availability</span>
                        </div>
                    </div>

                    {/* Booking enquiry form */}
                    <div style={{ background: 'var(--white)', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-lg)', padding: '32px', boxShadow: 'var(--shadow-md)' }}>
                        <h3 style={{ color: 'var(--primary)', marginBottom: '16px' }}>Booking Enquiry Form</h3>

                        {submitted ? (
                            <div style={{ textAlign: 'center', padding: '24px 0' }}>
                                <Send size={48} style={{ color: 'var(--primary)', marginBottom: '16px' }} />
                                <h4 style={{ color: 'var(--primary)', marginBottom: '8px' }}>Enquiry Sent!</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)' }}>
                                    Thank you for your enquiry. Our booking coordinator Helen will get back to you within 3 working days.
                                </p>
                                <button className="btn btn-secondary" style={{ marginTop: '20px', fontSize: '0.85rem' }} onClick={() => {
                                    setSubmitted(false);
                                    setFormData({ name: '', org: '', email: '', phone: '', date: '', roomChoice: 'beacon', hoursChoice: '2', kitchenChoice: 'no', notes: '', ethosAgreed: false });
                                }}>
                                    Submit another enquiry
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label className="form-label">Your Name *</label>
                                    <input
                                        type="text"
                                        className="form-input"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Organization Name (if applicable)</label>
                                    <input
                                        type="text"
                                        className="form-input"
                                        value={formData.org}
                                        onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Email Address *</label>
                                    <input
                                        type="email"
                                        className="form-input"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Phone Number *</label>
                                    <input
                                        type="tel"
                                        className="form-input"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Preferred Date *</label>
                                    <input
                                        type="date"
                                        className="form-input"
                                        required
                                        value={formData.date}
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Description of Activity *</label>
                                    <textarea
                                        className="form-textarea"
                                        rows="3"
                                        required
                                        placeholder="e.g. Children's birthday party, committee meeting, training workshop"
                                        value={formData.notes}
                                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                    ></textarea>
                                </div>

                                <div className="form-group">
                                    <label className="form-checkbox">
                                        <input
                                            type="checkbox"
                                            required
                                            checked={formData.ethosAgreed}
                                            onChange={(e) => setFormData({ ...formData, ethosAgreed: e.target.checked })}
                                        />
                                        <span style={{ fontSize: '0.85rem', color: 'var(--gray-500)' }}>
                                            I agree to the SMBC Building Hire Ethos Statement. *
                                        </span>
                                    </label>
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
                                    Send Booking Request
                                </button>
                            </form>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}
