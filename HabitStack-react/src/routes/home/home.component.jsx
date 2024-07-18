import HabitList from "../../components/habit-list/habit-list.component";
import TimeLine from "../../components/timeline/timeline.component";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <HabitList></HabitList>
      <TimeLine></TimeLine>
    </Fragment>
  );
};

export default Home;
