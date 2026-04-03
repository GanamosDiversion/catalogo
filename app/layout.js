import "./globals.css"
import Script from "next/script"

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "https://ganamosdiversion.com"),
  title: {
    default: "GanamosDiversion - Casino Online Premium",
    template: "%s | GanamosDiversion",
  },
  description:
    "Juega con confianza en GanamosDiversion. Mas de 500 juegos de Pragmatic Play, Evolution, Ruby Play y Habanero. Pide tu usuario por WhatsApp y empieza en minutos.",
  keywords: [
    "casino online",
    "slots online",
    "sweet bonanza",
    "gates of olympus",
    "aviator",
    "casino argentina",
    "pragmatic play",
    "evolution gaming",
    "ruby play",
    "habanero",
    "casino whatsapp",
    "ganamosdiversion",
  ],
  authors: [{ name: "GanamosDiversion" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icono.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icono.png",
  },
  openGraph: {
    title: "GanamosDiversion - Casino Online Premium",
    description:
      "Mas de 500 juegos, bonos exclusivos y soporte 24/7 por WhatsApp. La mejor experiencia de casino online.",
    url: "https://ganamosdiversion.com",
    siteName: "GanamosDiversion",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/icono.png",
        width: 512,
        height: 512,
        alt: "GanamosDiversion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GanamosDiversion - Casino Online Premium",
    description:
      "Slots, casino en vivo, ruleta y mucho mas. Pide tu usuario ahora.",
    images: ["/icono.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        {children}
        <Script
          src="https://cdn.jsdelivr.net/npm/ionicons@7.4.0/dist/ionicons/ionicons.esm.js"
          type="module"
          strategy="lazyOnload"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/ionicons@7.4.0/dist/ionicons/ionicons.js"
          noModule
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}