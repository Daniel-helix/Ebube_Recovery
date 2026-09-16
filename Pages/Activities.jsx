import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Heart, Sun, Flame, Sparkles, Compass, HelpCircle } from 'lucide-react';
import sunflowersPlaytime from '../assets/sunflowers_playtime.jpg';
import sunflowersSlide from '../assets/sunflowers_slide.jpg';
import sunflowersSwing from '../assets/sunflowers_swing.jpg';
import nativityPlay from '../assets/nativity_play.jpg';

export default function Activities() {
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
                <h1 className="section-title">Church & Community Activities</h1>
                <p className="section-subtitle">We run a range of groups and special occasions for all ages in South Molton.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>

                {/* RENEW WELLBEING */}
                <section id="renew" style={{ scrollMarginTop: '100px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', alignItems: 'center' }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                <div style={{ backgroundColor: 'var(--primary-bg)', color: 'var(--primary)', padding: '10px', borderRadius: 'var(--radius-sm)' }}>
                                    <Heart size={28} />
                                </div>
                                <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)' }}>Renew Wellbeing Café</h2>
                            </div>
                            <span style={{ display: 'inline-block', backgroundColor: 'var(--accent)', color: 'var(--white)', padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 700, marginBottom: '16px' }}>
                                THURSDAYS 1:30 PM - 3:30 PM
                            </span>
                            <p style={{ color: 'var(--gray-500)', marginBottom: '16px', fontSize: '1rem' }}>
                                Our Renew Wellbeing space is a quiet, friendly place in our building where "it's OK not to be OK." It is styled around a traditional café with tables and soft seating, but there is no charge for anything.
                            </p>
                            <p style={{ color: 'var(--gray-500)', marginBottom: '16px' }}>
                                You can join in with simple, shared hobbies and activities (like board games, knitting, jigsaw puzzles, painting) or simply sit quietly with a hot drink. A separate quiet room is available for silent reflection, prayer, or quiet contemplation.
                            </p>
                            <div style={{ backgroundColor: 'var(--light)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-200)' }}>
                                <strong>Key Contact:</strong> Helen (Church Secretary) &bull; <span style={{ color: 'var(--gray-500)' }}>Drop in on Thursday, or contact the office for details.</span>
                            </div>
                        </div>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600"
                                alt="Renew Wellbeing Cafe setup"
                                style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}
                            />
                        </div>
                    </div>
                </section>

                <hr style={{ border: 'none', borderTop: '1px solid var(--gray-200)' }} />

                {/* SUNFLOWERS */}
                <section id="sunflowers" style={{ scrollMarginTop: '100px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: '40px', alignItems: 'center' }}>
                        <div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
                                <img
                                    src={sunflowersPlaytime}
                                    alt="Sunflowers Parent & Toddler playtime rocker"
                                    style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', width: '100%', height: '240px', objectFit: 'cover' }}
                                />
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                    <img
                                        src={sunflowersSlide}
                                        alt="Child playing on red slide"
                                        style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', width: '100%', height: '150px', objectFit: 'cover' }}
                                    />
                                    <img
                                        src={sunflowersSwing}
                                        alt="Child playing on blue swing"
                                        style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', width: '100%', height: '150px', objectFit: 'cover' }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                <div style={{ backgroundColor: 'var(--primary-bg)', color: 'var(--primary)', padding: '10px', borderRadius: 'var(--radius-sm)' }}>
                                    <Sun size={28} />
                                </div>
                                <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)' }}>Sunflowers Parents & Toddlers</h2>
                            </div>
                            <span style={{ display: 'inline-block', backgroundColor: 'var(--accent)', color: 'var(--white)', padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 700, marginBottom: '16px' }}>
                                TUESDAYS 10:00 AM - 11:30 AM (TERM TIME)
                            </span>
                            <p style={{ color: 'var(--gray-500)', marginBottom: '16px', fontSize: '1rem' }}>
                                Sunflowers is our long-running group for babies, toddlers, and their parents, grandparents, or childminders. We provide a large selection of toys, sensory items, building blocks, and an active craft table.
                            </p>
                            <p style={{ color: 'var(--gray-500)', marginBottom: '16px' }}>
                                We finish each session with a snack for the children, followed by a story and a group singing session. Hot drinks and home-baked biscuits are provided for the adults, making it a great place to chat and find mutual support.
                            </p>
                            <div style={{ backgroundColor: 'var(--light)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-200)' }}>
                                <strong>Key Contact:</strong> Christine &bull; <span style={{ color: 'var(--gray-500)' }}>Admission is £1.50 per family. No pre-booking required.</span>
                            </div>
                        </div>
                    </div>
                </section>

                <hr style={{ border: 'none', borderTop: '1px solid var(--gray-200)' }} />

                {/* LIGHTHOUSE */}
                <section id="lighthouse" style={{ scrollMarginTop: '100px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', alignItems: 'center' }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                <div style={{ backgroundColor: 'var(--primary-bg)', color: 'var(--primary)', padding: '10px', borderRadius: 'var(--radius-sm)' }}>
                                    <Compass size={28} />
                                </div>
                                <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)' }}>Lighthouse Children's Work</h2>
                            </div>
                            <span style={{ display: 'inline-block', backgroundColor: 'var(--accent)', color: 'var(--white)', padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 700, marginBottom: '16px' }}>
                                SUNDAYS 10:45 AM & FRIDAY CLUBS
                            </span>
                            <p style={{ color: 'var(--gray-500)', marginBottom: '16px', fontSize: '1rem' }}>
                                Lighthouse is our children's ministry. On Sundays, children start in the main service with their families and then go to the back halls for Lighthouse. We have interactive games, drama, and bible lessons tailored for different age groups.
                            </p>
                            <p style={{ color: 'var(--gray-500)', marginBottom: '16px' }}>
                                On select Friday evenings, we also host the Lighthouse Youth Club for primary school children (years 3 to 6). It's a lively evening of sports, video games, crafts, tuck shop, and short Christian reflections.
                            </p>
                            <div style={{ backgroundColor: 'var(--light)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-200)' }}>
                                <strong>Key Contact:</strong> Chieme & Janet Lock &bull; <span style={{ color: 'var(--gray-500)' }}>All our helpers are fully DBS-checked and safeguarding-trained.</span>
                            </div>
                        </div>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1472162072142-d540e139ef43?auto=format&fit=crop&q=80&w=600"
                                alt="Lighthouse children group craft table"
                                style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}
                            />
                        </div>
                    </div>
                </section>

                <hr style={{ border: 'none', borderTop: '1px solid var(--gray-200)' }} />

                {/* SHOWCASE, LIVING NATIVITY & PASSION PLAY */}
                <section id="showcase" style={{ scrollMarginTop: '100px', marginBottom: '24px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '40px', alignItems: 'center' }}>
                        <div>
                            <img
                                src={nativityPlay}
                                alt="Living Nativity stable scene with children"
                                style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', width: '100%', height: 'auto' }}
                            />
                        </div>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                <div style={{ backgroundColor: 'var(--primary-bg)', color: 'var(--primary)', padding: '10px', borderRadius: 'var(--radius-sm)' }}>
                                    <Sparkles size={28} />
                                </div>
                                <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)' }}>Creative Showcase & Theater</h2>
                            </div>
                            <span style={{ display: 'inline-block', backgroundColor: 'var(--accent)', color: 'var(--white)', padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 700, marginBottom: '16px' }}>
                                COMMUNITY PRODUCTIONS & EVENTS
                            </span>
                            <p style={{ color: 'var(--gray-500)', marginBottom: '16px', fontSize: '1rem' }}>
                                At SMBC, we believe drama, theater, and music are fantastic ways to connect and bring the Bible to life. We regularly run community theater and drama productions that get the whole town involved.
                            </p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'var(--gray-500)', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <li><strong>Living Nativity:</strong> Retelling the Christmas story outside in the garden with real animals, music, and narration, attracting hundreds of visitors.</li>
                                <li><strong>Easter Passion Play:</strong> A street-theater style dramatisation of the trial, crucifixion, and resurrection of Jesus Christ, performed in the town square.</li>
                                <li><strong>Showcase:</strong> An annual variety and talent night hosted in our main space, showcasing local musical, poetic, and dramatic talents.</li>
                            </ul>
                            <div style={{ backgroundColor: 'var(--light)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-200)' }}>
                                <strong>Key Contact:</strong> Andy (Minister) &bull; <span style={{ color: 'var(--gray-500)' }}>Photos of these can be browsed in our <a href="/gallery" style={{ fontWeight: 'bold' }}>Gallery page</a>.</span>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
