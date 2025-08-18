"use client"
import styles from "./Button.module.css";

export default function Link(props) {
    return (
      <>
        <a href={props.href}><button className={styles.button} >{props.text}</button></a>
      </>
    );
  }
  