
import "./globals.css";
import { Layout } from "@/components/Layout";
import { Hanuman, Moul } from "next/font/google";
import { PWAInstallPrompt } from "@/components/pwa-install-prompt";

const hanuman = Hanuman({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
});

// If loading a variable font, you don't need to specify the font weight
const moul = Moul({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hanuman.className} ${moul.className}`}>
        <Layout>
          {children}
          <PWAInstallPrompt />
        </Layout>
      </body>
    </html>
  );
}

