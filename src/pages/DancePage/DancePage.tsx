import "./dancePage.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";

const DancePage = () => {
    return (
        <div className="dance">
            <div className="dance-bg"></div>
            <video autoPlay loop muted playsInline>
                <source
                    src={`${process.env.PUBLIC_URL}/video/dance.mp4`}
                    type="video/mp4"
                />
                Ваш браузер не поддерживает воспроизведение видео.
            </video>
            <div className="dance-heart">
                <FavoriteIcon className="dance-heart-icon" />
            </div>
        </div>
    );
};

export default DancePage;
