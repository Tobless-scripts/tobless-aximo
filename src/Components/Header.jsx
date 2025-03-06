import { useEffect, useRef, useState } from "react";
import logo from "../../public/logo.svg";
import "../index.css";

function Header() {
    const menuToggleRef = useRef(null);
    const navLinksRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.screenY >= 30) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    useEffect(() => {
        const menuToggle = menuToggleRef.current;
        const navLinks = navLinksRef.current;

        if (menuToggle && navLinks) {
            const handleMenuToggle = () => {
                setIsOpen((prev) => !prev);
            };

            menuToggle.addEventListener("click", handleMenuToggle);

            return () => {
                menuToggle.removeEventListener("click", handleMenuToggle);
            };
        }
    }, []);

    return (
        <div className="m-0 overflow-hidden">
            <nav
                className={`flex py-6 px-25 justify-between bg-black text-[#fdfde1] text-base max-md:py-3 max-md:px-6 ${
                    isScrolled
                        ? "fixed top-0 left-0 w-full bg-black shadow-sm transition-all duration-300 z-50"
                        : ""
                }`}
            >
                <div className="p-2">
                    <img src={logo} alt="logo" />
                </div>
                <div
                    id="menu-toggle"
                    className="none flex-col gap-1 cursor-pointer p-2 max-md:flex"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span
                        className={`w-7 h-1 bg-white transition-transform duration-300 ${
                            isOpen
                                ? "rotate-45 translate-x-1.5 translate-y-1.5"
                                : ""
                        }`}
                    ></span>
                    <span
                        className={`w-7 h-1 bg-white transition-opacity duration-300 ${
                            isOpen ? "opacity-0" : ""
                        }`}
                    ></span>
                    <span
                        className={`w-7 h-1 bg-white transition-transform duration-300 ${
                            isOpen
                                ? "-rotate-45 translate-x-1.5 -translate-y-1.5"
                                : ""
                        }`}
                    ></span>
                </div>
                <ul
                    ref={navLinksRef}
                    id="nav-links"
                    className={`list-none flex gap-5 max-md:absolute max-md:top-[64px] max-md:translate-x-[-100%] max-md:transform max-md:w-[70%] max-md:gap-0 max-md:flex-col max-md:bg-white max-md:text-black max-md:text-left max-md:py-0 max-md:transition-all max-md:duration-500 max-md:ease-in-out max-md:bg-black max-md:h-[90%] max-md:shadow-sm max-md:shadow-black ${
                        isOpen ? "max-md:right-[-40%]" : "max-md:right-[100%]"
                    }`}
                >
                    <li className="p-2 font-inter max-md:py-3 max-md:px-4 max-md:border-t-2 max-md:border-t-[#e5e5e5]  ">
                        <a
                            href="#"
                            className="text-lg transition duration-300 hover:text-[rgb(191,247,71)] font-semibold leading-[30px]"
                        >
                            Home
                        </a>
                    </li>
                    <li className="p-2 font-inter max-md:py-3 max-md:px-4 max-md:border-t-2 max-md:border-t-[#e5e5e5] ">
                        <a
                            href="#"
                            className="text-lg transition duration-300 hover:text-[rgb(191,247,71)] font-semibold leading-[30px]"
                        >
                            About Us
                        </a>
                    </li>
                    <li className="p-2 font-inter max-md:py-3 max-md:px-4 max-md:border-t-2 max-md:border-t-[#e5e5e5] ">
                        <a
                            href="#"
                            className="text-lg transition duration-300 hover:text-[rgb(191,247,71)] font-semibold leading-[30px]"
                        >
                            Blog
                        </a>
                    </li>
                    <li className="p-2 font-inter max-md:py-3 max-md:px-4 max-md:border-t-2 max-md:border-t-[#e5e5e5] ">
                        <a
                            href="#"
                            className="text-lg transition duration-300 hover:text-[rgb(191,247,71)] font-semibold leading-[30px]"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
                <div className="block max-md:hidden">
                    <button className="py-2.5 px-4.5 border-2 font-bold text-base border-black rounded-full font-inter text-lg transition duration-500 bg-[rgb(191,247,71)] text-black cursor-pointer shadow-white shadow-md hover:shadow-none">
                        Contact Us
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default Header;
