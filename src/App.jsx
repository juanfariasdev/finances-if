import { Route, Router, Routes } from "react-router-dom";
import { Finance } from "./pages/project";
import { Home } from "./pages/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/finance" element={<Finance />} />
    </Routes>
  );
}

export default App;
