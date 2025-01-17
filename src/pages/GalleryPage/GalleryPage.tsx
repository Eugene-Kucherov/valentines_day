import React, { useState, useEffect } from "react";
import "./galleryPage.scss";
import { Button } from "@mui/material";

type GalleryPageProps = {
    onNavigate: (pageId: string) => void;
};

const GalleryPage = ({ onNavigate }: GalleryPageProps) => {
    const totalImages = 15;
    const images = Array.from(
        { length: totalImages },
        (_, i) => `${process.env.PUBLIC_URL}/images/gallery_${i + 1}.jpg`
    );

    const [currentImages, setCurrentImages] = useState(images.slice(0, 6));
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        images.forEach((image) => {
            const img = new Image();
            img.src = image;
        });
    }, [images]);

    useEffect(() => {
        const interval = setInterval(() => {
            setStartIndex((prevIndex) => (prevIndex + 6) % totalImages);
        }, 3000);

        return () => clearInterval(interval);
    }, [totalImages]);

    useEffect(() => {
        const nextImages = [];
        for (let i = 0; i < 6; i++) {
            nextImages.push(images[(startIndex + i) % totalImages]);
        }
        setCurrentImages(nextImages);
    }, [startIndex]);

    return (
        <div className="gallery">
            <h1 className="gallery-header">Memory cube</h1>
            <div className="cube">
                {currentImages.map((image, index) => (
                    <div className={`cube-face face-${index + 1}`} key={index}>
                        <div
                            className="image"
                            style={{ backgroundImage: `url(${image})` }}
                        ></div>
                    </div>
                ))}
            </div>
            <Button
                onClick={() => onNavigate("game")}
                className="gallery-btn"
                variant="outlined"
            >
                Happiness
            </Button>
        </div>
    );
};

export default GalleryPage;
