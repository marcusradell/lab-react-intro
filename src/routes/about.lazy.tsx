import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="p-2">
      This app shows how to get started with Tanstack Query and Tanstack Router.
    </div>
  );
}
