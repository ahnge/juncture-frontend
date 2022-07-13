import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import { useStore } from "./hooks/useStore";
import Home from "./Pages/Home";
import ResetPassword from "./Components/ResetPassword";
import JobPosting from "./Pages/JobPosting";
import EmailTemplate from "./Components/EmailTemplate";
import EmailPopUp from "./Components/EmailPopUp";
import Layout from "./Components/Layout";
import Navbar from "./Components/Navbar";
import SearchCandicates from "./Components/SearchPage/SearchCandicates";

function App() {
  const { user } = useStore();

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to="login" />} />
          <Route
            path="/login"
            element={!user ? <LoginPage /> : <Navigate to="/" />}
          />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/jobPosting" element={<JobPosting />} />
          <Route path="emailTemplate" element={<EmailTemplate />} />
          <Route path="/emailTemplate/:id" element={<EmailPopUp />} />
          <Route path="/search" element={<SearchCandicates />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
