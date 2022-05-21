import "./App.css";
import Home from "./components/pages/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { Routes, Route } from "react-router-dom";
import Services from "./components/pages/services/Services";
import Category from "./components/pages/category/Category";

function App() {
  return (
      <div className="App">
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/category" element={<Category />} /> 
          </Routes>
        </div>
      </div>
  );
}

export default App;
