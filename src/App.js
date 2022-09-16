import React from "react";
import { useState, useEffect, useCallback } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Soma from "./components/Soma";
import Principal from "./components/Principal";

export default function App() {
  const [timer, setTimer] = useState(false);
  const [tempo, setTempo] = useState(0);
  const [minVal, setMinVal] = useState(1);
  const [maxVal, setMaxVal] = useState(9);
  const [linha, setLinha] = useState(2);
  const [lista, setLista] = useState([]);

  let aleat = [];
  let navigate = useNavigate();

  const handleDeletarLista = () => {
    setLista([]);
    setTempo(0);
    navigate("/");
  };

  useEffect(() => {
    let interval = null;

    if (timer) {
      interval = setInterval(() => {
        setTempo((prevTempo) => prevTempo + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timer]);

  const handleNumAleat = () => {
    for (let i = 0; i < linha; i++) {
      aleat.push(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
      numAleat();
      console.log([...aleat]);
    }
    setTimer(true);
    navigate("/Soma");
  };

  const numAleat = useCallback(() => {
    setLista([...lista, ...aleat]);
  }, [minVal, maxVal, linha]);

  console.log([...lista]);
  console.log(minVal);
  console.log(maxVal);
  console.log(linha);

  const recebeMenor = (menor) => {
    setMinVal(menor);
  };

  const recebeMaior = (maior) => {
    setMaxVal(maior);
  };

  const recebeNumLinha = (numLinha) => {
    setLinha(numLinha);
  };

  const recebeTimer = (cmdTimer) => {
    setTimer(cmdTimer);
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Principal
              handleNumAleat={handleNumAleat}
              recebeMenor={recebeMenor}
              recebeMaior={recebeMaior}
              recebeNumLinha={recebeNumLinha}
            />
          }
        />
        <Route
          path="/Soma"
          element={
            <Soma
              handleDeletarLista={handleDeletarLista}
              recebeTimer={recebeTimer}
              tempo={tempo}
              dados={lista}
            />
          }
        />
      </Routes>
    </div>
  );
}
