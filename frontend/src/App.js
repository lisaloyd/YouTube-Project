// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SearchPage from "./components/SearchPage/SearchPage"
import VideoPage from "./components/VideoPage/VideoPage"
import SearchBar from "./components/SearchBar/SearchBar";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import axios from "axios";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search" element={<SearchBar />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
