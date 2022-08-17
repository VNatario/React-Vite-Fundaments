import React, { useState } from "react";
import "./styles.css";
import { Card } from "../../components/Card";

export function Home() {
  const [studentName, setStudentName] = useState("");

  return (
    <div className="container">
      <h1>Nome: {studentName}</h1>
      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button type="burron">Adicionar</button>

      <Card name="Carlos" time="16:51:23" />
      <Card name="Juliana" time="14:57:42" />
    </div>
  );
}
