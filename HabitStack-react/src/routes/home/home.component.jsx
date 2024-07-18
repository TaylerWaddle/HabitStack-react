import TimeLine from "../../components/timeline/timeline.component";
import { Fragment } from "react";

const habits = [
  { id: 1, name: "Morning Routine" },
  { id: 2, name: "Animals" },
  { id: 3, name: "Workout" },
  { id: 4, name: "After Work" },
  { id: 5, name: "Wind Down" },
];

const dragStartHandler = (event) => {
  // Add the target element's id to the data transfer object
  event.dataTransfer.setData("text/plain", event.target.id);
};

const Home = () => {
  return (
    <Fragment>
      <div className="habit-list-container">
        {habits.map((habit) => (
          <span draggable="true" key={habit.id} onDragStart={dragStartHandler}>
            {habit.name}
          </span>
        ))}
      </div>
      <TimeLine></TimeLine>
    </Fragment>
  );
};

export default Home;
