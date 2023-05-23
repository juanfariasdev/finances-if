import { Graph, House } from "@phosphor-icons/react";
import { MenuItem } from "./item";

export function Menu() {
  return (
    <nav className="flex flex-col gap-2">
      <MenuItem
        icon={<House weight="fill" size={28} />}
        url="/"
        text="Início"
      />
      <MenuItem
        url="/finance"
        icon={<Graph weight="fill" size={28} />}
        text="Projeto"
      />
    </nav>
  );
}
