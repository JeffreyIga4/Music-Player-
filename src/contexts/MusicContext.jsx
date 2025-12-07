import { createContext, useContext, useState } from "react";

const MusicContext = createContext();

const songs = [
    {
        id: 1,
        title: "Escaladizzy",
        artist: "Mavo ft Wave$tar",
        url: "/songs/Escaladizzy.wav",
        duration: "2:52",
    },
    {
        id: 2,
        title: "Breaching",
        artist: "EchoDB",
        url: "/songs/Breaching.wav",
        duration: "10:35"
    },
    {
        id: 3,
        title: "Shift",
        artist: "Red Worship",
        url: "/songs/Shift.wav",
        duration: "4:58"
    },
    {
        id: 4,
        title: "Wind Of The Lord",
        artist: "Victoria Orenze",
        url: "/songs/WIND OF THE LORD.wav",
        duration: "13:42"
    },
    {
        id: 5,
        title: "Yahweh Will Manifest Himself",
        artist: "Deeper Worship",
        url: "/songs/Yahweh Will Manifest Himself.wav",
        duration: "10:14"
    },
];

export const MusicProvider = ({children}) => {
    const [allSongs, setAllSongs] = useState(songs);
        const [currentTrack, setCurrentTrack] = useState(songs[0]);
        const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
        const [currentTime, setCurrentTime] = useState(0);
        const [duration, setDuration] = useState(0);
        const [isPlaying, setIsPlaying] = useState(false);
        const [volume, setVolume] = useState(1);
    
        const handlePlaySong = (song, index) => {
           setCurrentTrack(song);
           setCurrentTrackIndex(index);
        };
    
        const nextTrack = () => {
            setCurrentTrackIndex((prev) => {
                const nextIndex = (prev + 1) % allSongs.length;
                setCurrentTrack(allSongs[nextIndex]);
                return nextIndex;
            });
            setIsPlaying(false);
        };
    
        const prevTrack = () => {
            setCurrentTrackIndex((prev) => {
                const nextIndex = (prev === 0 ? allSongs.length - 1 : prev - 1);
                setCurrentTrack(allSongs[nextIndex]);
                return nextIndex;
            });
            setIsPlaying(false);
        };
    
        const formatTime = (time) => {
            if (isNaN(time) || time === undefined) return "0:00";
    
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60);
    
            return `${minutes}:${seconds.toString().padStart(2, "0")}`;
        };
    
        const play = () => setIsPlaying(true);
        const pause = () => setIsPlaying(false);

    return <MusicContext.Provider 
    value={{
        allSongs,
        handlePlaySong,
        currentTrackIndex,
        currentTrack, 
        currentTime, 
        setCurrentTime, 
        formatTime,
        duration,
        setDuration,
        nextTrack,
        prevTrack,
        play,
        pause,
        isPlaying,
        volume,
        setVolume,
        }}
    >
        {children}
    </MusicContext.Provider>;
}

export const useMusic = () => {
    const contextValue = useContext(MusicContext);
    if (!contextValue) {
        throw new Error("useMusic must be used within a MusicProvider");
    }
    return contextValue;
};