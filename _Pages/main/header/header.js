"use client"


import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { numero } from "@/_Pages/numero.json";

const WA_LINK = `https://wa.me/${numero}?text=Hola%2C%20quiero%20pedir%20mi%20usuario%20para%20jugar`;

const navLinks = [
  { href: "#beneficios", label: "Beneficios" },
  { href: "#juegos",     label: "Juegos" },
  { href: "#bonos",      label: "Bonos" },
  { href: "#opiniones",  label: "Opiniones" },
  { href: "#contacto",   label: "Contacto" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  function close() { setMobileOpen(false); }

  function handleNavClick(e, href) {
    close();
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <header className={styles.topbar}>
      <div className={`${styles.container} ${styles.topbarInner}`}>

        <Link href="/" className={styles.brand}>
          <img src="/logo.png" alt="GanamosDiversion" className={styles.brandLogo} />
        </Link>

        <nav className={styles.nav}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => handleNavClick(e, l.href)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a className={`${styles.btn} ${styles.btnSecondary}`} href="#juegos"
             onClick={(e) => handleNavClick(e, "#juegos")}>
            Ver juegos
          </a>
          <a className={`${styles.btn} ${styles.btnPrimary}`} href={WA_LINK} target="_blank" rel="noreferrer">
            <ion-icon name="logo-whatsapp" /> Pide tu usuario
          </a>
          <button
            className={styles.menuToggle}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            <ion-icon name="menu" />
          </button>
        </div>
      </div>

      <div
        className={`${styles.drawerOverlay} ${mobileOpen ? styles.open : ""}`}
        onClick={close}
      />

      <div className={`${styles.mobileNav} ${mobileOpen ? styles.open : ""}`}>
        <button className={styles.drawerClose} onClick={close} aria-label="Cerrar">
          <ion-icon name="close" />
        </button>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} onClick={(e) => handleNavClick(e, l.href)}>
            {l.label}
          </a>
        ))}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className={`${styles.btn} ${styles.btnPrimary}`}
          style={{ justifyContent: "center", marginTop: "10px" }}
        >
          <ion-icon name="logo-whatsapp" /> Pide tu usuario
        </a>
      </div>
    </header>
  );
}