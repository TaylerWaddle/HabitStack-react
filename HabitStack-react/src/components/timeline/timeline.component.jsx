import HourTimeslot from "../hour-timeslot/hour-timeslot.component";
import "./timeline.styles.scss";

const hours = [];
for (let i = 0; i < 24; i++) {
  hours.push(<HourTimeslot key={i} />);
}

const TimeLine = () => {
  return <div className="timeline-container">{hours}</div>;
};

export default TimeLine;
