import "./greetingPage.scss";
import { Button } from "@mui/material";
import { useRef } from "react";

type GreetingPageProps = {
    onNavigate: (pageId: string) => void;
};

const GreetingPage = ({ onNavigate }: GreetingPageProps) => {
    const audioRef = useRef(
        new Audio(`${process.env.PUBLIC_URL}/audio/bg_music.mp3`)
    );

    const handlePlayMusic = () => {
        const audio = audioRef.current;
        if (audio) {
            audio.loop = true;
            audio.play().catch((error) => {
                console.error("Audio playback failed:", error);
            });
        }
        onNavigate("home");
    };

    return (
        <div className="greeting">
            <img
                src={`${process.env.PUBLIC_URL}/images/rings.jpg`}
                alt=""
                className="greeting-image"
            />
            <h1 className="greeting-header">
                Hello, my dear! With this app I just want to bring a little
                romance and remind you how much I love you. Happy Valentine's
                Day to you. <br />
                P.S. Your bububochka.
            </h1>
            <Button
                onClick={handlePlayMusic}
                variant="contained"
                className="greeting-btn"
            >
                You
            </Button>
            <p className="greeting-tip">Read carefully what you click on</p>
        </div>
    );
};

export default GreetingPage;
