import TodoCard from "./TodoCard";
import AddTodoModal from "./AddTodoModal";
import FilterDropdown from "./FilterDropdown";
import { useAppSelector } from "@/redux/hook";

const TodoContainer = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between gap-5">
        <AddTodoModal />
        <FilterDropdown />
      </div>
      <div className="bg-slate-200 p-8 w-full rounded-md mt-5 space-y-3">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <TodoCard
              id={todo.id}
              title={todo.title}
              description={todo.description}
              isCompleted={todo.isCompleted}
            />
          ))
        ) : (
          <div className="bg-white p-3 rounded-sm px-5 font-medium flex items-center justify-center">
            <p>There is no pending task!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoContainer;
