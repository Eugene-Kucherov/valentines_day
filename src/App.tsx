import "./App.scss";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import HomePage from "./pages/HomePage/HomePage";
import { useState } from "react";

const App = () => {
    const [currentPage, setCurrentPage] = useState("home");

    const handleNavigate = (pageId: string) => {
        setCurrentPage(pageId);
    };

    const resolver: { [key: string]: React.ElementType } = {
        home: HomePage,
        history: HistoryPage,
    };

    const CurrentPageComponent = resolver[currentPage];

    return (
        <>
            {CurrentPageComponent && (
                <CurrentPageComponent onNavigate={handleNavigate} />
            )}
        </>
    );
};

export default App;
