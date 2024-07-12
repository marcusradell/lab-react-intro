import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import { createTodoApi } from "./todo-api";
import { useState } from "react";

const todoApi = createTodoApi();

export const Todos = () => {
  const [page, setPage] = useState(0);

  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ["todos", page],
    queryFn: () => todoApi.getPage(page),
  });

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
      {page}
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next Page
      </button>
    </div>
  );
};
