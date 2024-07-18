import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Stack from "../stack/stack.component";

const StackList = ({ stacks }) => {
  return (
    <div className="habit-list-container">
      <SortableContext items={stacks} strategy={verticalListSortingStrategy}>
        {stacks.map((stack) => (
          <Stack key={stack.id} title={stack.title} id={stack.id}></Stack>
        ))}
      </SortableContext>
    </div>
  );
};

export default StackList;
