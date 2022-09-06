import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Home, Navigation, Page2} from "./components"
import "./App.css";

function App() {
  return (
    <Router>
      <Navigation />
        <Routes>
          <Route Path="/Home" element={<Home />} />
          <Route Path="/Page2" element={<Page2 />} />
        </Routes>
      
    </Router>
  );
}
export default App;
