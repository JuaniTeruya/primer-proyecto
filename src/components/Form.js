"use client"

import Input from "@/components/Input";
import Button from "@/components/Button";

export default function Form(props) {
    return (
      <>
        <Input placeholder={props.placeholder1} type={props.type1}></Input>
        <Input placeholder={""} type={props.type2}></Input>
        <Button onClick={props.onClick} text={props.text}></Button>
      </>
    );
  }
  