import Image from "next/image";
import Link from "next/link";
import styles from "./terminos.module.css";
import { numero } from "@/_Pages/numero.json";

const WA_TERMINOS = `https://wa.me/${numero}?text=Hola%2C%20tengo%20una%20consulta%20sobre%20los%20terminos%20y%20condiciones`;

export const metadata = {
  title: "Terminos y Condiciones - GanamosDiversion",
  description: "Terminos y condiciones, politica de privacidad y juego responsable de GanamosDiversion.",
};

const secciones = [
  { href: "#aceptacion",  label: "1. Aceptacion de terminos" },
  { href: "#elegibilidad", label: "2. Elegibilidad y registro" },
  { href: "#uso",          label: "3. Uso de la plataforma" },
  { href: "#bonos",        label: "4. Bonos y promociones" },
  { href: "#responsable",  label: "5. Juego responsable" },
  { href: "#privacidad",   label: "6. Politica de privacidad" },
  { href: "#limitacion",   label: "7. Limitacion de responsabilidad" },
  { href: "#contacto",     label: "8. Contacto" },
];

export default function Terminos() {
  return (
    <>
      <header className={styles.topbar}>
        <div className={styles.topbarInner}>
          <Link href="/" className={styles.brand}>
            <Image
              src="/logo.png"
              alt="GanamosDiversion"
              className={styles.brandLogo}
              width={160}
              height={50}
              priority={false}
              unoptimized
            />
          </Link>
          <Link href="/" className={styles.backBtn}>
            <ion-icon name="arrow-back" /> Volver al inicio
          </Link>
        </div>
      </header>

      <div className={styles.wrap}>
        <h1 className={styles.pageTitle}>Terminos y Condiciones</h1>
        <p className={styles.pageSub}>Ultima actualizacion: marzo 2026 — Leer antes de utilizar la plataforma.</p>

        <div className={styles.toc}>
          <h3>Contenido</h3>
          <ul>
            {secciones.map((s) => (
              <li key={s.href}>
                <a href={s.href}><ion-icon name="chevron-forward" /> {s.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.sectionBlock} id="aceptacion">
          <h2><ion-icon name="document-text" /> 1. Aceptacion de Terminos</h2>
          <p>Al acceder y utilizar la plataforma GanamosDiversion, el usuario acepta de forma expresa e incondicional los presentes Terminos y Condiciones, asi como la Politica de Privacidad y las normas de Juego Responsable aqui descritas.</p>
          <p>GanamosDiversion se reserva el derecho de modificar estos terminos en cualquier momento. Las modificaciones entraran en vigencia desde el momento de su publicacion en este sitio. El uso continuado de la plataforma implica la aceptacion de dichos cambios.</p>
        </div>

        <div className={styles.sectionBlock} id="elegibilidad">
          <h2><ion-icon name="person-circle" /> 2. Elegibilidad y Registro</h2>
          <div className={styles.highlightBox}>
            El acceso a esta plataforma esta estrictamente reservado a mayores de 18 anos. Queda prohibido el uso por parte de menores de edad en cualquier jurisdiccion.
          </div>
          <p>Para utilizar los servicios de GanamosDiversion el usuario debe:</p>
          <ul>
            <li>Tener al menos 18 anos de edad cumplidos.</li>
            <li>Residir en una jurisdiccion donde el juego online este permitido por la legislacion local.</li>
            <li>Proporcionar informacion veraz y actualizada al momento del registro.</li>
            <li>Mantener la confidencialidad de sus credenciales de acceso.</li>
          </ul>
          <p>GanamosDiversion se reserva el derecho de suspender o cancelar cualquier cuenta ante indicios de uso fraudulento, suplantacion de identidad o incumplimiento de estos terminos.</p>
        </div>

        <div className={styles.sectionBlock} id="uso">
          <h2><ion-icon name="game-controller" /> 3. Uso de la Plataforma</h2>
          <p>El usuario se compromete a utilizar la plataforma unicamente con fines de entretenimiento licito. Esta expresamente prohibido:</p>
          <ul>
            <li>Utilizar software automatizado, bots o sistemas de trampa.</li>
            <li>Intentar acceder a cuentas de otros usuarios.</li>
            <li>Realizar actividades que puedan comprometer la seguridad del sistema.</li>
            <li>Proporcionar datos falsos o informacion de terceros.</li>
            <li>Realizar multiples cuentas para obtener bonos de manera fraudulenta.</li>
          </ul>
          <p>El incumplimiento de cualquiera de estas normas podra resultar en la suspension inmediata de la cuenta y la perdida de saldos pendientes.</p>
        </div>

        <div className={styles.sectionBlock} id="bonos">
          <h2><ion-icon name="gift" /> 4. Bonos y Promociones</h2>
          <p>Los bonos y promociones ofrecidos por GanamosDiversion estan sujetos a condiciones especificas que se informan al momento de su activacion. Como regla general:</p>
          <ul>
            <li>Los bonos tienen requisitos de apuesta que deben cumplirse antes de poder retirar ganancias.</li>
            <li>Cada promocion tiene un plazo de vigencia definido.</li>
            <li>Los bonos no son acumulables salvo que se indique expresamente lo contrario.</li>
            <li>GanamosDiversion se reserva el derecho de modificar o cancelar promociones sin previo aviso.</li>
          </ul>
          <p>Para consultar los terminos especificos de cualquier bono activo, comunicate con nuestro equipo de soporte via WhatsApp.</p>
        </div>

        <div className={styles.sectionBlock} id="responsable">
          <h2><ion-icon name="heart" /> 5. Juego Responsable</h2>
          <div className={styles.highlightBox}>
            El juego debe ser una forma de entretenimiento. Si sientes que el juego esta afectando tu vida personal, economica o emocional, busca ayuda de inmediato.
          </div>
          <p>GanamosDiversion promueve activamente el juego responsable y pone a disposicion de sus usuarios las siguientes herramientas:</p>
          <ul>
            <li>Posibilidad de establecer limites de deposito o sesion.</li>
            <li>Opcion de autoexclusion temporal o permanente de la plataforma.</li>
            <li>Acceso a recursos de ayuda para ludopatia.</li>
          </ul>
          <p>Si necesitas ayuda o deseas activar alguna de estas herramientas, contactanos directamente via WhatsApp. El juego compulsivo es una enfermedad tratable. No estas solo.</p>
        </div>

        <div className={styles.sectionBlock} id="privacidad">
          <h2><ion-icon name="lock-closed" /> 6. Politica de Privacidad</h2>
          <p>GanamosDiversion recopila y trata los datos personales de sus usuarios de acuerdo con la normativa vigente en materia de proteccion de datos. Los datos recabados se utilizan exclusivamente para:</p>
          <ul>
            <li>Gestionar el registro y acceso del usuario a la plataforma.</li>
            <li>Procesar transacciones y verificar identidades.</li>
            <li>Enviar comunicaciones relacionadas con la cuenta y promociones, si el usuario lo autoriza.</li>
            <li>Cumplir con obligaciones legales y reglamentarias.</li>
          </ul>
          <p>No compartimos datos personales con terceros salvo en los casos requeridos por ley o necesarios para la prestacion del servicio. Los usuarios pueden solicitar la rectificacion, eliminacion o portabilidad de sus datos contactando al equipo de soporte.</p>
          <p>Utilizamos cookies tecnicas necesarias para el funcionamiento del sitio. Al continuar navegando, el usuario acepta su uso.</p>
        </div>

        <div className={styles.sectionBlock} id="limitacion">
          <h2><ion-icon name="alert-circle" /> 7. Limitacion de Responsabilidad</h2>
          <p>GanamosDiversion no se responsabiliza por perdidas economicas derivadas del uso de la plataforma de juego. El usuario asume plena responsabilidad sobre sus decisiones de juego.</p>
          <p>La plataforma se brinda en el estado en que se encuentra. No garantizamos disponibilidad ininterrumpida del servicio y no nos hacemos responsables por interrupciones tecnicas fuera de nuestro control.</p>
          <p>Los resultados de los juegos son determinados por sistemas de generacion aleatoria certificados. GanamosDiversion no interviene ni puede influir en dichos resultados.</p>
        </div>

        <div className={styles.sectionBlock} id="contacto">
          <h2><ion-icon name="logo-whatsapp" /> 8. Contacto</h2>
          <p>Para cualquier consulta relacionada con estos terminos, tu cuenta o cualquier aspecto de la plataforma, podes contactarnos directamente por WhatsApp. Nuestro equipo de soporte atiende las 24 horas, los 7 dias de la semana.</p>
          <a href={WA_TERMINOS} target="_blank" rel="noreferrer" className={styles.waBtn}>
            <ion-icon name="logo-whatsapp" /> Contactar por WhatsApp
          </a>
        </div>

        <p className={styles.footerLegal}>
          © 2026 GanamosDiversion — Todos los derechos reservados.<br />
          Plataforma de entretenimiento online para mayores de 18 anos.<br />
          El juego en exceso puede generar dependencia. Jugue con responsabilidad.
        </p>
      </div>
    </>
  );
}