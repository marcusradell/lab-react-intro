import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";

const Data = () => {
  return "no data";
};

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>Lab React Intro</h1>
      <Data />
    </QueryClientProvider>
  );
}

export default App;
