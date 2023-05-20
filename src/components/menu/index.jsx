import { Graph, House } from "@phosphor-icons/react";

export function Menu() {
  return (
    <nav className="flex flex-col gap-2">
      <a
        href="#a"
        className="flex p-2 gap-2 items-center bg-emerald-600 rounded"
      >
        {/* ICON */}
        <House weight="fill" size={28} />
        {/* TEXTO */}
        <span className="font-medium">Início</span>
      </a>
      <a href="#a" className="flex p-2 gap-2 items-center rounded">
        {/* ICON */}
        <Graph weight="fill" size={28} />
        {/* TEXTO */}
        <span className="">Finanças</span>
      </a>
    </nav>
  );
}
