import { useState } from "react"

const songs = [
    {
        id: 1,
        title: "Keep You Away",
        artist: "EchoBR",
        url: "/songs/Keep You Away.wav",
        duration: "4:32",
    },
    {
        id: 2,
        title: "No Me Without You",
        artist: "Dunsin Oyekan",
        url: "/songs/No Me Without You.wav",
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

export const useMusic = () => {
    // Hook logic here
    const [allSongs, setAllSongs] = useState(songs);
    const [currentTrack, setCurrentTrack] = useState(songs[0]);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const handlePlaySong = (song, index) => {
       setCurrentTrack(song);
       setCurrentTrackIndex(index);
    };

    const formatTime = (time) => {
        if (isNaN(time) || time === undefined) return "0:00";

        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }

    return { 
        allSongs,
        handlePlaySong,
        currentTrackIndex,
        currentTrack, 
        currentTime, 
        setCurrentTime, 
        formatTime,
        duration,
        setDuration,
    };
};