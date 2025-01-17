import "./historyPage.scss";
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
} from "@mui/lab";
import { Button, Typography } from "@mui/material";

type HistoryPageProps = {
    onNavigate: (pageId: string) => void;
};

const HistoryPage = ({ onNavigate }: HistoryPageProps) => {
    const events = [
        { date: "24.02.2019", description: "Mutual sympathy in Badoo" },
        { date: "16.05.2019", description: "First meeting" },
        { date: "17.05.2019", description: "First kiss" },
        { date: "Summer 2019", description: "First trip to Gomel" },
        { date: "Autumn 2019", description: "First visit to hockey" },
        { date: "August 2021", description: "Life in Krulevshchyna" },
        { date: "24.04.2022", description: "Moving to Minsk" },
        { date: "20.05.2022", description: "We have Toshik" },
        { date: "July 2022", description: "Travel to Saint Petersburg" },
        { date: "December 2022", description: "Travel to Grodno" },
        { date: "14.05.2023", description: "Visit to the concert" },
        { date: "August 2023", description: "Travel to Braslav Lakes" },
        { date: "16.05.2024", description: "Proposal of marriage" },
        { date: "12.10.2024", description: "Our wedding" },
        { date: "30.11.2024", description: "Moving to Maryina Gorka" },
        { date: "", description: "Further - more" },
    ];

    return (
        <>
            <Timeline position="alternate" className="history">
                <img
                    src={`${process.env.PUBLIC_URL}/images/history.jpg`}
                    alt=""
                    className="history-image"
                />
                {events.map((event, index) => (
                    <TimelineItem
                        key={index}
                        className="timeline-item"
                        style={{ animationDelay: `${index * 1}s` }}
                    >
                        <TimelineSeparator>
                            <TimelineDot />
                            {index < events.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography>{event.date}</Typography>
                            <Typography>{event.description}</Typography>
                        </TimelineContent>
                    </TimelineItem>
                ))}
                <Button
                    onClick={() => onNavigate("gallery")}
                    variant="contained"
                    className="history-btn"
                >
                    My
                </Button>
            </Timeline>
        </>
    );
};

export default HistoryPage;
