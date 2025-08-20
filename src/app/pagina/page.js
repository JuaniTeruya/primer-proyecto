"use client"

import Button from "@/components/Button";
import Form from "@/components/Form";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function LoginPage() {

  const router = useRouter()
  const [logged, setLogged] = useState(false);
  const [nombre, setNombre] = useState("");

  function login(event){
    if (nombre == "Juani") {
      setLogged(true)
      router.push("/pagina2")
    }else{
      setLogged(false)
      router.push("/")

    }
  }

  function guardar(event){
    setNombre(event.target.value)
  }
  
  return (
    <>
    <Form placeholder1={"nombre"} type1={"text"} type2={"checkbox"} onClick={login} text={"El pepe"} onChange={guardar}></Form>
    <Link href={".."}><Button text="Volver"></Button></Link>
   </> 
  )
}
