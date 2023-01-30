import NuKenzie from "./pages/NuKenzie";
import DashBoard from "./pages/DashBoard";
import React, { useState } from "react";
import "./globalStyles.css";

function App() {
  const [page, setPage] = useState("LandingPage");
  return (
    <div className="App">
      {page === "LandingPage" ? (
        <NuKenzie setPage={setPage} />
      ) : (
        <DashBoard setPage={setPage} />
      )}
    </div>
  );
}

export default App;
