import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Main } from "./pages/main";
import  Login  from "./pages/login";
import { Navbar } from "./components/navbar";
import { Connections } from "./pages/connections";

function App() {
  return (
    <>
      <div>
        
        <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/connections" element={<Connections />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
