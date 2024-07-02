import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useAppDispatch } from "@/redux/hook";
import { addTodo } from "@/redux/features/TodoSlice";

const AddTodoModal = () => {
  // for local state management
  const dispatch = useAppDispatch();
  const [description, setDescription] = useState("");

  const [title, setTitle] = useState("");

  // handle form submit
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const id = Math.random().toString(36).substring(2, 7);
    const todo = { id, title, description };
    dispatch(addTodo(todo));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a New Task</DialogTitle>
          <DialogDescription>
            Add the task that you wanna finish!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Title" className="text-right">
              Title
            </Label>
            <Input
              onBlur={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
              id="Title"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              onBlur={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
              id="description"
              className="col-span-3"
            />
          </div>
          <div className="ml-auto">
            <DialogClose asChild>
              <Button type="submit">Add Task</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
