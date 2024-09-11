import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Logo from "@/assets/Logo-small.webp";
import Link from "@/components/Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";

import React from "react";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <nav>
      <div className="navbar flex-between-center">
        <div className="flex-between-center nav-wrapper">
          <div className="flex-between-center nav-content">
            {/* Left side */}
            <img src={Logo} alt="logo-small" className="logo" />

            {/* Right side */}
            {isAboveMediumScreens ? (
              <div className="flex-between-center links-parent-container">
                <div className="flex-between-center links-container">
                  <Link
                    page="Inicio"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Nuestra Carta"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Eventos"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contacto"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className="flex-between-center">
                  <p className="login-text">Entrar/Registrarse</p>{" "}
                  {/* TODO: Add Login/Register button */}
                </div>
              </div>
            ) : (
              <button
                className="mobile-menu-btn"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="mobile-menu-icon" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="mobile-menu-container">
          {/* Close Icon */}
          <div className="close-button-container">
            <button
              className="close-menu-btn"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <XMarkIcon className="close-menu-icon" />
            </button>
          </div>
          {/* menu-items */}
          <div className="mobile-menu-items">
            <Link
              page="Inicio"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Nuestra Carta"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Eventos"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contacto"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
