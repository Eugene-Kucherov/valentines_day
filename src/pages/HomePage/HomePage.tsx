import "./homePage.scss";
import { Button } from "@mui/material";

type HomePageProps = {
    onNavigate: (pageId: string) => void;
};

const HomePage = ({ onNavigate }: HomePageProps) => {
    return (
        <div className="main">
            <img
                src={`${process.env.PUBLIC_URL}/images/main.jpg`}
                alt=""
                className="main-image"
            />
            <div className="main-content">
                <h1 className="main-content-header">Our love story</h1>
                <Button
                    className="main-content-btn"
                    variant="contained"
                    color="secondary"
                    onClick={() => onNavigate("history")}
                >
                    Are
                </Button>
            </div>
        </div>
    );
};

export default HomePage;
