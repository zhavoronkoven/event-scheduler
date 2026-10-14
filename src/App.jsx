import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CreateEventPage from "./pages/CreateEventPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="neu" element={<CreateEventPage />} />
            <Route path="details" element={<EventDetailsPage />} />
            <Route path="anmelden" element={<SignInPage />} />
            <Route path="registrieren" element={<SignUpPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
