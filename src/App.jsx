import LinksCard from "./components/LinksCard.jsx";
import Footer from "./components/Footer.jsx";
import { Routes, Route } from "react-router-dom";
import Working from "./pages/Working.jsx";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<LinksCard />} />
        <Route path="/working" element={<Working />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
