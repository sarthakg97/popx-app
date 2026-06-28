import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import PortfolioProvider from "@/context/PortfolioContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sarthak Gupta | Frontend Developer",
  description: "Frontend Developer with 1 year of experience in HTML, CSS, JavaScript, React.js, Next.js, and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
