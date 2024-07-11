import { Todo } from "./types";

export const createTodoApi = () => {
  let data = [
    {
      id: Date.now(),
      title: "Do Tanstack Query",
    },
  ] as Todo[];

  const getAll = async () => data;

  const add = async (todo: Todo) => {
    data.push(todo);
  };

  return {
    getAll,
    add,
  };
};
