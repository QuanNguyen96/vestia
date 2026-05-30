import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      {/* HEADER VESTIA */}
      <header>
        VESTIA Header
      </header>

      <main>
        <Outlet />
      </main>

      {/* FOOTER VESTIA */}
      <footer>
        VESTIA Footer
      </footer>
    </>
  );
}