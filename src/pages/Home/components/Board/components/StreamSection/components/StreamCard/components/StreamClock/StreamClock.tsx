import './StreamClock.css'

interface StreamClockProps {
    time: string;
}

function StreamClock({ time }: StreamClockProps) {
    return(
        <button className="stream-clock">{time}</button>
    );
}

export default StreamClock;