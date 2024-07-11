import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { createTodoApi } from "./todo-api";

const todoApi = createTodoApi();

export const Todos = () => {
  const queryClient = useQueryClient();

  const query = useQuery({ queryKey: ["todos"], queryFn: todoApi.getAll });

  const mutation = useMutation({
    mutationFn: todoApi.add,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return (
    <div>
      <ul>
        {query.data?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: "Do Laundry",
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
};
