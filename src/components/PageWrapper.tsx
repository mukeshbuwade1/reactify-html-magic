import React from "react";
import PageHeader from "./common/PageHeader";
import NavBar from "./common/NavBar";
import FooterNote from "./common/FooterNote";

export default function PageWrapper({
  children,
  isHome,
}: {
  children: React.ReactNode;
  isHome?: boolean;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Topbar Start */}
      <PageHeader />
      {/* Topbar End */}

      {/* Navbar Start */}
      <NavBar isHome={isHome} />
      {/* Navbar End */}

      {/* page content */}
      {children}
      {/* page content end */}

      <FooterNote />

      <div className="fixed bottom-[5.5rem] right-8 z-50">
        <a target="_black" href="https://wa.me/919260927665/?text=I%27m%20interested%20in%20[xyz]%20package">
          <img src="/img/whatsapp.svg" className="w-[40px] h-[40px]" />
        </a>
      </div>
    </div>
  );
}
