import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/home"
import Nav from "./pages/Nav";
function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        
        <Route path="/" element={<Home/>}>
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
