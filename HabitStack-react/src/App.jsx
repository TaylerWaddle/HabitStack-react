import "./App.css";
import TimeLine from "./components/timeline/timeline.component";
import HabitList from "./components/habit-list/habit-list.component";

const App = () => {
  return (
    <div>
      <HabitList></HabitList>
      <TimeLine></TimeLine>
    </div>
  );
};

export default App;
