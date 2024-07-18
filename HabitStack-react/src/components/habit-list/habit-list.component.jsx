import "./habit-list.styles.scss";

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
const HabitList = () => {
  return (
    <div className="habit-list-container">
      {habits.map((habit) => (
        <span draggable="true" key={habit.id} onDragStart={dragStartHandler}>
          {habit.name}
        </span>
      ))}
    </div>
  );
};

export default HabitList;
