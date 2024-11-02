import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Main } from "./pages/main";
import { Login } from "./pages/login";
import { Navbar } from "./components/navbar";
import { Matching } from "./pages/matching";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/matching" element={<Matching/>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
