import './App.css';
import React from 'react';
import Footer from './components/FooterTemp.jsx';
import Header from './components/HeaderTemp.jsx';
import { Routes, Route} from "react-router-dom"
import About from "./components/pages/about.jsx"
import Home from "./components/pages/main.jsx";


class App extends React.Component {


  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    );
  } 
}

export default App;
