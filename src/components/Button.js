"use client"

export default function Button(props) {
    return (
      <>
        <button onClick={props.onClcik}>{props.text}</button>
      </>
    );
  }
  