import { CurrencyDollar } from "@phosphor-icons/react";
import { useState } from "react";

function App() {
  const [tabela, setTabela] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  const total = tabela.reduce((acc, item) => acc + item.value, 0).toFixed(2);
  const entrada = tabela
    .reduce((acc, item) => (item.value > 0 ? acc + item.value : acc), 0)
    .toFixed(2);
  const saida = tabela
    .reduce((acc, item) => (item.value < 0 ? acc + item.value : acc), 0)
    .toFixed(2);

  const handleAddTable = (value) => {
    const item = [...tabela, value];
    setTabela(item);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isNaN(price)) {
      alert("Digite um valor válido");
      return;
    }

    const newValue = {
      id: 1,
      title,
      desc,
      value: Number(price),
    };

    handleAddTable(newValue);
    setTitle("");
    setDesc("");
    setPrice("");
  };

  return (
    <div className="flex flex-col flex-1">
      <h2 className="text-2xl font-bold">Finanças</h2>
      <div className="flex-1 flex h-full gap-2">
        <section className="flex flex-col gap-2">
          <article className="bg-white p-4 rounded shadow">
            <section className="flex flex-col gap-2">
              <article className="flex items-center justify-center text-center">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col text-sm">
                    Saldo
                    <span className="font-bold text-2xl">R${total}</span>
                  </div>
                </div>
              </article>
              <article className="flex gap-2 text-center justify-center">
                <div className="flex flex-col text-sm">
                  Entrada
                  <span className="font-bold text-xl">R${entrada}</span>
                </div>
                <div className="flex flex-col text-sm">
                  Saida
                  <span className="font-bold text-xl">R${saida}</span>
                </div>
              </article>
            </section>
          </article>

          <article className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold">Cadastrar</h3>
            <form className="flex flex-col gap-2 mt-1" onSubmit={handleSubmit}>
              <div className="flex flex-col text-sm">
                <label htmlFor="title">Título</label>
                <input
                  id="title"
                  className="border shadow-md p-2 rounded"
                  placeholder="Digite o Título"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="flex flex-col text-sm">
                <label htmlFor="desc">Descrição</label>
                <input
                  id="desc"
                  className="border shadow-md p-2 rounded"
                  placeholder="Digite a Descrição"
                  type="text"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
              <div className="flex flex-col text-sm">
                <label htmlFor="price">Valor</label>
                <input
                  id="price"
                  className="border shadow-md p-2 rounded"
                  placeholder="Digite o Valor"
                  type="number"
                  step="0.01"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <button
                className="bg-emerald-700 text-white mt-2 p-2 rounded"
                type="submit"
              >
                Cadastrar
              </button>
            </form>
          </article>
        </section>
        <section className="flex-1">
          <section className="bg-white pl-4 py-4 pb-2 rounded shadow">
            <h2 className="text-2xl font-bold">Lista</h2>
            <ul className="border-t flex flex-col gap-2 mt-2 pr-2 py-2 mr-2 flex-1 overflow-y-scroll max-h-[calc(100vh-130px)]">
              {tabela.map((item, idx) => (
                <li
                  key={idx}
                  className="border p-1 px-2 rounded flex gap-2 items-center"
                >
                  <div className="bg-yellow-400 rounded p-2">
                    <CurrencyDollar size={26} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{item.title}</p>
                    <p>{item.desc}</p>
                  </div>
                  <div>
                    <h4
                      className={`font-medium ${
                        item.value < 0 ? "text-red-600" : "text-green-600"
                      }`}
                    >
                      R${Math.abs(item.value).toFixed(2)}
                    </h4>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </div>
    </div>
  );
}

export default App;
