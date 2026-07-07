import "./App.css";
import "./styles/shared.scss";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./store/routes";
import { HomePage } from "./pages/HomePage/HomePage";
import { DogsPage } from "./pages/DogsPage/DogsPage";
import { StoriesPage } from "./pages/StoriesPage/StoriesPage";
import { DonatePage } from "./pages/DonatePage/DonatePage";
import { VolunteeringPage } from "./pages/VolunteeringPage/VolunteeringPage";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { PawCursor } from "./components/PawCursor/PawCursor";
import { DonateProvider } from "./components/DonateModal/DonateContext";
import { DonateModal } from "./components/DonateModal/DonateModal";

function App() {
  return (
    <DonateProvider>
      <PawCursor />
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          <Route index path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.DOGS} element={<DogsPage />} />
          <Route path={ROUTES.STORIES} element={<StoriesPage />} />
          <Route path={ROUTES.DONATE} element={<DonatePage />} />
          <Route path={ROUTES.VOLUNTEER} element={<VolunteeringPage />} />
          <Route path={ROUTES.NOT_FOUND} element={<HomePage />} />
        </Routes>
      </main>

      <Footer />
      <DonateModal />
    </DonateProvider>
  );
}

export default App;
