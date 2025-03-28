import './Board.css';
import StreamSection from './components/StreamSection';
import BrandingSection from './components/BrandingSection';
import SearchSection from './components/SearchSection';
import React, { useState, useEffect } from 'react';
import { getAddedStreams, Stream, getAllStreams } from './services/service';


interface DataContextType {
    streams: Stream[];
    addedStreamers: Stream[];
    searchedStreams: Stream[]
    addNewStreamer: (id: number) => void;
    updateCategory: (category: boolean[]) => void;
    setSearchedText: (text: string) => void;
    updateSearchedStreams: (name: string) => void;
    category: boolean[];
    searchedText: string;
}

export const DataContext = React.createContext<DataContextType | null>(null);

function Board() {
    const [streams, setStreams] = useState(getAllStreams());
    const [addedStreamers, setAddedStreamers] = useState(getAddedStreams());
    const [category, setCategory] = useState([true, false, false]); 
    const [searchedText, setSearchedText] = useState("");
    const [searchedStreams, setSearchedStreams] = useState<Stream[]>([]);

    useEffect(() => {
        updateSearchedStreams(searchedText); 
    }, [category]);

    const addNewStreamer = (id: number) => {
        const streamerToAdd = streams.find((streamer) => streamer.id === id);
        if (streamerToAdd) {
            setAddedStreamers([...addedStreamers, streamerToAdd]);
            setStreams(streams.filter((streamer) => streamer.id !== id));
            setSearchedStreams(searchedStreams.filter((streamer) => streamer.id !== id)); 
        }
    };

    const updateCategory = (newCategory: boolean[]) => {
        setCategory(newCategory);
        updateSearchedStreams(searchedText);
    }

    const updateSearchedStreams = (name: string) => {
        const filteredStreams = streams.filter((stream) => {
            const matchesName = stream.game.toLowerCase().includes(name.toLowerCase());
            const matchesCategory = stream.category.some((value, index) => value && category[index]);
            return matchesName && matchesCategory;
        });
        setSearchedStreams(filteredStreams);
    }

    return (
        <div className="container">
            <DataContext.Provider value={{
                streams, 
                addedStreamers, 
                addNewStreamer, 
                updateCategory, 
                setSearchedText, 
                updateSearchedStreams,
                category, 
                searchedText,
                searchedStreams, 
            }}>
                <BrandingSection/>
                <StreamSection/>
                <SearchSection/>
            </DataContext.Provider>
        </div>
    );
}

export default Board;