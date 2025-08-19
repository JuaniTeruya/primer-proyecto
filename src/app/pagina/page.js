"use client"

import Button from "@/components/Button";
import Form from "@/components/Form";
import Link from 'next/link';
import { useRouter } from "next/router";
export default function LoginPage() {

  const router = useRouter();
  const [logged, setLogged] = useState(false);

  function login(){
    if(logged == true){
      router.push("pagina2")
    }
  }
  
  return (
    <>
    <Form placeholder1={"nombre"} type1={"text"} type2={"checkbox"} onClick={login} text={"El pepe"}></Form>
    <Link href={".."}><Button text="Volver"></Button></Link>
   </> 
  )
}
