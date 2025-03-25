import streamsJSON from '../../../streams.json';


interface Stream {
    id: number;
    name: string;
    game: string;
    category: boolean[];
    color: string;
    hour: string;
    avatarImg: string;
    iconImg: string;
}

const streams: Stream[] = streamsJSON.streams.map((stream) => {
    return {
        id: stream.id,
        name: stream.name,
        game: stream.game,
        category: stream.category,
        color: stream.color,
        hour: stream.hour,
        avatarImg: stream.avatarImg,
        iconImg: stream.iconImg,
    };
});


const addedStreams: Stream[] = [streams[0], streams[1]];

const category: boolean[] = [true, false, false];

const getAllStreams = (): Stream[] => {
    return streams;
}

const getAddedStreams = (): Stream[] =>{
    return addedStreams;
}

const getCategory = () => {
    return category;
}

const getStreamById = (id: number): Stream => {
    const stream = streams.find((stream) => stream.id === id);
    if (!stream) {
        throw new Error(`Stream with id ${id} not found`);
    }
    return stream;
}

const removeStreamById = (id: number): Stream[] => {
    const index = streams.findIndex((stream) => stream.id === id);
    if (index !== -1) {
        streams.splice(index, 1);
    }
    return streams;
}

const addStream = (id: number): Stream[] =>{
    const streamToAdd = streams.find((stream) => stream.id === id);
    if (streamToAdd && !addedStreams.some((s) => s.id === id)) {
        addedStreams.push(streamToAdd);
        const index = streams.findIndex((stream) => stream.id === id);
        if (index !== -1) {
            streams.splice(index, 1);
        }
    }
    return streams;
}

const normalize = (word: string): string => {
    return word.toLowerCase().trim(); 
};

const isInCategory = (id: number, categories: boolean[]): boolean =>{
    const stream = streams.find((stream) => stream.id === id);
    if( (categories[0] == true && stream?.category[0] == true) ||  (categories[1] == true && stream?.category[1] == true) || (categories[2] == true && stream?.category[2] == true)){
        return true;
    }
    return false;
}

const findGame = (name: string, categories: boolean[]): boolean => {
    return streams.some(
        (stream) => normalize(stream.name).includes(normalize(name)) && isInCategory(stream.id, categories)
    );
};


export {
    getAllStreams,
    getAddedStreams,
    getCategory,
    getStreamById,
    removeStreamById,
    addStream,
    normalize
};

export type{
    Stream
}
