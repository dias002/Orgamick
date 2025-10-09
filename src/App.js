import './App.css';
import Footer from './components/FooterTemp.jsx';
import Header from './components/HeaderTemp.jsx';
import Main from './components/MainTemp.jsx';
import { Routes, Route } from "react-router-dom";
import About from "./components/pages/about.jsx";
import MainPage from "./components/pages/main.jsx";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />   
        <Route path="/about" element={<About />} />
      </Routes>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
