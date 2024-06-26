import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibm = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400"],
  style: ["normal"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quantamind-vijay-fs.vercel.app/"),
  title: {
    default: "Chat With QuantaMind",
    template: "%s | Chat With QuantaMind"
  },
  description: "A text-to-speech chatbot built with Nextjs, Groq, and ElevenLabs' API).",
  applicationName: "Chat With QuantaMind",
  manifest: "/manifest.json",
  appleWebApp: {
    title: "Chat With QuantaMind",
    statusBarStyle: "black-translucent"
  },
  icons: {
    shortcut: "/fav.svg",
    apple: [
      { url: "/fav.svg" },
      { url: "/pwa/ios/152.png", sizes: "152x152" },
      { url: "/pwa/ios/180.png", sizes: "180x180" },
      { url: "/pwa/ios/167.png", sizes: "167x167" }
    ],
    other: {
      rel: "mask-icon",
      url: "/fav.svg",
      color: "#3b82f6"
    }
  },
  twitter: {
    card: "summary_large_image",
    creator: "@iambolajiayo"
  },
  openGraph: {
    locale: "en_US",
    type: "website",
    url: "https://quantamind-vijay-fs.vercel.app/",
    images: [
      {
        url: "/og.jpg",
        width: 500,
        height: 500
      }
    ]
  },
  keywords: [
    "chat",
    "siri",
    "openai",
    "gpt-3",
    "elevenlabs",
    "text-to-speech",
    "chatgpt",
    "elevenlabs sdk",
    "elevenlabs api",
    "elevenlabs typescript sdk",
    "next.js",
    "javascript",
    "typescript"
  ],
  authors: [{ name: "Voilavichu", url: "https://voilavichu.online" }],
  creator: "Voilavichu"
};

export const viewport = {
  themeColor: "#3b82f6"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibm.className}>
        {children}
        <ToastContainer stacked />
        <Analytics />
      </body>
    </html>
  );
}
