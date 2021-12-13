import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = ({person, status, timestamp}) => {
    <div>
        <TimelineEvent person={person} status={status} timestamp={timestamp}/>
    </div>
};

export default Timeline;