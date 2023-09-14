// Impport style ---------------------
import "./App.css";

// Import react router dom ------------------------------------------
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES ----------------------------------
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import FirstYearPage from "./pages/FirstYearPage";
import SecondYearPage from "./pages/SecondYearPage";
import ThirdYearPage from "./pages/ThirdYearPage";
import FourthYearPage from "./pages/FourthYearPage";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contiChat" element={<ChatPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/firstyear" element={<FirstYearPage />} />
          <Route path="/firstyear/matematicispeciale" element={<ChatPage title="Matematici Speciale"/>} />
          <Route path="/firstyear/programare" element={<ChatPage title="Programare"/>} />
          <Route path="/firstyear/fizica" element={<ChatPage title="Fizica"/>} />
          <Route path="/firstyear/comunicare" element={<ChatPage title="Tehnici de Comunicare"/>} />
          <Route path="/secondyear" element={<SecondYearPage />} />
          <Route path="/thirdyear" element={<ThirdYearPage />} />
          <Route path="/fourthyear" element={<FourthYearPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
