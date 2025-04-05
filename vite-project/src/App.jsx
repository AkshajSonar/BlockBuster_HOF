import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import IssuerPage from "./pages/IssuerPage";
import UserPage from "./pages/UserPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/issuer" element={<IssuerPage />} />
      <Route path="/user" element={<UserPage />} />
    </Routes>
  );
}
