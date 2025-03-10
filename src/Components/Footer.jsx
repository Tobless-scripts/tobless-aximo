import "../index.css";
import send from "../assets/send.png";
import logo from "../../public/logo.svg";

function Footer() {
    return (
        <>
            <div className="max-lg:pt-8 max-lg:px-2 max-md:py-16 px-25 pt-25 pb-5 bg-black text-[#fdfde1] flex flex-col gap-8 max-lg:pb-2">
                <div className="grid grid-cols-2 gap-12  max-lg:grid-cols-1 border-b-[0.00000001rem] border-[#fdfde1] pb-28 ">
                    <div className="p-2 flex flex-col gap-6 max-lg:px-8">
                        <h1 className="leading-[4.6875rem] text-[4.375rem] font-bold max-md:font-[600] max-md:leading-[2.4375rem] max-md:text-[2.25rem]  ">
                            Lets start a project together
                        </h1>
                        <p className=" leading-[1.875rem] text-[1.3125rem] font-normal">
                            We work closely with our clients to understand their
                            objectives, target audience, and unique needs. We
                            use our creative skills to translate these
                            requirements and practical design solutions.
                        </p>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col gap-1">
                                <h2 className="text-lime-300 font-normal leading-[1.875rem] text-[1.3125rem] ">
                                    Give us a call:
                                </h2>
                                <p className="font-normal leading-[1.875rem] text-[1.3125rem] ">
                                    (123) 456-7890
                                </p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-lime-300 font-normal leading-[1.875rem] text-[1.3125rem] ">
                                    Send us an email:
                                </h2>
                                <p className="font-normal leading-[1.875rem] text-[1.3125rem] ">
                                    info@mthemeus.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="py-2 pl-8 flex flex-col gap-6 max-lg:pr-8">
                        <h1 className="font-bold leading-[1.75rem] text-[1.5rem] ">
                            Send us a message
                        </h1>
                        <form
                            className="flex flex-col gap-6"
                            action="https://formspree.io/f/xpwwkjea"
                            method="post"
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                required
                                className="w-[90%] rounded-full border-[#fdfde1] border-1 p-4 max-lg:w-[100%]"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your email address"
                                required
                                className="w-[90%] rounded-full border-[#fdfde1] border-1 p-4 max-lg:w-[100%]"
                            />
                            <input
                                type="number"
                                name="number"
                                placeholder="+088-234-6849"
                                required
                                className="w-[90%] rounded-full border-[#fdfde1] border-1 p-4 max-lg:w-[100%]"
                            />
                            <textarea
                                name="message"
                                id="message"
                                placeholder="Write your message here"
                                className="w-[90%] rounded-xl border-[#fdfde1] border-1 px-4 py-8 max-lg:w-[100%]"
                            ></textarea>

                            <div className="inline-flex w-[90%] items-center text-center justify-between py-2.5 pl-12 pr-4 border-2 font-bold text-base border-black rounded-full font-inter transition duration-500 bg-lime-300 text-black cursor-pointer shadow-white shadow-md hover:shadow-none max-sm:w-full max-sm:pl-6 max-sm:pr-2">
                                <div>
                                    <p>Send message</p>
                                </div>
                                <div className="w-12 bg-black p-2 rounded-full h-12 ">
                                    <img
                                        src={send}
                                        alt="phone"
                                        className="w-full"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex justify-between items-center w-full max-lg:justify-center max-lg:flex-col max-lg:text-center gap-8">
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <div>
                        <h2 className="text-[#999] font-normal text-[1.125rem] leading-[1.875rem] ">
                            &copy; Copyright 2024, All Rights Reserved by
                            Mthemeus
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
