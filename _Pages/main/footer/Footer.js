import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import { numero } from "@/_Pages/numero.json";

const WA = `https://wa.me/${numero}?text=Hola%2C%20quiero%20pedir%20mi%20usuario%20para%20jugar`;

const navLinks = [
  { href: "#beneficios",           label: "Beneficios" },
  { href: "#juegos",               label: "Juegos" },
  { href: "#bonos",                label: "Bonos" },
  { href: "#opiniones",            label: "Opiniones" },
  { href: WA,                      label: "Contacto", external: true },
  { href: "/terminos",             label: "Terminos y Condiciones" },
  { href: "/terminos#privacidad",  label: "Privacidad" },
  { href: "/terminos#responsable", label: "Juego Responsable +18" },
];

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.container}>
            <div className={styles.footerLinks}>
              {navLinks.map((l) =>
                l.external
                  ? <a key={l.href} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
                  : <Link key={l.href} href={l.href}>{l.label}</Link>
              )}
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.container}>
            <Image
              src="/logo.png"
              alt="GanamosDiversion"
              className={styles.brandLogo}
              width={160}
              height={50}
              priority={false}
              unoptimized
            />
            <p className={styles.legal}>
              Solo mayores de 18 anos. El juego en exceso puede generar dependencia. Jugue con responsabilidad.
            </p>
          </div>
        </div>
      </footer>

      <a className={styles.whatsappFloat} href={WA} target="_blank" rel="noreferrer">
        <span className={styles.wppLabel}>
          <span className={styles.wppLabelInner}>PIDE TU USUARIO AQUI</span>
        </span>
        <div className={styles.wppIconWrap}><ion-icon name="logo-whatsapp" /></div>
      </a>
    </>
  );
}