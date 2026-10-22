import { Route, Routes } from "react-router";
import { HomePage, CreateEventPage, EventDetailsPage, SignInPage, SignUpPage, NotFoundPage } from "@/pages";

// import { MainLayout, ProtectedLayout } from "@/layout";
import { MainLayout } from "@/layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="new-event" element={<ProtectedLayout />}>
            <Route index element={<CreateEventPage />} />
          </Route> */}
          <Route path="events/create" element={<CreateEventPage />} />
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
