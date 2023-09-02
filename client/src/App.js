// import { useEffect } from 'react';
import "./App.css";
import Footer from "./components/Footer";

// COMPONENTS ----------------------------
import NavBar from "./components/NavBar";

// PAGES ----------------------------------
import ChatPage from "./pages/ChatPage";

const App = () => {
  return (
    <div className="App">
      <div className="App">
        <NavBar />
        <ChatPage />
        <Footer />
      </div>
    </div>
  );
};

export default App;
