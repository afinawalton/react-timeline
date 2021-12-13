import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = ({person, status, timestamp}) => {
    return (
        <ul>
            <li>Person: {person}
                <ul>
                    <li>{status}</li>
                    <li><Timestamp time={timestamp}></Timestamp></li>
                </ul>
            </li>
        </ul>
    )
};

export default TimelineEvent;