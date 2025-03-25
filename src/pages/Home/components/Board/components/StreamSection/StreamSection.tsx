import React, { useContext, useEffect, useState } from 'react';
import StreamCard from './components/StreamCard';
import './StreamSection.css';
import '../SearchSection/'
import { DataContext } from '../../Board';


function StreamSection() {
    const dataContext = useContext(DataContext);

    if (!dataContext) {
        return null;
    }

    const streams = dataContext.addedStreamers;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [nextIndex, setNextIndex] = useState(1);


    useEffect(() => {
        const interval = setInterval(() => {
            setNextIndex((currentIndex + 1) % streams.length);
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % streams.length);
                setIsAnimating(false);
            }, 500); 
        }, 5000);

        return () => clearInterval(interval);
    }, [streams.length, currentIndex]);

    return (
        <section className="stream-card-slider">
            <div className={`slider-content current ${isAnimating ? 'fade-out' : ''}`}>
                <StreamCard 
                    title={streams[currentIndex].name} 
                    time={streams[currentIndex].hour} 
                    color={streams[currentIndex].color} 
                    avatar={streams[currentIndex].avatarImg}
                />
            </div>
            <div className={`slider-content next ${isAnimating ? 'slide-in' : ''}`}>
                <StreamCard 
                    title={streams[nextIndex].name} 
                    time={streams[nextIndex].hour} 
                    color={streams[nextIndex].color} 
                    avatar={streams[currentIndex].avatarImg}
                />
            </div>
        </section>
    );
}

export default StreamSection;