import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import TweetsPage from "./pages/TweetsPage";
import HomePage from "./pages/HomePage";
import Loader from "./components/Loader";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/tweets" element={<TweetsPage />} />
            <Route path="*" element={<Navigate to="/" replace="*" />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
