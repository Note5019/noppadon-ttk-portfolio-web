import { Outlet } from "react-router";

export default function BlankPageLayout() {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <Outlet />
    </main>
  );
}
