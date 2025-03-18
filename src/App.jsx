import React from "react";
import SideBar from "./components/SideBar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="min-h-dvh w-screen bg-slate-50">
      <SideBar />
      <Hero />
    </div>
  );
};

export default App;
