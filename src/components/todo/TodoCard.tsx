import {
  TTodo,
  removeTodo,
  toggleCompleteTask,
} from "@/redux/features/TodoSlice";
import { useAppDispatch } from "@/redux/hook";

const TodoCard = ({ title, description, id, isCompleted, priority }: TTodo) => {
  const dispatch = useAppDispatch();

  return (
    <div className="bg-white p-3 rounded-sm px-5 flex items-center justify-between">
      <input
        className="w-5 h-5 cursor-pointer mr-4"
        onClick={() => dispatch(toggleCompleteTask(id))}
        type="checkbox"
      />
      <p className="font-medium flex-[2]">{title}</p>
      <div className="flex-1 flex items-center gap-1">
        <div
          className={`size-3 rounded-full
          ${priority === "high" && "bg-red-600"}          
          ${priority === "medium" && "bg-yellow-500"}          
          ${priority === "low" && "bg-green-500"}          
          `}
        ></div>
        <p className="capitalize">{priority}</p>
      </div>
      <div className="flex-1">
        {isCompleted ? (
          <p className="text-green-500">Completed</p>
        ) : (
          <p className="text-red-400">Pending</p>
        )}
      </div>
      <p className="flex-[2]">{description}</p>
      <div className="flex items-center gap-4 justify-end flex-1">
        <button
          className="bg-red-600 rounded-md text-white p-2"
          onClick={() => dispatch(removeTodo(id))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
        <button className="bg-green-600 rounded-md text-white p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
