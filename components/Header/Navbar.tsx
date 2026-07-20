import React from "react";
import styles from "./Navbar.module.css";

import Navlink from "./Navlink";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Navlink href="/gallery">GALERIA</Navlink>
      <Navlink href="/collections">COLECCIONES</Navlink>
      <Navlink href="/pintores-pampeanos">PINTORES PAMPEANOS</Navlink>
      <Navlink href="/bio">BIO</Navlink>
      <Navlink href="/contact">CONTACTO</Navlink>
    </div>
  );
}
