import { createLazyFileRoute } from "@tanstack/react-router";
import { Todos } from "../todos";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <Todos />
    </div>
  );
}
