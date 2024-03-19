import React from "react";
import { render } from "react-dom";

import Sayac from "./components/Sayac";
import Input from "./components/Input";
import RuhHalleri from "./components/RuhHalleri";
import Dondurucu from "./components/Dondurucu";
import Kareler from "./components/Kareler";
import Programcilar from "./components/Programcilar";
import Todos from "./components/Todos";
import TicTacToe from "./components/TicTacToe";

render(
  <>
    <Sayac />
    <RuhHalleri />
    <Dondurucu />
    <Input />
    <Kareler />
    <Programcilar />
    <Todos />
    <TicTacToe />
  </>,
  document.querySelector("#root")
);
