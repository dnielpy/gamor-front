import './ChannelsList.css';
import { useContext } from 'react';
import { DataContext } from '../../../../../../Board';

function ChannelsList() {
    const dataContext = useContext(DataContext);

    if (!dataContext) {
        return null; 
    }

    return (
        <div className='channels-to-be-added'>
            {dataContext.searchedStreams.map((streamer) => (
                <div key={streamer.id} className='channel-item'>
                    <div className='channel-id'>{streamer.id}</div>
                    <div className='channel-name'> {streamer.name} </div>
                    <img className='channel-icon' src={streamer.iconImg} alt={`${streamer.name} icon`} />
                    <button className='add-button' onClick={() => dataContext.addNewStreamer(streamer.id)}>+</button>
                </div>
            ))}
        </div>
    );
}

export default ChannelsList;