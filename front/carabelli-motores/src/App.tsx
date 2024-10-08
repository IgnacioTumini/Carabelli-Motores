import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header.tsx";
import Home from "./Pages/Home/Home";
import NotFoundScreen from "./Pages/NotFound/NotFoundScreen.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* dejar en la ultima linea */}
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
