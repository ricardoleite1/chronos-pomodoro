import "./App.css";
import { MessagesContainer } from "./components/MessagesContainer";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { Router } from "./routers/Router";

export function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <Router />
      </MessagesContainer>
    </TaskContextProvider>
  );
}
