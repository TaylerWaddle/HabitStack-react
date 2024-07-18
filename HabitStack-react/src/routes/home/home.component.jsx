import TimeLine from "../../components/timeline/timeline.component";
import "./home.styles.scss";
import { closestCorners } from "@dnd-kit/core";
import { DndContext } from "@dnd-kit/core";
import { useState } from "react";
import StackList from "../../components/stack-list/stack-list.component.jsx";
import { arrayMove } from "@dnd-kit/sortable";

const Home = () => {
  const [stacks, setStacks] = useState([
    { id: 1, title: "Morning Routine" },
    { id: 2, title: "Animals" },
    { id: 3, title: "Workout" },
    { id: 4, title: "After Work" },
    { id: 5, title: "Wind Down" },
  ]);

  const getStackPos = (id) => stacks.findIndex((stack) => stack.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) {
      return;
    }
    setStacks((stacks) => {
      const originalPos = getStackPos(active.id);
      const newPos = getStackPos(over.id);

      return arrayMove(stacks, originalPos, newPos);
    });
  };

  return (
    <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
      <StackList stacks={stacks}></StackList>
      <TimeLine></TimeLine>
    </DndContext>
  );
};

export default Home;
