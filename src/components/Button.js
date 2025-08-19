
"use client"
import clsx from 'clsx';
import styles from "./Button.module.css";
export default function Button(props) {

    return (
      <>
        <button className={clsx({
          [styles.button]: true, 
          [styles.decremento] : props.style == true,
        })} onClick={props.onClick}>{props.text}</button>
      </>
    );
  }
  