import "./App.scss";
import React, { useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import GreetingPage from "./pages/GreetingPage/GreetingPage";
import GamePage from "./pages/GamePage/GamePage";
import DancePage from "./pages/DancePage/DancePage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";

const App = () => {
    const [currentPage, setCurrentPage] = useState("greeting");
    const [animationClass, setAnimationClass] = useState("page-enter");

    const handleNavigate = (pageId: string) => {
        setAnimationClass("page-exit");
        setTimeout(() => {
            setCurrentPage(pageId);
            setAnimationClass("page-enter");
        }, 1000);
    };

    const resolver: { [key: string]: React.ElementType } = {
        greeting: GreetingPage,
        home: HomePage,
        history: HistoryPage,
        gallery: GalleryPage,
        game: GamePage,
        dance: DancePage,
    };

    const CurrentPageComponent = resolver[currentPage];

    return (
        <div className={`page ${animationClass}`}>
            {CurrentPageComponent && (
                <CurrentPageComponent onNavigate={handleNavigate} />
            )}
        </div>
    );
};

export default App;
