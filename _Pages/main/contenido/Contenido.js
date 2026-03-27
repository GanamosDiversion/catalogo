"use client"


import { useRef } from "react";
import Hero from "./extras/Hero";
import data from "./contenido.datos.json";
import styles from "./Contenido.module.css";
import { numero } from "@/_Pages/numero.json";

const WA_BASE = `https://wa.me/${numero}?text=`;
const WA = (texto) => WA_BASE + encodeURIComponent(texto);

const { beneficios, providers, bonos, reviews } = data;
const FALLBACK_IMG = "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&q=80";

function GameCard({ game }) {
  return (
    <div className={styles.gameCard}>
      <img src={game.img} alt={game.name} onError={(e) => { e.currentTarget.src = FALLBACK_IMG; }} />
      <div className={styles.gameInfo}>
        <div className={styles.name}>{game.name}</div>
        <div className={styles.rtp}>RTP {game.rtp}%</div>
      </div>
      <div className={styles.overlay}>
        <a href={WA(`Hola, quiero jugar ${game.name}`)} target="_blank" rel="noreferrer">
          <button>Jugar <ion-icon name="play" /></button>
        </a>
      </div>
    </div>
  );
}

function ProviderBlock({ provider }) {
  const offsetRef = useRef(0);

  function scroll(dir) {
    const track   = document.getElementById(provider.id);
    const wrap    = track.parentElement;
    const card    = track.querySelector(`.${styles.gameCard}`);
    if (!card) return;
    const cardW   = card.offsetWidth + 13;
    const visible = Math.floor(wrap.offsetWidth / cardW);
    const max     = Math.max(0, provider.games.length - visible);
    offsetRef.current = Math.max(0, Math.min(offsetRef.current + dir, max));
    track.style.transform = `translateX(-${offsetRef.current * cardW}px)`;
  }

  return (
    <div className={styles.providerBlock}>
      <div className={styles.providerHeader}>
        <div className={styles.providerInfo}>
          <div className={styles.providerLogo}>
            <img src={provider.logo} alt={provider.name} />
          </div>
          <div>
            <h3>{provider.name}</h3>
            <p>{provider.description}</p>
          </div>
        </div>
        <div className={styles.providerNav}>
          <button className={styles.pnavBtn} onClick={() => scroll(-1)}><ion-icon name="chevron-back" /></button>
          <button className={styles.pnavBtn} onClick={() => scroll(1)}><ion-icon name="chevron-forward" /></button>
        </div>
      </div>
      <div className={styles.gamesTrackWrap}>
        <div className={styles.gamesTrack} id={provider.id}>
          {provider.games.map((g, i) => <GameCard key={i} game={g} />)}
        </div>
      </div>
    </div>
  );
}

export default function Contenido() {
  return (
    <main>

      <Hero />

      {/* ── Juegos ── */}
      <section className={styles.section} id="juegos">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div><h2>Juegos de Casino</h2></div>
            <p>Elegi tu proveedor favorito y empieza a ganar</p>
          </div>
          {providers.map((p) => <ProviderBlock key={p.id} provider={p} />)}
        </div>
      </section>

      {/* ── Beneficios ── */}
      <section className={styles.section} id="beneficios">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div><h2>La mejor experiencia de casino online, segura y lista para jugar.</h2></div>
            <p>Juega con confianza. Tenemos los mejores proveedores, atencion rapida por WhatsApp y plataforma premium 24hs.</p>
          </div>
          <div className={styles.trustBar}>
            {beneficios.map((item, i) => (
              <div key={i} className={styles.trustItem}>
                <div className={styles.iconBox}><ion-icon name={item.icon} /></div>
                <div><strong>{item.title}</strong><span>{item.text}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bonos ── */}
      <section className={styles.section} id="bonos">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div><h2>Bonos y Promociones</h2></div>
            <p>Aprovecha nuestras ofertas exclusivas y empieza con ventaja.</p>
          </div>
          <div className={styles.offersGrid}>
            {bonos.map((o, i) => (
              <article key={i} className={`${styles.offer} ${o.featured ? styles.featured : ""}`}>
                <div className={styles.iconBox}><ion-icon name={o.icon} /></div>
                <strong>{o.title}</strong>
                <span>{o.text}</span>
                <a href={WA(o.waText)} target="_blank" rel="noreferrer" className={styles.offerTag}>{o.tag}</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Opiniones ── */}
      <section className={styles.section} id="opiniones">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <div><h2>Lo que dicen nuestros jugadores</h2></div>
            <p>Miles de jugadores ya disfrutan de la mejor experiencia de casino online.</p>
          </div>
          <div className={styles.reviewsGrid}>
            {reviews.map((r, i) => (
              <article key={i} className={styles.review}>
                <div className={styles.reviewStars}>★★★★★</div>
                <strong>{r.title}</strong>
                <span>{r.text}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section className={styles.section} id="contacto">
        <div className={styles.container}>
          <div className={styles.ctaBlock}>
            <div>
              <h2>Empieza a jugar ahora. Pide tu usuario por WhatsApp.</h2>
              <p>Atencion disponible las 24 horas. Sin complicaciones, sin esperas. Solo manda un mensaje y ya.</p>
            </div>
            <div className={styles.ctaSide}>
              <a className={`${styles.btn} ${styles.btnPrimary}`} href={WA("Hola, quiero pedir mi usuario para jugar")} target="_blank" rel="noreferrer">
                <ion-icon name="logo-whatsapp" /> Pide tu usuario
              </a>
              <a className={`${styles.btn} ${styles.btnSecondary}`} href="#juegos">Ver juegos</a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}