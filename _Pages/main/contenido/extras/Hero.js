"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import heroDatos from "./hero.datos.json";
import { numero } from "@/_Pages/numero.json";

const WA = `https://wa.me/${numero}?text=Hola%2C%20quiero%20pedir%20mi%20usuario%20para%20jugar`;

const slides = heroDatos.slides;

export default function Hero() {
  const [idx, setIdx]   = useState(0);
  const autoRef         = useRef(null);
  const touchX          = useRef(0);
  const total           = slides.length;

  useEffect(() => {
    autoRef.current = setInterval(() => setIdx((p) => (p + 1) % total), 4500);
    return () => clearInterval(autoRef.current);
  }, [total]);

  function goTo(i) { setIdx((i + total) % total); }

  function resetAuto() {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => setIdx((p) => (p + 1) % total), 4500);
  }

  function handlePrev() { goTo(idx - 1); resetAuto(); }
  function handleNext() { goTo(idx + 1); resetAuto(); }
  function handleDot(i) { goTo(i);       resetAuto(); }

  function onTouchStart(e) { touchX.current = e.touches[0].clientX; }
  function onTouchEnd(e) {
    const diff = touchX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) { goTo(idx + (diff > 0 ? 1 : -1)); resetAuto(); }
  }

  const s = slides[idx];

  return (
    <section className={styles.hero} id="inicio">
      <div
        className={styles.heroCarousel}
        style={{ transform: `translateX(-${idx * 100}%)` }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {slides.map((slide, i) => (
          <div key={i} className={styles.heroSlide}>
            <Image
              src={slide.img}
              alt={slide.title}
              fill
              sizes="95vw"
              style={{ objectFit: "cover", objectPosition: "center top", filter: "blur(18px) brightness(0.6)", transform: "scale(1.05)" }}
              priority={i === 0}
              loading={i === 0 ? "eager" : "lazy"}
              quality={80}
            />
            <Image
              src={slide.img}
              alt={slide.title}
              fill
              sizes="95vw"
              style={{ objectFit: "fill", objectPosition: "center top" }}
              priority={i === 0}
              loading={i === 0 ? "eager" : "lazy"}
              quality={100}
            />
            <div className={styles.heroOverlay} />
            <div className={`${styles.container} ${styles.heroContent}`}>
                <div className={styles.eyebrow}>
                  <ion-icon name={slide.eyebrowIcon} /> {slide.eyebrowText}
                </div>
                <h1>{slide.title}</h1>
                <p className={styles.heroCopy}>{slide.copy}</p>
                <div className={styles.heroMeta}>
                  <span><ion-icon name="grid" /> {slide.metaProveedor}</span>
                  <span><ion-icon name="trending-up" /> {slide.metaRTP}</span>
                </div>
                <div className={styles.heroCta}>
                  <a className={`${styles.btn} ${styles.btnPrimary}`} href={WA} target="_blank" rel="noreferrer">
                    <ion-icon name="logo-whatsapp" /> Pide tu usuario
                  </a>
                  <a className={`${styles.btn} ${styles.btnSecondary}`} href="#juegos">Ver juegos</a>
                </div>
            </div>
          </div>
        ))}
      </div>

      <button className={`${styles.heroArrow} ${styles.left}`}  onClick={handlePrev} aria-label="Anterior"><ion-icon name="chevron-back" /></button>
      <button className={`${styles.heroArrow} ${styles.right}`} onClick={handleNext} aria-label="Siguiente"><ion-icon name="chevron-forward" /></button>

      <div className={styles.heroDots}>
        {slides.map((_, i) => (
          <span key={i} className={`${styles.dot} ${i === idx ? styles.active : ""}`} onClick={() => handleDot(i)} />
        ))}
      </div>
    </section>
  );
}