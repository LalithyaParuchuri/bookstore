import { RouterProvider } from "react-router-dom";
import { Header } from "./components/header";
import { router } from "./router";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ padding: 20 }}>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
