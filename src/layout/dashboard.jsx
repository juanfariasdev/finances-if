import { Menu } from "../components/menu";

export function Dashboard({ children }) {
  return (
    <div className="h-screen max-h-screen flex bg-gray-200">
      <aside className="flex flex-col h-screen justify-between bg-zinc-900 text-white px-4 w-full max-w-[230px]">
        <div>
          {/* LOGO */}
          <div className="text-center text-3xl font-bold my-3">JFBank.io</div>
          {/* MENU */}
          <Menu />
        </div>
        <div className="flex gap-1 items-center py-3">
          <img
            src="https://github.com/juanfariasdev.png"
            className="w-16 h-16 rounded-full"
            alt=""
          />
          <div>
            <a
              href="https://juanpablofarias.com"
              target="_blank"
              rel="noreferrer"
              className="text-base font-bold hover:text-green-500 transition-all"
            >
              Juan Pablo Farias
            </a>
            <h4 className="text-sm">Gestor de Projetos</h4>
            <h4 className="text-sm">Chefe de equipe</h4>
            <h4 className="text-sm">Full-Stack</h4>
          </div>
        </div>
      </aside>

      <main className="p-4 flex-1 max-h-screen overflow-y-clip">
        {children}
      </main>
    </div>
  );
}
