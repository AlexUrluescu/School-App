// import { useEffect } from 'react';
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES ----------------------------------
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contiChat" element={<ChatPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
