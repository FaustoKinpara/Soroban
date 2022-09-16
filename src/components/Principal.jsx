import React from "react";
import { useState, useEffect } from "react";
import "./Principal.css";

export default function Principal({
  handleNumAleat,
  recebeMenor,
  recebeMaior,
  recebeNumLinha,
}) {
  const [minVal, setMinVal] = useState(1);
  const [maxVal, setMaxVal] = useState(9);
  const [linha, setLinha] = useState(2);

  useEffect(() => {
    recebeMenor(minVal);
    recebeMaior(maxVal);
    recebeNumLinha(linha);
  });

  return (
    <div className="container">
      <h1>Soroban - Tabela de Treino</h1>
      <div className="container__box">
        <div className="container__box-texto">
          <p className="texto__titulo">Crie sua tabela, para praticar o uso do Soroban</p>
          <p className="texto__subtitulo">Selecione os valores desejados.</p>
          <p className="texto__ajuda">
            Estes valores podem ser selecionados através dos valores <b>Mínimo</b> e <b>Máximo</b>, 
            recomendo a seleção baseada em quantidades de unidades (por exemplo: 10 a 99, 100 a 999, 1000 a 9999), 
            mas nada impede de escolher qualquer valor, unicamente respeitando o <b>Máximo</b> maior que o <b>Mínimo</b>.
          </p>
          <p className="texto__ajuda">
            Não esqueça de selecionar a quantidade de linhas desejadas no <b>Número de Linhas</b>.
            Ao ultrapassar o limite de linhas na tela, esta criará uma nova coluna. 
            Mas esta poderá gerar problemas dependendo do número de linhas e o tamanho dos números pedidos.
          </p>
          <p className="texto__ajuda">
            Ao final, coloque seu resultado e clique no botão <b>Conferir</b>, este
            mostrará se acertou ou errou e seu tempo.
          </p>
          <p className="texto__ajuda">
            Verifique onde errou, pois a lista estará presente e se quiser pode
            pedir um novo conjunto de número
          </p>
          <p className="texto__titulo">Boa prática. Vamos praticar?</p>
        </div>
        <div className="container__box-seletor">
        <div className="entrada__grupo">
          <p className="entrada__grupo-titulo">Mínimo:</p>
          <input
            className="entrada__grupo-dado"
            type="number"
            min={0}
            value={minVal}
            onChange={(e) => setMinVal(+e.target.value)}
          />
        </div>
        <div className="entrada__grupo">
          <p className="entrada__grupo-titulo">Máximo:</p>
          <input
            className="entrada__grupo-dado"
            type="number"
            min={1}
            value={maxVal}
            onChange={(e) => setMaxVal(+e.target.value)}
          />
        </div>
        <div className="entrada__grupo">
          <p className="entrada__grupo-titulo">Número de Linhas:</p>
          <input
            className="entrada__grupo-dado"
            type="number"
            min={1}
            value={linha}
            onChange={(e) => setLinha(+e.target.value)}
          />
        </div>
        <div>
          <button className="botao" onClick={() => handleNumAleat()}>Gerar Número</button>
        </div>
        </div>
      </div>
    </div>
  );
}
