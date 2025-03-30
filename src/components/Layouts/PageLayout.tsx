import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col bg-white py-[80px] px-[40px] sm:py-[150px] sm:px-80">
      {children}
    </div>
  );
}
