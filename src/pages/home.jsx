export function Home() {
  return (
    <div className="h-full w-full flex justify-center items-center flex-col">
      <h1 className="text-4xl font-bold">Seja muito bem vindo!</h1>
      <div>
        <h2 className="text-2xl font-bold">
          Nesse mini curso você irá aprender
        </h2>
        <ul className="text-center text-xl pt-3">
          <li>Conceitos básicos do React</li>
          <li>Estrutura básicas</li>
          <li>Funções</li>
          <li>Componentes</li>
          <li>Rotas</li>
          <li>Estado</li>
        </ul>
      </div>
    </div>
  );
}
