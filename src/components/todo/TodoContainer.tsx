import TodoCard from "./TodoCard";
import AddTodoModal from "./AddTodoModal";
import FilterDropdown from "./FilterDropdown";
import { useGetTodosQuery } from "@/redux/api/api";
import { TTodo } from "@/redux/features/TodoSlice";

const TodoContainer = () => {
  const { data: todos, error, isLoading } = useGetTodosQuery(undefined);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>error!</p>;
  }
  console.log(todos.data);

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between gap-5">
        <AddTodoModal />
        <FilterDropdown />
      </div>
      <div className="bg-slate-200 p-8 w-full rounded-md mt-5 space-y-3">
        {todos.data.length > 0 ? (
          todos.data.map((todo: TTodo) => (
            <TodoCard
              priority={todo.priority}
              key={todo.id}
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
