import { useMusic } from "../hooks/useMusic";
import { useRef, useEffect } from "react";

export const MusicPlayer = () => {
    const {
        currentTrack, 
        formatTime, 
        currentTime, 
        setCurrentTime, 
        duration, 
        setDuration,
    } = useMusic();
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;

        if (!audio) return;

        const handleLoadMetadata = () => {
            setDuration(audio.duration);
            console.log(audio.duration);
        };

        const handleTimeUpdate = () => {};

        const handleEnded = () => {};

        audio.addEventListener("loadedmetadata", handleLoadMetadata);
        
        return () => {
            audio.removeEventListener("loadedmetadata", handleLoadMetadata);
        };
    }, [setDuration, setCurrentTime, currentTrack]);

    return (
        <div className="music-player">
            <audio 
            ref={audioRef} 
            src={currentTrack.url} 
            preload="metadata" 
            crossOrigin="anonymous"/>

            <div className="track-info">
                <h3 className="track-title">{currentTrack.title}</h3>
                <p className="track-artist">{currentTrack.artist}</p>
            </div>

            <div className="progress-container">
                <span className="time">{formatTime(currentTime)}</span>
                <input 
                type="range" 
                min="0" 
                max={duration || 0} 
                step="0.1" 
                value={currentTime || 0} 
                className="progress-bar"
                // style={{}}
                />
                <span className="time">{formatTime(duration)}</span>
            </div>
        </div>
    );
};