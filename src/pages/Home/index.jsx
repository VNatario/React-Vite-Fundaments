import "./styles.css";
import { Card } from "../../components/Card";

export function Home() {
  return (
    <div className="container">
      <h1>Lista de Presença</h1>
      <input type="text" placeholder="Digite o nome..." />
      <button type="burron">Adicionar</button>

      <Card name="Carlos" time="16:51:23" />
      <Card name="Roberto" time="16:57:42" />
    </div>
  );
}
