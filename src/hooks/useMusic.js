import { useState } from "react"

const songs = [
    {
        id: 1,
        title: "King of Glory Worship Song",
        artist: "Flesh Blood Cross Worship",
        url: "/songs/King of Glort Worship Song.wav",
        duration: "5:15"
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
    const [allSongs, setAllSongs] = useState([]);
};