import Header from "./Header";
import HeroImage from "../assets/hero-image.png";
import "../index.css";

function Home() {
    return (
        <>
            <Header />
            <HeroSection />
        </>
    );
}

function HeroSection() {
    return (
        <div className="bg-black text-[#fdfde1] py-25 px-25 grid grid-cols-2 gap-8 max-lg:grid-cols-1 max-md:py-3 max-md:px-6 max-md:text-center">
            <div className="flex flex-col gap-2 py-6 px-5">
                <h1 className="font-bold text-[4.375rem] leading-[4.375rem] max-lg:text-[3rem] max-md:text-[2.5rem] max-md:leading-[3rem]">
                    A creative design studio
                </h1>
                <p className="text-[#fdfde1] text-[1.3125rem] font-normal leading-[1.875rem] my-2 max-md:text-[1rem] max-md:leading-[1.5rem] max-md:my-4">
                    We're a creative design studio specializing in meeting the
                    needs of the new generation. We offer innovative and
                    cutting-edge design solutions to help our clients stand out
                    in today's fast-paced.
                </p>
            </div>
            <div className="p-4 flex justify-center align-center z-[1]">
                <div className="w-[70%] border-white border-8 rounded-2xl group overflow-hidden max-lg:w-[100%] z-[1] ">
                    <img
                        src={HeroImage}
                        alt="hero-image"
                        className="w-full h-full scale-110 group-hover:scale-100 transition-all duration-300 ease-in-out"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
