"use client"

import Form from "@/components/Form";
import Link from "@/components/link";
export default function LoginPage() {
  function xd(){
    alert("Me gusta la lluvia")
  }
  
  return (
    <>
    <Form placeholder1={"XD"} type1={"text"} type2={"checkbox"} onClick={xd} text={"El pepe"}></Form>
    <Link href={".."} text={"Volver"}></Link>
   </> 
  )
}
