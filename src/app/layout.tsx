import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";

//components
import Header from "@/components/Header"
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

//const inter = Inter({ subsets: ["latin"] });
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'
});

export const metadata: Metadata = {
  title: "Rodrigo Rivas Portfolio",
  description: "Portfolio web de Rodrigo Rivas, todos mis proyectos mas relevantes aquí",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.className}>
        <StairTransition/>
        <PageTransition>
        <Header />
          {children}
          <SpeedInsights />
        </PageTransition>
      </body>
    </html>
  );
}
