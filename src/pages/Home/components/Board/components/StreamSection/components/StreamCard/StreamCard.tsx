import './Streamcard.css';
import StreamClock from './components/StreamClock/StreamClock';

interface StreamCardProps {
    title: string;
    time: string;
    color: string;
    avatar: string;
}

function StreamCard({ title, time, color, avatar }: StreamCardProps) {
    return (
        <div className="streams-container">
            <h1 className="stream-title">{title}</h1>
            <p className="stream-subtitle">Join Live Stream</p>

            <StreamClock time={time}/>

            <div className="image-container">
                <img className="avatar-img" src={avatar} alt="Avatar" />
            </div>
        </div>
    );
}

export default StreamCard;