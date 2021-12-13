import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = ({person, status, timestamp}) => {
    return (
        <div className="timeline-event">
            <p className="event-person">{person}</p>
            <p className="event-status">{status}</p>
            <Timestamp time={timestamp}></Timestamp>
        </div>
    )
};

export default TimelineEvent;