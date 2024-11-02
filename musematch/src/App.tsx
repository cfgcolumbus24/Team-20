import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import { Main } from "./pages/main";
import LoginPage from "./pages/login";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer"; // Import Footer
import { Connections } from "./pages/connections";
import { Matching } from "./pages/matching";
import { Events } from "./pages/events";
import { Profile } from "./pages/user-profile";

export const apiURL = import.meta.env.VITE_API_URL;
export const TokenContext = createContext<{
  token: string | null;
  setToken: (token: string | null) => void;
}>({ token: null, setToken: () => {} });

function App() {
  const [token, setToken] = useState<null | string>(null);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <div style={{ height: "100%", width: "100%" }}>
        <Router>
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/events" element={<Events />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/matching" element={<Matching />} />
              <Route path="/user-profile" element={<Profile />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </TokenContext.Provider>
  );
}

export default App;
