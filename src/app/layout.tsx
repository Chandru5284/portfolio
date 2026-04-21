import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chandru.dev | Full Stack Developer for Scalable Web Apps",
  description: "Building high-performance websites and scalable web applications using modern technologies.",
  keywords: ["Next.js Developer", "React Developer", "SaaS Builder", "Mobile Apps", "Capacitor"],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Chandru.dev | Full Stack Developer for Scalable Web Apps",
    description: "Building high-performance websites and scalable web applications using modern technologies.",
    url: "https://chandramohan-xi.vercel.app",
    siteName: "Chandru.dev",
    images: [
      {
        url: "/og-image.jpg", // your new image
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
