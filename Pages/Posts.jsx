import { useState } from 'react';
import { Play, BookOpen, Music, Calendar, Clock, User } from 'lucide-react';

export default function Posts() {
    const [activeCategory, setActiveCategory] = useState('all');

    const posts = [
        {
            id: 1,
            category: 'sermons',
            title: 'Walking in Faith through the Valleys',
            date: 'July 5, 2026',
            author: 'Andy (Minister)',
            description: 'A study on Psalm 23 and what it means to trust in God’s guidance when life becomes dark and uncertain. Streamed live and stored on our YouTube channel.',
            youtubeId: 'dQw4w9WgXcQ', // Mock video ID
            duration: '22 mins'
        },
        {
            id: 2,
            category: 'reflections',
            title: 'The Gift of Quiet in a Loud World',
            date: 'June 28, 2026',
            author: 'Helen (Secretary)',
            description: 'Theological reflections on Elijah and the "still small voice" of God. Why our modern minds struggle to stay quiet, and how Renew Wellbeing helps create spaces for silence.',
            content: 'In our fast-paced society, silence is often viewed as empty space that needs filling. But in the Bible, silence is where God works. When Elijah stood on the mountain, God wasn’t in the wind, the earthquake, or the fire, but in the gentle whisper. Developing a daily practice of five minutes of quiet prayer can transform our spiritual and mental health.',
            duration: '4 min read'
        },
        {
            id: 3,
            category: 'songs',
            title: 'Worship Focus: "Yet Not I But Through Christ In Me"',
            date: 'June 21, 2026',
            author: 'Andy (Minister)',
            description: 'Looking deeply at the theology of one of our favorite songs by CityAlight, which we sang during our service last week. Exploring the verses and scriptural references.',
            content: 'This modern hymn captures the essence of Christian theology: it is not our strength, but the grace of Christ within us. The lyrics reflect Galatians 2:20: "I have been crucified with Christ and I no longer live, but Christ lives in me." It serves as a reminder that all our achievements, trials, and faith are upheld by God’s sovereign hand.',
            duration: '3 min read'
        },
        {
            id: 4,
            category: 'sermons',
            title: 'Living out the Ethos of Jesus',
            date: 'June 14, 2026',
            author: 'Andy (Minister)',
            description: 'Exploring the Sermon on the Mount (Matthew 5-7) and how its radical call to love our enemies impacts our church, our activities, and our building hires.',
            youtubeId: 'dQw4w9WgXcQ', // Mock video ID
            duration: '25 mins'
        },
        {
            id: 5,
            category: 'reflections',
            title: 'Baptism: Dying to Live',
            date: 'June 07, 2026',
            author: 'Richard (Deacon)',
            description: 'Reflections on the symbols of Believers’ Baptism. Why full immersion represents the grave and the resurrection, and why it remains a central practice of Baptists.',
            content: 'Baptism is more than a ceremony; it is a physical witness of a spiritual reality. Standing in the pool represents our old self. Going under the water represents being buried with Christ in his death. Emerging represents rising to new life in Him. It is a beautiful symbol of rebirth and commitment.',
            duration: '5 min read'
        }
    ];

    const filteredPosts = activeCategory === 'all'
        ? posts
        : posts.filter(post => post.category === activeCategory);

    return (
        <div className="container section-padding fade-in">
            <div className="section-header">
                <h1 className="section-title">Posts & Resources</h1>
                <p className="section-subtitle">Browse recent sermons, theological reflections, and worship song spotlights.</p>
            </div>

            {/* Filter Tabs */}
            <div className="posts-filters">
                <button
                    className={`btn ${activeCategory === 'all' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setActiveCategory('all')}
                    style={{ padding: '8px 20px', borderRadius: 'var(--radius-full)', fontSize: '0.85rem' }}
                >
                    All Resources
                </button>
                <button
                    className={`btn ${activeCategory === 'sermons' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setActiveCategory('sermons')}
                    style={{ padding: '8px 20px', borderRadius: 'var(--radius-full)', fontSize: '0.85rem' }}
                >
                    Sermons (YouTube)
                </button>
                <button
                    className={`btn ${activeCategory === 'reflections' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setActiveCategory('reflections')}
                    style={{ padding: '8px 20px', borderRadius: 'var(--radius-full)', fontSize: '0.85rem' }}
                >
                    Theological Reflections
                </button>
                <button
                    className={`btn ${activeCategory === 'songs' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setActiveCategory('songs')}
                    style={{ padding: '8px 20px', borderRadius: 'var(--radius-full)', fontSize: '0.85rem' }}
                >
                    Worship Song Focus
                </button>
            </div>

            {/* Posts List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '800px', margin: '40px auto 0' }}>
                {filteredPosts.map((post) => (
                    <div key={post.id} style={{ background: 'var(--white)', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-lg)', padding: '32px', boxShadow: 'var(--shadow-md)', textAlign: 'left' }}>

                        {/* Meta header */}
                        <div className="post-meta">
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                <Calendar size={14} /> {post.date}
                            </span>
                            <span>&bull;</span>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                <User size={14} /> {post.author}
                            </span>
                            <span>&bull;</span>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                <Clock size={14} /> {post.duration}
                            </span>
                        </div>

                        {/* Title with badge */}
                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '16px' }}>
                            <h2 style={{ fontSize: '1.4rem', color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>
                                {post.title}
                            </h2>
                            <span style={{
                                backgroundColor: post.category === 'sermons' ? '#fecaca' : post.category === 'reflections' ? '#dbeafe' : '#fef08a',
                                color: post.category === 'sermons' ? '#991b1b' : post.category === 'reflections' ? '#1e40af' : '#854d0e',
                                padding: '4px 10px',
                                borderRadius: 'var(--radius-sm)',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                textTransform: 'uppercase'
                            }}>
                                {post.category}
                            </span>
                        </div>

                        <p style={{ color: 'var(--gray-500)', marginBottom: '20px', fontSize: '0.95rem', lineHeight: 1.6 }}>
                            {post.description}
                        </p>

                        {/* Render conditional content (video or text) */}
                        {post.category === 'sermons' && post.youtubeId && (
                            <div>
                                <div className="video-container">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${post.youtubeId}`}
                                        title={post.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <p style={{ fontSize: '0.85rem', color: 'var(--gray-500)', background: 'var(--light)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
                                    <strong>Note:</strong> Our weekly sermons are uploaded as Unlisted on YouTube. Links are archived here weekly for congregants. If you miss a week, you can access the latest sermon directly from this panel.
                                </p>
                            </div>
                        )}

                        {(post.category === 'reflections' || post.category === 'songs') && post.content && (
                            <div style={{
                                backgroundColor: 'var(--primary-bg)',
                                padding: '24px',
                                borderRadius: 'var(--radius-md)',
                                borderLeft: '4px solid var(--primary)',
                                fontSize: '0.95rem',
                                color: 'var(--dark)',
                                lineHeight: 1.7,
                                whiteSpace: 'pre-line'
                            }}>
                                {post.content}
                            </div>
                        )}

                    </div>
                ))}
            </div>
        </div>
    );
}
