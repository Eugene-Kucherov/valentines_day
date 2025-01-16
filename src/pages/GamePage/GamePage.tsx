import React, { useState, useEffect } from "react";
import "./gamePage.scss";
import { Button } from "@mui/material";

type GamePageProps = {
    onNavigate: (pageId: string) => void;
};

const GamePage = ({ onNavigate }: GamePageProps) => {
    const rows = 5;
    const cols = 4;

    const imageUrl = `${process.env.PUBLIC_URL}/images/game.jpg`;

    const [pieces, setPieces] = useState<number[]>(
        // Array.from({ length: rows * cols }, (_, i) => i)
        Array.from({ length: rows * cols }, (_, i) => i).sort(
            () => Math.random() - 0.5
        )
    );

    const [solved, setSolved] = useState(false);
    const [transitioning, setTransitioning] = useState(false);

    const handleDragStart = (
        e: React.DragEvent<HTMLDivElement>,
        index: number
    ) => {
        e.dataTransfer.setData("pieceIndex", index.toString());
    };

    const handleDrop = (
        e: React.DragEvent<HTMLDivElement>,
        dropIndex: number
    ) => {
        const dragIndex = parseInt(e.dataTransfer.getData("pieceIndex"), 10);
        const newPieces = [...pieces];
        [newPieces[dragIndex], newPieces[dropIndex]] = [
            newPieces[dropIndex],
            newPieces[dragIndex],
        ];
        setPieces(newPieces);
    };

    useEffect(() => {
        if (pieces.every((piece, index) => piece === index)) {
            setTransitioning(true);
            setTimeout(() => {
                setSolved(true);
                setTransitioning(false);
            }, 1000);
        }
    }, [pieces]);

    return (
        <div className="game">
            <div className="puzzle">
                {pieces.map((pieceIndex, i) => (
                    <div
                        key={i}
                        className="puzzle-piece"
                        style={{
                            backgroundImage: `url(${imageUrl})`,
                            backgroundPosition: `${
                                (pieceIndex % cols) * (100 / (cols - 1))
                            }% ${
                                Math.floor(pieceIndex / cols) *
                                (100 / (rows - 1))
                            }%`,
                            backgroundSize: `${cols * 100}% ${rows * 100}%`,
                        }}
                        draggable
                        onDragStart={(e) => handleDragStart(e, i)}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => handleDrop(e, i)}
                    ></div>
                ))}
            </div>
            <div
                className={`game-content ${
                    transitioning ? "fade-out" : "fade-in"
                }`}
            >
                {solved ? (
                    <>
                        <p>
                            I knew you could handle it easily.
                            <br />
                            Look how beautiful we are!
                        </p>
                        <Button
                            variant="contained"
                            className="game-btn"
                            onClick={() => onNavigate("dance")}
                        >
                            With love
                        </Button>
                    </>
                ) : (
                    <p>Let's play a game</p>
                )}
            </div>
        </div>
    );
};

export default GamePage;
