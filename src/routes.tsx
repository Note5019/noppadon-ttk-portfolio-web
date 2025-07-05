import { Routes, Route } from "react-router";
import DefaultPageLayout from "./layouts/DefaultPageLayout";
import Homepage from "./pages/Homepage";
import BlankPageLayout from "./layouts/BlankPageLayout";
import NotFound from "./pages/NotFound";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<DefaultPageLayout />}>
        <Route index element={<Homepage />} />

        {/* projects */}
        {/* resume */}
        {/* about me */}
      </Route>

      <Route path="*" element={<BlankPageLayout />}>
        <Route path="*" index element={<NotFound />} />
      </Route>
    </Routes>
  );
}
