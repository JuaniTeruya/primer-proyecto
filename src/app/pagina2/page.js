"use client";

import clsx from 'clsx';
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useEffect, useState } from "react";
import Link from 'next/link';

export default function Contador() {
  const [estado, setEstado] = useState(false);
  const [contador, setContador] = useState(0);
  const [style, setStyle] = useState(false);

  useEffect(() => {
    if (contador >= 20) {
      setContador(0)
    } else if (contador <= -20) {
      setContador(0)
    }
  }, [ contador ])

  function aumDis() {
    if (estado == true) {
      setContador(contador - 1)
    } else {
      setContador(contador + 1)
    }
  }

  function checkbox(event) {
    setEstado(event.target.checked)
    setStyle(event.target.checked? true : false)
    console.log(style)
  }

  return (
    <>
      <Link href={".."}><Button text="Volver"></Button></Link>
      <Button onClick={aumDis} text="Aumentar o disminuir" style={style} />
      <Input onChange={checkbox} type="checkbox" />
      <p>Contador: {contador}</p>
    </>
  );
}
