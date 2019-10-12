import React, { Component } from "react";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contacts />
        <Footer />
      </div>
    );
  }
}

export default App;
