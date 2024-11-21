import {NextUIProvider} from "@nextui-org/react"

import type { Metadata } from "next";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portafolio Alejandro jofre",
  description: "Portafolios creado con NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
          <NextUIProvider>
          <ThemeProvider>{children}</ThemeProvider>
          </NextUIProvider>
      </body>
    </html>
  );
}
