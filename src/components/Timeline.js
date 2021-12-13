import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = ({person, status, timestamp}) => {
    return (
        <div className="timeline">
            <TimelineEvent person={person} status={status} timestamp={timestamp}></TimelineEvent>
        </div>
    )
};

export default Timeline;