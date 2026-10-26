import { Route, Routes } from "react-router";

import { HomePage, EventsMap, CreateEventPage, EventDetailsPage, SignInPage, SignUpPage, NotFoundPage } from "@/pages";

import { MainLayout, ProtectedLayout } from "@/layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />

          <Route path="map" element={<EventsMap />} />

          <Route element={<ProtectedLayout />}>
            <Route path="events/create" element={<CreateEventPage />} />
          </Route>

          <Route path="events/:id" element={<EventDetailsPage />} />

          <Route path="login" element={<SignInPage />} />

          <Route path="register" element={<SignUpPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
