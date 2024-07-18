import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const StackList = ({ habits }) => {
  return (
    <div className="habit-list-container">
      <SortableContext items={habits} strategy={verticalListSortingStrategy}>
        {habits.map((habit) => (
          <span key={habit.id}>{habit.name}</span>
        ))}
      </SortableContext>
    </div>
  );
};

export default StackList;
