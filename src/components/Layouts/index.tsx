import { ReactNode } from "react";
import Header from "../Headers";
import Footer from "../Footers";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Noto_Serif } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
const notoSerif = Noto_Serif({ subsets: ["latin"] });
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main
        className={`${inter.className} ${montserrat.className} ${notoSerif.className}`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
