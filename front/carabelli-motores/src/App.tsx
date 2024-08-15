import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.tsx";
import Home from "./Pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
