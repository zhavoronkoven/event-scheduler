import { Route, Routes } from "react-router";
import {
  HomePage,
  CreateEventPage,
  EventDetailsPage,
  SignInPage,
  SignUpPage,
} from "./pages";

import { MainLayout } from "./layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="new-event" element={<CreateEventPage />} />
          <Route path="events/:title" element={<EventDetailsPage />} />
          <Route path="login" element={<SignInPage />} />
          <Route path="register" element={<SignUpPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
