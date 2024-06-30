import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <h1 className="text-center pt-12 text-4xl font-semibold">My Todo</h1>
      <TodoContainer />
    </Container>
  );
};

export default Todo;
