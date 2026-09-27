import { ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}
