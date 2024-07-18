import HourTimeslot from "../hour-timeslot/hour-timeslot.component";
import "./timeline.styles.scss";
import { useDroppable } from "@dnd-kit/core";

const hours = [];
for (let i = 0; i < 24; i++) {
  hours.push(<HourTimeslot key={i} />);
}

const TimeLine = () => {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div ref={setNodeRef} style={style} className="timeline-container">
      {hours}
    </div>
  );
};

export default TimeLine;
