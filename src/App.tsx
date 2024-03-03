import "./App.css";
import React from "react";
import Staff from "./pages/staff/Staff";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="pages_container">
        <Sidebar />
        <div className="outlet">
          <Staff />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
