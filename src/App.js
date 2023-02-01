import { RouterProvider } from "react-router-dom";
import { Header } from "./components/header";
import { router } from "./router";

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
