import React from "react";
import { useState } from "react";
import "./Soma.css";

export default function Soma({
  handleDeletarLista,
  recebeTimer,
  tempo,
  dados,
}) {
  const [resultado, setResultado] = useState();
  const [meuNum, setMeuNum] = useState();
  const [final, setFinal] = useState(false);

  let minuto = ("0" + Math.floor((tempo / 60000) % 60)).slice(-2);
  let segundo = ("0" + Math.floor((tempo / 1000) % 60)).slice(-2);

  console.log(tempo);
  console.log(meuNum);
  console.log([...dados]);

  const handleResultado = () => {
    setResultado(
      dados.reduce((total, item) => {
        return total + item;
      })
    );
    recebeTimer(false);
    setFinal(true);
  };

  function Final() {
    if (final === false) {
      return null;
    }
    if (meuNum === resultado) {
      return (
        <div>
          <p className="texto__titulo">Parabéns, Você Acertou!!!</p>
          <div className="resultado__dado">
            <p className="resultado__dado-titulo">Seu Número</p>
            <span className="resultado__dado-numero">{meuNum}</span>
          </div>
          <div className="resultado__dado">
            <p className="resultado__dado-titulo">Resultado</p>
            <span className="resultado__dado-numero">{resultado}</span>
          </div>
          <p className="resultado__dado-titulo">Seu Tempo</p>
          <div>
            <span className="resultado__dado-numero">{minuto}:</span>
            <span className="resultado__dado-numero">{segundo}</span>
          </div>
        </div>
      );
    }
    return (
      <div>
        <p className="texto__titulo">
          Você Errou, Confira seu erro e tente de novo.
        </p>
        <div className="resultado__dado">
          <p className="resultado__dado-titulo">Seu Número</p>
          <span className="resultado__dado-numero">{meuNum}</span>
        </div>
        <div className="resultado__dado">
          <p className="resultado__dado-titulo">Resultado</p>
          <span className="resultado__dado-numero">{resultado}</span>
        </div>
        <p className="resultado__dado-titulo">Seu Tempo</p>
        <div>
          <span className="resultado__dado-numero">{minuto}:</span>
          <span className="resultado__dado-numero">{segundo}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Soroban - Resultado</h1>
      <div className="container__box">
        <div className="container__box__valores">
          <p className="container__box__valores-titulo">Lista</p>
          <ul className="container__box__valores__lista">
            {dados.map((item, index) => (
              <li className="container__box__valores__lista-dado" key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="container__box-resultado">
          <div className="entrada__resultado">
            <p className="entrada__resultado-titulo">Insira o seu resultado</p>
            <input
              className="entrada__resultado-dado"
              type="number"
              onChange={(e) => setMeuNum(+e.target.value)}
            />
          </div>
          <div>
            <Final />
          </div>
          <div className="botao__grupo">
            {!final && (
              <button className="botao__grupo-confere" onClick={handleResultado}>
              Conferir
              </button>
            )}
            {final && (
              <button
              className="botao__grupo-denovo"
              onClick={() => {
                handleDeletarLista();
                setResultado();
              }}
              >
              Novo Treino
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
