import { useState } from 'react';
import { X, Camera, Eye } from 'lucide-react';
import streetView from '../assets/street_view.jpg';
import sunflowersPlaytime from '../assets/sunflowers_playtime.jpg';
import sunflowersSlide from '../assets/sunflowers_slide.jpg';
import sunflowersSwing from '../assets/sunflowers_swing.jpg';
import nativityPlay from '../assets/nativity_play.jpg';
import chapelHall from '../assets/chapel_hall.jpg';
import churchEntrance from '../assets/church_entrance.jpg';
import sunflowersTrains from '../assets/sunflowers_trains.jpg';
import sundayService from '../assets/sunday_service.jpg';

// Historical Archive and Photo Assets
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

// Fellowship & Community Photos
import fellowshipTeaCoffee from '../assets/fellowship_tea_coffee.jpg';
import sundayServiceFellowship from '../assets/sunday_service_fellowship.jpg';
import communityConversations from '../assets/community_conversations.jpg';

export default function Gallery() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [lightboxIndex, setLightboxIndex] = useState(null);

    const images = [
        {
            id: 26,
            category: 'church-life',
            title: 'Sunday Morning Fellowship in the Sanctuary',
            description: 'Our church family gathered together in the main sanctuary sharing conversation and warm fellowship after the morning service.',
            url: sundayServiceFellowship
        },
        {
            id: 27,
            category: 'church-life',
            title: 'Coffee & Refreshments at the Hatch',
            description: 'Volunteers and members serving fresh tea, filter coffee, and refreshments through the kitchen servery after worship.',
            url: fellowshipTeaCoffee
        },
        {
            id: 28,
            category: 'church-life',
            title: 'Post-Service Community & Conversation',
            description: 'Members and visitors connecting, catching up, and enjoying friendship together in the light-filled chapel.',
            url: communityConversations
        },
        {
            id: 9,
            category: 'church-life',
            title: 'South Molton Baptist Church Building',
            description: 'Our historic chapel building located on New Road, South Molton.',
            url: streetView
        },
        {
            id: 13,
            category: 'church-life',
            title: 'Church entrance and pathway',
            description: 'The welcoming pathway leading up to the main double-doors of South Molton Baptist Church.',
            url: churchEntrance
        },
        {
            id: 10,
            category: 'church-life',
            title: 'Main Chapel Hall interior',
            description: 'Our spacious, newly renovated main hall with underfloor heating, wood flooring, and open stone arches.',
            url: chapelHall
        },
        {
            id: 14,
            category: 'church-life',
            title: 'Worship band leading Sunday service',
            description: 'Our talented musicians leading the congregation in singing and worship on Sunday morning.',
            url: sundayService
        },
        {
            id: 1,
            category: 'drama',
            title: 'Passion Play street theatre',
            description: 'Our Easter outdoor play, telling the story of the Passion of Jesus in South Molton town square.',
            url: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 2,
            category: 'drama',
            title: 'Living Nativity stable scene',
            description: 'The Christmas Living Nativity with local volunteers, real farm animals, and community carols in the garden.',
            url: nativityPlay
        },
        {
            id: 3,
            category: 'children',
            title: 'Sunflowers toddler playtime',
            description: 'Our weekly playgroup for under-5s, filled with toys, ride-on tractors, and fun activities.',
            url: sunflowersPlaytime
        },
        {
            id: 15,
            category: 'children',
            title: 'Sunflowers toddler train track',
            description: 'Toddlers playing and sharing together at the wooden train set table during our weekly playgroup.',
            url: sunflowersTrains
        },
        {
            id: 11,
            category: 'children',
            title: 'Active indoor slide play',
            description: 'A safe and happy space for toddler play, featuring indoor slides and colorful activities.',
            url: sunflowersSlide
        },
        {
            id: 12,
            category: 'children',
            title: 'Toddler swing activities',
            description: 'Fun toddler-safe swings and play structures during our Sunflowers playgroup sessions.',
            url: sunflowersSwing
        },
        {
            id: 4,
            category: 'church-life',
            title: 'Believers Baptism by immersion',
            description: 'Celebrating public declaration of faith with our full immersion baptismal pool in the main sanctuary.',
            url: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 5,
            category: 'drama',
            title: 'Showcase talent concert',
            description: 'Our annual Showcase variety performance, highlighting poetry, piano solos, and comedy sketches by members.',
            url: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 6,
            category: 'church-life',
            title: 'Churches Together walk of witness',
            description: 'Gathering with other congregations in South Molton for our joint Good Friday walk of witness.',
            url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 7,
            category: 'children',
            title: 'Lighthouse Friday games night',
            description: 'Friday youth group playing active parachute games in the rear sports hall.',
            url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 8,
            category: 'church-life',
            title: 'Garden working bee & fellowship',
            description: 'Volunteers and leaders weeding the community garden and sharing refreshments.',
            url: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 16,
            category: 'history',
            title: 'Easter 1988: Sanctuary before pews removal',
            description: 'Historic view of the chapel interior before removal of Victorian pews and modernisation.',
            url: history1988Before
        },
        {
            id: 17,
            category: 'history',
            title: '1988: Sanctuary refurbishment in progress',
            description: 'Renovation work underway viewed through the inner door screen with ladder and stone masonry.',
            url: history1988Wip
        },
        {
            id: 18,
            category: 'history',
            title: '1990: Sanctuary partition works',
            description: 'Mid-construction photo showing the glazed timber partition divider installation.',
            url: history1990Partition
        },
        {
            id: 19,
            category: 'history',
            title: 'Completed in 1990: Modernised sanctuary',
            description: 'The newly redecorated sanctuary in 1990, featuring flexible seating and decorative arch banner.',
            url: history1990Completed
        },
        {
            id: 20,
            category: 'history',
            title: '1992: Services in the back room',
            description: 'Church gatherings temporarily held in the rear hall whilst sanctuary alterations took place.',
            url: history1992BackRoom
        },
        {
            id: 21,
            category: 'history',
            title: '1993: Coffee in the Upper Room',
            description: 'Fellowship after Sunday worship with members Diana Barker, David Barker, Julie Kingett, Joan + Alf.',
            url: history1993UpperRoom
        },
        {
            id: 22,
            category: 'history',
            title: '1992: Chapel from Infants School Playground',
            description: 'Exterior view of the church building and courtyard from the Infants School Playground in 1992.',
            url: history1992Playground
        },
        {
            id: 23,
            category: 'history',
            title: 'Easter 1988 Archival Sheet & Notes',
            description: 'Original historical archive sheet documenting the Easter 1988 renovation with handwritten records.',
            url: historyArchive1988
        },
        {
            id: 24,
            category: 'history',
            title: '1990 Completion Archival Sheet',
            description: 'Original historical archive document recording the partition work and 1990 completed interior.',
            url: historyArchive1990
        },
        {
            id: 25,
            category: 'history',
            title: '1992-1993 Church Alterations Archival Sheet',
            description: 'Original historical archive document recording back room worship, Upper Room coffee, and playground exterior.',
            url: historyArchive1992
        }
    ];

    const filteredImages = activeFilter === 'all'
        ? images
        : images.filter(img => img.category === activeFilter);

    const openLightbox = (index) => {
        // Find index of the clicked item in the filtered array
        setLightboxIndex(index);
    };

    const closeLightbox = () => {
        setLightboxIndex(null);
    };

    const showNext = (e) => {
        e.stopPropagation();
        setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
    };

    const showPrev = (e) => {
        e.stopPropagation();
        setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
    };

    return (
        <div className="container section-padding fade-in">
            <div className="section-header">
                <h1 className="section-title">Photo Gallery & Albums</h1>
                <p className="section-subtitle">A visual look into the life, productions, and community outings of South Molton Baptist Church.</p>
            </div>

            {/* Filter Tabs */}
            <div className="posts-filters">
                <button
                    className={`btn ${activeFilter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setActiveFilter('all')}
                    style={{ padding: '8px 20px', borderRadius: 'var(--radius-full)', fontSize: '0.85rem' }}
                >
                    Show All
                </button>
                <button
                    className={`btn ${activeFilter === 'history' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setActiveFilter('history')}
                    style={{ padding: '8px 20px', borderRadius: 'var(--radius-full)', fontSize: '0.85rem' }}
                >
                    History & Archives
                </button>
                <button
                    className={`btn ${activeFilter === 'drama' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setActiveFilter('drama')}
                    style={{ padding: '8px 20px', borderRadius: 'var(--radius-full)', fontSize: '0.85rem' }}
                >
                    Drama & Plays
                </button>
                <button
                    className={`btn ${activeFilter === 'children' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setActiveFilter('children')}
                    style={{ padding: '8px 20px', borderRadius: 'var(--radius-full)', fontSize: '0.85rem' }}
                >
                    Children & Youth
                </button>
                <button
                    className={`btn ${activeFilter === 'church-life' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setActiveFilter('church-life')}
                    style={{ padding: '8px 20px', borderRadius: 'var(--radius-full)', fontSize: '0.85rem' }}
                >
                    Church Life & Events
                </button>
            </div>

            {/* Grid of gallery items */}
            <div className="gallery-grid" style={{ marginTop: '32px' }}>
                {filteredImages.map((img, index) => (
                    <div
                        key={img.id}
                        className="gallery-item card"
                        onClick={() => openLightbox(index)}
                    >
                        <img src={img.url} alt={img.title} />
                        <div className="gallery-overlay">
                            <Eye style={{ color: 'var(--white)', alignSelf: 'center', marginBottom: '8px' }} size={24} />
                            <span className="gallery-title">{img.title}</span>
                            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.75rem', marginTop: '4px' }}>
                                {img.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {lightboxIndex !== null && (
                <div className="lightbox" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox}>
                        <X size={32} />
                    </button>

                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={filteredImages[lightboxIndex].url}
                            alt={filteredImages[lightboxIndex].title}
                            className="lightbox-img"
                        />
                        <div className="lightbox-caption">
                            <h3>{filteredImages[lightboxIndex].title}</h3>
                            <p style={{ fontSize: '0.9rem', color: '#c8d2c9', marginTop: '4px' }}>
                                {filteredImages[lightboxIndex].description}
                            </p>
                        </div>

                        {/* Navigation inside lightbox */}
                        <button
                            onClick={showPrev}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '-60px',
                                transform: 'translateY(-50%)',
                                background: 'rgba(255, 255, 255, 0.1)',
                                border: 'none',
                                color: 'white',
                                fontSize: '2rem',
                                cursor: 'pointer',
                                borderRadius: '50%',
                                width: '44px',
                                height: '44px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            &lsaquo;
                        </button>
                        <button
                            onClick={showNext}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                right: '-60px',
                                transform: 'translateY(-50%)',
                                background: 'rgba(255, 255, 255, 0.1)',
                                border: 'none',
                                color: 'white',
                                fontSize: '2rem',
                                cursor: 'pointer',
                                borderRadius: '50%',
                                width: '44px',
                                height: '44px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            &rsaquo;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
