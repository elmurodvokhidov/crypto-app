import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import Register from "./pages/register/register";
import Login from "./pages/login/login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* navbar */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        {/* footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
