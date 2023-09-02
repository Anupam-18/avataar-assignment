import React from "react";
import ResponsiveNavbar from "./components/ResponsiveNavbar";
import "./App.css";
const App = () => {
  const navItems = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Contact",
    "Test1",
    "Test2",
    "Test3",
    "Test4",
    "Test5",
    "Test6",
  ];

  return (
    <div className="app">
      <ResponsiveNavbar items={navItems} />
    </div>
  );
};

export default App;
