import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Download, Users, FileText, Gift, Award, HelpCircle } from 'lucide-react';

export default function Running() {
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
                <h1 className="section-title">Running the Church</h1>
                <p className="section-subtitle">Governance details, memberships, standing orders, and official safeguarding policies.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>

                {/* MEMBERSHIP & MEETINGS */}
                <section id="membership" style={{ scrollMarginTop: '100px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', alignItems: 'center' }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                <div style={{ backgroundColor: 'var(--primary-bg)', color: 'var(--primary)', padding: '10px', borderRadius: 'var(--radius-sm)' }}>
                                    <Users size={28} />
                                </div>
                                <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)' }}>Membership & Church Meetings</h2>
                            </div>
                            <p style={{ color: 'var(--gray-500)', marginBottom: '16px', fontSize: '1rem' }}>
                                In a Baptist church, the ultimate authority for making decisions lies with the local congregation. This is done through our formal church membership and regular Members Meetings.
                            </p>
                            <p style={{ color: 'var(--gray-500)', marginBottom: '16px' }}>
                                <strong>What is Membership?</strong> Members are individuals who have made a commitment to support the church through prayer, attendance, financial giving, and using their talents. Members vote on key issues, such as appointing the minister, electing deacons, and agreeing on budgets.
                            </p>
                            <p style={{ color: 'var(--gray-500)', marginBottom: '20px' }}>
                                <strong>How to Become a Member:</strong> If you love Jesus Christ, have covenanted to walk in faith with us, and have been baptized as a believer (or are willing to discuss this), please speak to our minister Andy. We hold short membership preparation sessions to discuss our covenant and history.
                            </p>
                            <div style={{ backgroundColor: 'var(--light)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-200)' }}>
                                <strong>Members Meetings:</strong> Held bi-monthly on Tuesday evenings at 7:30 PM in the Beacon room. Agenda items are published in the Sunday notices 2 weeks in advance.
                            </div>
                        </div>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600"
                                alt="Church members business meeting"
                                style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}
                            />
                        </div>
                    </div>
                </section>

                <hr style={{ border: 'none', borderTop: '1px solid var(--gray-200)' }} />

                {/* GIVING DETAILS */}
                <section id="giving" style={{ scrollMarginTop: '100px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '40px', alignItems: 'center' }}>
                        <div>
                            <div style={{ background: 'var(--primary-bg)', padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-200)' }}>
                                <Gift style={{ color: 'var(--primary)', marginBottom: '12px' }} size={32} />
                                <h3 style={{ color: 'var(--primary)', marginBottom: '12px', fontSize: '1.25rem' }}>Bank Transfer Details</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--gray-500)', marginBottom: '16px' }}>
                                    Setting up a monthly standing order is the most helpful way to support our ongoing ministry.
                                </p>
                                <div style={{ background: 'var(--white)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--gray-200)', fontSize: '0.9rem', textAlign: 'left', lineHeight: 1.6 }}>
                                    <div><strong>Account Name:</strong> South Molton Baptist Church</div>
                                    <div><strong>Bank:</strong> Lloyds Bank plc</div>
                                    <div><strong>Sort Code:</strong> 30-90-89</div>
                                    <div><strong>Account No:</strong> 00234567</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                <div style={{ backgroundColor: 'var(--primary-bg)', color: 'var(--primary)', padding: '10px', borderRadius: 'var(--radius-sm)' }}>
                                    <Gift size={28} />
                                </div>
                                <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)' }}>How to Support SMBC</h2>
                            </div>
                            <p style={{ color: 'var(--gray-500)', marginBottom: '16px', fontSize: '1rem' }}>
                                All of our activities—including our youth groups, baby playgroup, wellbeing cafe, and drama productions—are funded entirely by the voluntary contributions of our congregation. We receive no government or national lottery grants.
                            </p>
                            <h3 style={{ fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '8px' }}>Who We Support</h3>
                            <p style={{ color: 'var(--gray-500)', marginBottom: '16px' }}>
                                We believe in look outward. 10% of our general church income is set aside and given directly to our mission partners who work locally and globally. These include:
                            </p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'var(--gray-500)', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <li><strong>BMS World Mission:</strong> Funding agricultural, clinical, and church-planting work around the globe.</li>
                                <li><strong>Christians Against Poverty (CAP):</strong> Supporting the local debt-counseling center in North Devon.</li>
                                <li><strong>WellFound:</strong> Supporting clean water, hygiene, and toilet-construction initiatives in isolated communities.</li>
                                <li><strong>Open Doors:</strong> Assisting persecuted Christians worldwide with legal aid, literature, and relief.</li>
                                <li><strong>SCWP (South Children's Work Project):</strong> Supporting youth workers in local state schools.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <hr style={{ border: 'none', borderTop: '1px solid var(--gray-200)' }} />

                {/* POLICIES & COMPLIANCE */}
                <section id="policies" style={{ scrollMarginTop: '100px', marginBottom: '24px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', alignItems: 'flex-start' }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                <div style={{ backgroundColor: 'var(--primary-bg)', color: 'var(--primary)', padding: '10px', borderRadius: 'var(--radius-sm)' }}>
                                    <FileText size={28} />
                                </div>
                                <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)' }}>Official Church Policies</h2>
                            </div>
                            <p style={{ color: 'var(--gray-500)', marginBottom: '16px', fontSize: '1rem' }}>
                                We are committed to providing safe, healthy, and supportive environments for all children, vulnerable adults, helpers, and visitors. Our policies are updated annually by the trustees and approved at our Annual General Meeting.
                            </p>
                            <p style={{ color: 'var(--gray-500)', marginBottom: '20px' }}>
                                If you have any questions or concern regarding safeguarding, please immediately contact our Designated Person for Safeguarding (DPS) <strong>Janet Lock</strong> or minister Andy. You can download our full policy documents opposite.
                            </p>
                            <div style={{ backgroundColor: 'var(--primary-bg)', padding: '20px', borderRadius: 'var(--radius-md)' }}>
                                <strong style={{ color: 'var(--primary)' }}>Need to report an incident?</strong>
                                <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)', marginTop: '4px' }}>
                                    Please fill out our incident logging form or write directly to <span style={{ textDecoration: 'underline' }}>safeguarding@southmoltonbaptistchurch.co.uk</span>. All submissions are held in strict confidence.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 style={{ color: 'var(--primary)', marginBottom: '16px', fontSize: '1.25rem' }}>Download Documents</h3>

                            <div className="download-panel">
                                <div className="download-info">
                                    <FileText className="download-icon" size={24} />
                                    <div>
                                        <strong style={{ fontSize: '0.9rem' }}>Safeguarding Policy 2026</strong>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>PDF &bull; 1.2 MB</div>
                                    </div>
                                </div>
                                <a href="#download" className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '0.75rem' }} onClick={(e) => { e.preventDefault(); alert("Safeguarding Policy PDF download simulated."); }}>
                                    <Download size={14} /> Download
                                </a>
                            </div>

                            <div className="download-panel">
                                <div className="download-info">
                                    <FileText className="download-icon" size={24} />
                                    <div>
                                        <strong style={{ fontSize: '0.9rem' }}>Working with Vulnerable Adults</strong>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>PDF &bull; 850 KB</div>
                                    </div>
                                </div>
                                <a href="#download" className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '0.75rem' }} onClick={(e) => { e.preventDefault(); alert("Vulnerable Adults Policy PDF download simulated."); }}>
                                    <Download size={14} /> Download
                                </a>
                            </div>

                            <div className="download-panel">
                                <div className="download-info">
                                    <FileText className="download-icon" size={24} />
                                    <div>
                                        <strong style={{ fontSize: '0.9rem' }}>Bullying & Safeguarding</strong>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>PDF &bull; 620 KB</div>
                                    </div>
                                </div>
                                <a href="#download" className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '0.75rem' }} onClick={(e) => { e.preventDefault(); alert("Bullying Policy PDF download simulated."); }}>
                                    <Download size={14} /> Download
                                </a>
                            </div>

                            <div className="download-panel">
                                <div className="download-info">
                                    <FileText className="download-icon" size={24} />
                                    <div>
                                        <strong style={{ fontSize: '0.9rem' }}>Health & Safety Guidelines</strong>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>PDF &bull; 1.5 MB</div>
                                    </div>
                                </div>
                                <a href="#download" className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '0.75rem' }} onClick={(e) => { e.preventDefault(); alert("Health & Safety Guidelines PDF download simulated."); }}>
                                    <Download size={14} /> Download
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
