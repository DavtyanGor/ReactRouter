import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contacts from "./Components/Contacts";
import Pages from "./Components/Pages";
import Param from "./Components/Param";
import Posts from "./Components/Posts";
import Header from "./Components/Header";

function App() {
  return (
    <>
    <Header/>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/param" element={<Param />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
    </>
  );
}

export default App;
