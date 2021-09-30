import "./css/main.css";
import React from "react";
import Header from "./Component/Header";
import Main from "./Component/Main";
import Footer from "./Component/Footer";

const App = () => {


  return (
    <div className="continner">
      <div id="home-section">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default App;
