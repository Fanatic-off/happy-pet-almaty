import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./store/routes";
import { HomePage } from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route index path={ROUTES.HOME} element={<HomePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
