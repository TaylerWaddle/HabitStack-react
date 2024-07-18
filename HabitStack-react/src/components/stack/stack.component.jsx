import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "./stack.styles.scss";

const Stack = ({ id, title }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="stack-container"
    >
      <input type="checkbox" className="checkbox" />
      <span className="stack-title">{title}</span>
    </div>
  );
};

export default Stack;
