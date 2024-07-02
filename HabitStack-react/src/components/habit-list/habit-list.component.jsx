import "./habit-list.styles.css";

const habits = [
  { id: 1, name: "Morning Routine" },
  { id: 1, name: "Animals" },
  { id: 1, name: "Workout" },
  { id: 1, name: "After Work" },
  { id: 1, name: "Wind Down" },
];

const HabitList = () => {
  return (
    <div className="habit-list-container">
      <div className="habit-list-item">
        {habits.map((habit) => (
          <span key={habit.id}>{habit.name}</span>
        ))}
      </div>
    </div>
  );
};

export default HabitList;
