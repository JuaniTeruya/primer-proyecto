"use client"

export default function Link(props) {
    return (
      <>
        <a href={props.href}><button>{props.text}</button></a>
      </>
    );
  }
  