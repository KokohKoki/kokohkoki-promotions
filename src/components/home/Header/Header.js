import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { navBarList } from "../../../constants";
import Flex from "../../designLayouts/Flex";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  // const [menuClicked, setMenuClicked] = useState(false);
  const [sidenav, setSidenav] = useState(false);
  const location = useLocation();
  const products = useSelector((state) => state.orebiReducer.products);

  useEffect(() => {
    let ResponsiveMenu = () => {
      if (window.innerWidth < 667) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);

    return () => {
      window.removeEventListener("resize", ResponsiveMenu);
    };
  }, []);

  return (
    <div className="w-full h-20 bg-[#fb0404] sticky top-0 z-50">
      <nav className="h-full px-4 max-w-container mx-auto relative">
        <Flex className="flex items-center justify-between h-full">
          <Link to="/">
            {/* <div className="py-4 text-white text-center text-2xl font-bold">KOKOHKOKI</div> */}
            <img
              src="/LogoKokohKokiWeb.png"
              alt="KokohKoki"
              className="w-20"
            />
          </Link>
          <div>
            {showMenu && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center w-auto z-50 p-0 gap-2"
              >
                <>
                  {navBarList.map(({ _id, title, link }) => (
                    <NavLink
                      key={_id}
                      className="hidden md:flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-white hover:underline underline-offset-[5px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                      to={link}
                      state={{ data: location.pathname.split("/")[1] }}
                    >
                      <li>{title}</li>
                    </NavLink>
                  ))}
                </>
              </motion.ul>
            )}
            <div className="md:hidden flex gap-3 flex-wrap items-center">
              <AnimatePresence initial={false}>
                <Link to="/cart">
                  <motion.div
                    key={products.length}
                    initial={{ scale: 1.5 }}
                    animate={{ scale: [1.5, 1.0, 1.2, 1.0], rotate: -360 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 20,
                    }}
                    className="relative transition duration-150 ease-in-out hover:opacity-80"
                  >
                    <FaShoppingCart className="text-white w-5 h-5 " />
                    <span className="bg-black absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full  font-semibold text-white">
                      {products.length > 0 ? products.length : 0}
                    </span>
                  </motion.div>
                </Link>
              </AnimatePresence>
              <HiMenuAlt2
                onClick={() => setSidenav(!sidenav)}
                className="text-white inline-block  cursor-pointer w-8 h-6 transition duration-150 ease-in-out hover:opacity-80"
              />
            </div>
            {sidenav && (
              <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50">
                <motion.div
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-[80%] h-full relative"
                >
                  <div className="w-full h-full bg-primeColor text-right p-6">
                    <Link to="/">
                      <div className="py-4 text-rose-500 text-2xl font-bold">
                        KokohKoki
                      </div>
                    </Link>
                    <ul className="text-gray-200 flex flex-col gap-2">
                      {navBarList.map((item) => (
                        <li
                          className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-rose-500 md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                          key={item._id}
                        >
                          <NavLink
                            to={item.link}
                            state={{ data: location.pathname.split("/")[1] }}
                            onClick={() => setSidenav(false)}
                          >
                            {item.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span
                    onClick={() => setSidenav(false)}
                    className="w-8 h-8 border-[1px] border-gray-300 absolute top-2 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
                  >
                    <MdClose />
                  </span>
                </motion.div>
              </div>
            )}
          </div>
        </Flex>
      </nav>
    </div>
  );
};

export default Header;
