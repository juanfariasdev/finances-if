import { Menu } from "../components/menu";

export function Dashboard({ children }) {
  return (
    <div className="h-screen max-h-screen flex bg-gray-200">
      <side className="h-screen bg-zinc-900 text-white px-4 w-full max-w-[230px]">
        {/* LOGO */}
        <div className="text-center text-3xl font-bold my-3">JFBank.io</div>
        {/* MENU */}
        <Menu />
      </side>

      <main className="p-4 flex flex-1 max-h-screen overflow-y-clip">
        {children}
      </main>
    </div>
  );
}
