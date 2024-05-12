import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import {Create} from "./Pages";

function App() {
  return (
  <div className="App">
    <Navbar />
      <Routes>
        <Route path="/Create" element={<Create />} />

      </Routes>
  </div>
  );
}

export default App;
