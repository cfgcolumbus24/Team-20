import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Main } from "./pages/main";
import { Login } from "./pages/login";
import { Navbar } from "./components/navbar";
import { Connections } from "./pages/connections";
import { Matching } from "./pages/matching";
import { Profile } from "./pages/user-profile";

function App() {
  return (
    <>
      <div style={{height:'100%', width: '100%'
      }}>
        <Router>
          <Navbar />
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{'max-width': '1280px'}}>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/connections" element={<Connections />} />
                <Route path="/matching" element={<Matching />} />
                <Route path="/user-profile" element={<Profile />} />
              </Routes>
            </div>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;

