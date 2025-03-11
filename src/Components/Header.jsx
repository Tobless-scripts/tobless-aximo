import { useEffect, useState } from "react";
import logo from "../../public/logo.svg";
import "../index.css";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 1);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("navbar-open");
        } else {
            document.body.classList.remove("navbar-open");
        }
    }, [isOpen]);

    return (
        <div className="m-0 overflow-hidden relative">
            <nav
                className={`flex py-6 px-25 justify-between bg-black text-[#fdfde1] text-base max-md:py-3 max-md:px-0 overflow-y-hidden transition-all duration-300 ease-in-out
        ${
            isScrolled || isOpen
                ? "fixed top-0 left-0 w-full bg-black shadow-sm transition-all duration-300 z-[100]"
                : ""
        }  
        ${isOpen ? "max-md:h-[17rem]" : "max-md:h-[4rem]"}`}
            >
                <div className="p-2 max-md:ml-2">
                    <img src={logo} alt="logo" />
                </div>

                {/* Menu Toggle Button */}
                <div
                    id="menu-toggle"
                    className="none flex-col gap-1 cursor-pointer p-2 max-md:flex max-md:mr-2"
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
                    id="nav-links"
                    className="list-none flex gap-5 max-md:absolute max-md:top-[64px] max-md:w-full transition-all duration-300 ease-in-out text-white max-md:gap-0 max-md:flex-col max-md:transition-opacity max-md:bg-black max-md:h-full max-md:text-white max-md:pl-4 max-md:text-left max-md:py-0"
                >
                    {["Home", "About Us", "Blog", "Contact"].map((item) => (
                        <li key={item} className="p-3">
                            <a
                                href="#"
                                className="text-lg text-white transition duration-300 hover:text-[rgb(191,247,71)] font-semibold"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="block max-lg:hidden">
                    <button className="py-2.5 px-4.5 border-2 font-bold text-base border-black rounded-full font-inter text-lg transition duration-500 bg-[rgb(191,247,71)] text-black cursor-pointer shadow-white shadow-md hover:shadow-none">
                        Contact Us
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default Header;
