import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./store/routes";
import { HomePage } from "./pages/HomePage/HomePage";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route index path={ROUTES.HOME} element={<HomePage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
