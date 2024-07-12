import { Todo } from "./types";

export const createTodoApi = () => {
  let data: Todo[] = [
    {
      id: 1,
      title: "Do Tanstack Query",
    },
    {
      id: 2,
      title: "Do Tanstack Router",
    },
    {
      id: 3,
      title: "Do Drizzle",
    },
  ];

  const getAll = async () => data;

  const getPage = async (page: number) => [data[page]];

  const add = async (todo: Todo) => {
    data.push(todo);
  };

  return {
    getAll,
    getPage,
    add,
  };
};
