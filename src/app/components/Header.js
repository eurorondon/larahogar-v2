"use client";
import React, { useEffect, useState } from "react";
import { LocationOn } from "@mui/icons-material";
import { useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import { Colors } from "../../utils/colors";
import Link from "next/link";

import { IoBag } from "react-icons/io5";
import SubMenu from "./SubMenu";
import TabMenu from "./TabMenu";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  // const currentUrl = router.pathname;
  const [searchInput, setSearchInput] = React.useState("");
  const { cartItems } = useSelector((state) => state.cart);
  const [cartCount, setCartCount] = useState(cartItems.length);
  const [activeButton, setActiveButton] = useState(0);
  const [windowWidth, setWindowWidth] = useState(null);

  React.useEffect(() => {
    setCartCount(cartItems.length);
  }, [cartItems]);

  const currentUrl = pathName;

  useEffect(() => {
    if (currentUrl === "/") {
      setActiveButton(0);
    }
    if (currentUrl === "/categories") {
      setActiveButton(1);
    }
    if (currentUrl === "/ofertas") {
      setActiveButton(2);
    }
    if (currentUrl === "/destacados") {
      setActiveButton(3);
    }
    if (currentUrl === "/perfil" || currentUrl === "/auth") {
      setActiveButton(4);
    }
  }, [currentUrl]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.scroll(0, 0);
    if (searchInput) {
      router.push(`/search/${searchInput}`);
      setSearchInput("");
    }
  };

  return (
    <>
      <div>
        {/* Top Header */}
        <div style={{ backgroundColor: Colors.Cprimary }}>
          <div className="container mx-auto">
            <div className="flex justify-center">
              {windowWidth < 768 ? (
                <p className="text-white text-center text-xs">
                  <LocationOn className="text-base" />
                  Barquisimeto- Edo, Lara
                </p>
              ) : (
                <p className="text-white text-center text-lg">
                  <LocationOn />
                  Carrera23, calles 37 y 38, Barquisimeto - Lara
                </p>
              )}
            </div>
          </div>
        </div>
        {/* Header */}
        <div className="header" style={{ backgroundColor: "#ffeeee" }}>
          <div className="container ">
            {/* MOBILE HEADER */}
            <div className="mobile-header">
              <div className="mx-2">
                <div className="grid grid-cols-12 gap-1 ">
                  <div className="col-span-2 ">
                    <Link href="/">
                      <div
                        className="bg-white rounded-full p-1"
                        style={{ minHeight: "50px", minWidth: "50px" }}
                      >
                        <img
                          alt="logo"
                          src="/images/logo.png"
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="col-span-8 mt-2   ">
                    <form className="flex h-10" onSubmit={handleSubmit}>
                      <input
                        type="search"
                        className="form-control border border-slate-800 rounded-l-full search   w-full"
                        placeholder="Buscar..."
                        onChange={(e) => setSearchInput(e.target.value)}
                        style={{
                          paddingLeft: "20px",
                          borderTopLeftRadius: "50px",
                          borderBottomLeftRadius: "50px",
                          borderTopRightRadius: "0px",
                          borderBottomRightRadius: "0px",
                        }}
                      />
                      <button type="submit" className="search-button px-3 ">
                        <SearchIcon />
                      </button>
                    </form>
                  </div>
                  <div className="col-span-2   flex items-center justify-center">
                    <Link href="/cart" className="cart-mobile-icon">
                      <IoBag size={"20px"} />
                      {cartCount > 0 && (
                        <div
                          className="badge flex justify-center items-center"
                          style={{ fontSize: "0.8rem" }}
                        >
                          <span className="mx-auto">{cartCount}</span>
                        </div>
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* PC HEADER */}
            <div className="pc-header py-2">
              <div className="flex">
                <div className="flex-none md:w-1/4 w-1/3 flex items-center">
                  <Link className="navbar-brand" href="/">
                    <div className="rounded-full">
                      <img
                        alt="logo"
                        src="/images/logo.png"
                        className="rounded-full"
                        style={{ maxWidth: "10rem" }}
                      />
                    </div>
                  </Link>
                </div>
                <div className="flex-grow flex items-center">
                  <form className="flex" onSubmit={handleSubmit}>
                    <input
                      type="search"
                      className="form-control rounded-l-full search"
                      placeholder="Buscar..."
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <button type="search" className="search-button">
                      <SearchIcon />
                    </button>
                  </form>
                </div>
                <div className="flex-none md:w-1/4 flex items-center justify-end">
                  <Link href="/cart">
                    <i
                      className="fas fa-shopping-bag me-3 text-white"
                      style={{ fontSize: "1.1rem" }}
                    ></i>
                    <span className="badge">{cartCount}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="text-white pc-header py-2"
          style={{ backgroundColor: "#1A2339" }}
        >
          <div className="container mx-auto flex justify-start gap-5">
            <h5>Categorias</h5>
            <h5>Contacto</h5>
            <h5>Top Seller</h5>
          </div>
        </div>
      </div>
      <SubMenu />
      <TabMenu activeButton={activeButton} />
    </>
  );
};

export default Header;
