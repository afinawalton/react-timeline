import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

function App() {
  const peopleData = timelineData.events.map((item) => {
    return <Timeline person={item.person} status={item.status} timestamp={item.timestamp}/>
  })

  return (
    <div>
      {peopleData}
    </div>
  )
}

export default App;