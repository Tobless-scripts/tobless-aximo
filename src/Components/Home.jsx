import Header from "./Header";
import HeroImage from "../assets/hero-image.png";
import "../index.css";
import img1 from "../assets/user1.png";
import img2 from "../assets/user2.png";
import img3 from "../assets/user3.png";
import phone from "../assets/phone.png";
import shape1 from "../assets/first animation.png";
import course1 from "../assets/UIUX.png";
import course2 from "../assets/Graphics.png";
import course3 from "../assets/web.png";
import course4 from "../assets/motion.png";
import next from "../assets/next.svg";
import thumbnail from "../assets/video-thumbnail.png";
import play from "../assets/play button.svg";
import { useEffect, useState } from "react";
import open from "../assets/open.png";
import close from "../assets/close.png";
import stars from "../assets/star.png";
import flower from "../assets/flower.png";
import member1 from "../assets/team1-DmWE10zh.png";
import member2 from "../assets/member2.png";
import member3 from "../assets/member3.png";
import member4 from "../assets/member4.png";
import Footer from "./Footer";

function Home() {
    return (
        <>
            <Header />
            <HeroSection />
            <Provide />
            <Outstanding />
            <Projects />
            <Quality />
            <Clients />
            <VerticalScrollText />
            <Team />
            <Footer />
        </>
    );
}

function HeroSection() {
    return (
        <>
            <style>
                {`
                  @keyframes wiggle {
                    0%, 100% { transform: translateX(0); }
                    50% { transform: translateX(30px); }
                  }
                  .animate-wiggle {
                    animation: wiggle 5s infinite ease-in-out
                  }
                `}
            </style>
            <div className="bg-black text-[#fdfde1] py-25 px-25 grid grid-cols-2 gap-8 max-lg:grid-cols-1 max-md:py-3 max-md:px-2 max-md:text-center">
                <div className="flex flex-col gap-2 py-6 px-5">
                    <h1 className="font-bold text-[4.375rem] leading-[4.375rem] max-lg:text-[3rem] max-md:text-[2.5rem] max-md:leading-[3rem]">
                        A creative design studio
                    </h1>

                    <p className="text-[#fdfde1] text-[1.3125rem] font-normal leading-[1.875rem] my-2 max-md:text-[1rem] max-md:leading-[1.5rem] max-md:my-4">
                        We're a creative design studio specializing in meeting
                        the needs of the new generation. We offer innovative and
                        cutting-edge design solutions to help our clients stand
                        out in today's fast-paced.
                    </p>

                    <div className="flex gap-8 my-6 items-center max-md:flex-col max-md:gap-4">
                        <div className="flex items-center space-x-[-0.5rem] ">
                            <img
                                src={img1}
                                alt="user one"
                                className="rounded-full w-16 h-16 border-2 border-black"
                            />
                            <img
                                src={img2}
                                alt="user two"
                                className="rounded-full w-16 h-16 border-2 border-black"
                            />
                            <img
                                src={img3}
                                alt="user three"
                                className="rounded-full w-16 h-16 border-2 border-black"
                            />
                        </div>
                        <p className="text-[rgb(253, 253, 225)] leading-[30px] text-base font-normal text-center">
                            Believed by more than a thousand people
                        </p>
                    </div>

                    <div className="relative mt-8">
                        <div className="inline-flex w-[70%] items-center text-center justify-between py-2.5 pl-12 pr-4 border-2 font-bold text-base border-black rounded-full font-inter transition duration-500 bg-lime-300 text-black cursor-pointer shadow-white shadow-md hover:shadow-none max-sm:w-full max-sm:pl-6 max-sm:pr-2">
                            <div>
                                <p>Book a free consultation</p>
                            </div>
                            <div className="w-12 bg-black p-2 rounded-full h-12 ">
                                <img
                                    src={phone}
                                    alt="phone"
                                    className="w-full"
                                />
                            </div>
                        </div>

                        <div>
                            <img
                                src={shape1}
                                alt="first animation"
                                className="absolute right-[-3%] top-[-100%] animate-wiggle w-[45%] max-lg:hidden"
                            />
                        </div>
                    </div>
                </div>

                <div className="p-4 flex justify-center align-center z-[1] h-[75%] max-md:h-[100%]">
                    <div className="w-[70%] border-white border-8 rounded-2xl group overflow-hidden max-lg:w-[100%] z-[1] ">
                        <img
                            src={HeroImage}
                            alt="hero-image"
                            className="w-full h-full scale-110 group-hover:scale-100 transition-all duration-500 ease-in-out"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

function Provide() {
    return (
        <>
            <div className="p-25 max-lg:py-3 max-lg:px-2">
                <div className="text-center px-12 pt-12 max-md:px-0">
                    <h1 className="leading-[4.6875rem] text-[4.375rem] font-bold max-md:font-[600] max-md:leading-[2.4375rem] max-md:text-[2.25rem] ">
                        We provide effective design solutions
                    </h1>
                </div>

                <div className="grid grid-cols-2 gap-8 mt-12 max-md:grid-cols-1">
                    <div className="p-8 border-2 border-black rounded-2xl cursor-pointer hover:bg-lime-300 hover:shadow-black hover:shadow-lg transition-all duration-300 ease-in-out">
                        <img
                            src={course1}
                            alt="UI/UX Design"
                            className="w-18 my-4"
                        />
                        <h1 className="font-bold leading-[2.625rem] text-[1.875rem] my-4">
                            UI/UX Design
                        </h1>
                        <p className="text-[rgb(12, 12, 12)] leading-[1.875rem] text-[1.125rem] font-normal my-4">
                            Focusing on user interface (UI) and user experience
                            (UX) design enhance the usability and accessibility
                            of digital products & app.
                        </p>
                        <img src={next} alt="next" className="my-2" />
                    </div>

                    <div className="p-8 border-2 border-black rounded-2xl cursor-pointer hover:bg-lime-300 hover:shadow-black hover:shadow-lg transition-all duration-300 ease-in-out">
                        <img
                            src={course2}
                            alt="Graphics Design"
                            className="w-18 my-4"
                        />
                        <h1 className="font-bold leading-[2.625rem] text-[1.875rem] my-4">
                            Graphic Design
                        </h1>
                        <p className="text-[rgb(12, 12, 12)] leading-[1.875rem] text-[1.125rem] font-normal my-4">
                            Creating visual elements such as logos, branding
                            materials, page layout techniques, brochures, &
                            other marketing collateral.
                        </p>
                        <img src={next} alt="next" className="my-2" />
                    </div>

                    <div className="p-8 border-2 border-black rounded-2xl cursor-pointer hover:bg-lime-300 hover:shadow-black hover:shadow-lg transition-all duration-300 ease-in-out">
                        <img
                            src={course3}
                            alt="Web Design"
                            className="w-18 my-4"
                        />
                        <h1 className="font-bold leading-[2.625rem] text-[1.875rem] my-4">
                            Web Design
                        </h1>
                        <p className="text-[rgb(12, 12, 12)] leading-[1.875rem] text-[1.125rem] font-normal my-4">
                            Designing and developing websites to ensure they are
                            visually look and appealing, user-friendly, and
                            functional your website.
                        </p>
                        <img src={next} alt="next" className="my-2" />
                    </div>

                    <div className="p-8 border-2 border-black rounded-2xl cursor-pointer hover:bg-lime-300 hover:shadow-black hover:shadow-lg transition-all duration-300 ease-in-out">
                        <img
                            src={course4}
                            alt="Motion Graphics"
                            className="w-18 my-4"
                        />
                        <h1 className="font-bold leading-[2.625rem] text-[1.875rem] my-4">
                            Motion Graphics
                        </h1>
                        <p className="text-[rgb(12, 12, 12)] leading-[1.875rem] text-[1.125rem] font-normal my-4">
                            Creating animate graphics, videos for various
                            purposes, including marketing and entertainment. To
                            help sell a product or service.
                        </p>
                        <img src={next} alt="next" className="my-2" />
                    </div>
                </div>
            </div>
        </>
    );
}

function Outstanding() {
    return (
        <>
            <div className="p-25 max-lg:py-6 max-lg:px-4 mt-25">
                <div className="grid grid-cols-2 gap-8 items-center max-md:grid-cols-1 max-md:text-center">
                    <div>
                        <h1 className="font-bold leading-[4.6875rem] text-[4rem] max-md:font-[600] max-md:leading-[2.4375rem] max-md:text-[2.25rem] ">
                            We make your business stand out
                        </h1>
                    </div>
                    <div className="pl-48 max-lg:pl-0">
                        <p className="font-[rgb(12, 12, 12)] leading-[1.875rem] text-[1.3125rem] font-[400] ">
                            We work closely with our clients to know their
                            objectives, target audience, unique needs, and
                            practical design solutions.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-5 gap-12 mt-20 max-md:grid-cols-1 items-center">
                    <div className="col-span-3 relative border-8 border-black rounded-xl">
                        <img
                            src={thumbnail}
                            alt="thumbnail"
                            className="w-full h-full"
                        />

                        <div className="absolute top-[50%] left-[40%] max-sm:left-[25%] max-md:left-[35%]  cursor-pointer shadow-white shadow-md hover:shadow-none rounded-full duration-300 ease-in-out ">
                            <img src={play} alt="play" />
                        </div>
                    </div>

                    <div className="col-span-2 bg-black rounded-xl text-white text-center px-8 max-md:col-span-3">
                        <div className="py-2">
                            <h1 className="text-lime-300 font-bold text-[4.375rem] ">
                                15+
                            </h1>
                            <p className="font-semi-bold leading-[1.875rem] text-[1.125rem] ">
                                Years of experience
                            </p>
                        </div>
                        <div className="py-2 border-t-1 border-white">
                            <h1 className="text-lime-300 font-bold text-[4.375rem] ">
                                120k
                            </h1>
                            <p className="font-semi-bold leading-[1.875rem] text-[1.125rem] ">
                                Successful Projects
                            </p>
                        </div>
                        <div className="py-2 border-t-1 border-white">
                            <h1 className="text-lime-300 font-bold text-[4.375rem] ">
                                100%
                            </h1>
                            <p className="font-semi-bold leading-[1.875rem] text-[1.125rem] ">
                                Client satisfaction rate
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function Projects() {
    return (
        <>
            <div className="p-25 bg-black max-md:py-3 max-md:px-2 ">
                <div className="text-center px-12 pt-12 max-md:px-0">
                    <h1 className="leading-[4.6875rem] text-[4.375rem] font-bold max-md:font-[600] max-md:leading-[2.4375rem] max-md:text-[2.25rem] text-white ">
                        Have a wide range of creative projects
                    </h1>
                </div>
            </div>
        </>
    );
}

function Quality() {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };
    useEffect(() => {
        toggleSection("idea");
    }, []);
    return (
        <>
            <div className="grid grid-cols-2 p-25 gap-8 max-lg:grid-cols-1 max-md:py-3 max-md:px-2 max-md:text-center">
                <div>
                    <h1 className="leading-[4.5rem] text-[3.9rem] font-bold max-md:font-[600] max-md:leading-[2.4375rem] max-md:text-[2.25rem] text-black py-4">
                        Our high-quality working processes
                    </h1>
                    <p className="font-[rgb(12, 12, 12)] leading-[1.875rem] text-[1.2rem] font-[400] py-4">
                        We focus at every stage on effective communication and
                        collaboration between the client and ensuring that the
                        final design meets the client's objectives and
                        expectations.
                    </p>
                    <p className="font-[rgb(12, 12, 12)] leading-[1.875rem] text-[1.2rem] font-[400] ">
                        It is important to note that these are simplified steps,
                        and the actual work process may vary depending on the
                        complexity of the project.
                    </p>
                </div>
                <div className="p-5 space-y-3 justify-center flex flex-col items-center max-md:text-left">
                    {/* Project Idea */}
                    <div
                        className={`px-8 py-6 border-2 rounded-lg cursor-pointer transition-all duration-500 ease-in-out w-[98%] max-md:w-[100%]  ${
                            openSection === "idea"
                                ? "bg-lime-300 shadow-lg shadow-black"
                                : "bg-white shadow-none"
                        }`}
                        onClick={() => toggleSection("idea")}
                    >
                        <div className="flex justify-between items-center">
                            <h1 className="font-bold leading-[2.625rem] text-[1.875rem] max-md:text-[1.5rem] max-md:leading-[2.3rem] ">
                                01/Project Idea
                            </h1>
                            <img
                                src={openSection === "idea" ? close : open}
                                alt="faq"
                                className="w-[2rem] "
                            />
                        </div>
                        {openSection === "idea" && (
                            <p className="mt-2 font-normal text-[rgb(33, 37, 41)] text-[1.125rem] leading-[1.875rem] ">
                                The process starts with a detailed discussion
                                with the client to understand their idea and
                                goals
                            </p>
                        )}
                    </div>

                    {/* Brainstorming */}
                    <div
                        className={`p-5 border-2 rounded-lg cursor-pointer transition-all duration-500 ease-in-out w-[98%] max-md:w-[100%] ${
                            openSection === "brainstorming"
                                ? "bg-lime-300 shadow-lg shadow-black"
                                : "bg-white shadow-none"
                        }`}
                        onClick={() => toggleSection("brainstorming")}
                    >
                        <div className="flex justify-between items-center">
                            <h1 className="font-bold leading-[2.625rem] text-[1.875rem]  max-md:text-[1.5rem] max-md:leading-[2.3rem] ">
                                02/Brainstorming
                            </h1>
                            <img
                                src={
                                    openSection === "brainstorming"
                                        ? close
                                        : open
                                }
                                alt="faq"
                                className="w-[2rem] "
                            />
                        </div>
                        {openSection === "brainstorming" && (
                            <p className="mt-2 font-normal text-[rgb(33, 37, 41)] text-[1.125rem] leading-[1.875rem]  ">
                                Brainstorming is a group creativity technique in
                                which members attempt to find a solution
                            </p>
                        )}
                    </div>

                    {/* Launch */}
                    <div
                        className={`p-5 border-2 rounded-lg cursor-pointer transition-all duration-500 ease-in-out w-[98%] max-md:w-[100%] ${
                            openSection === "launch"
                                ? "bg-lime-300 shadow-lg shadow-black"
                                : "bg-white shadow-none"
                        }`}
                        onClick={() => toggleSection("launch")}
                    >
                        <div className="flex justify-between items-center">
                            <h1 className="font-bold leading-[2.625rem] text-[1.875rem]  max-md:text-[1.5rem] max-md:leading-[2.3rem] ">
                                03/ Launch
                            </h1>
                            <img
                                src={openSection === "launch" ? close : open}
                                alt="faq"
                                className="w-[2rem] "
                            />
                        </div>
                        {openSection === "launch" && (
                            <p className="mt-2 font-normal text-[rgb(33, 37, 41)] text-[1.125rem] leading-[1.875rem] ">
                                The completed design assets or final product are
                                delivered with necessary documentation.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

function Clients() {
    const clients = [
        {
            id: 1,
            ReviewTopic: "Super customer service!",
            Review: "Excellent customer service and I was really impressed and happy with my purchase especially as it was a last minute order which got to me in time, and when it arrived I was very happy with the design and size and so was the recipient.",
            src: img1,
            Name: "William Jack",
            Profession: "Founder@XYZ",
        },

        {
            id: 2,
            ReviewTopic: "Exceptional creativity and vision",
            Review: "Working Mthemeus was a game-changer for our brand. Their exceptional creativity & vision breathed new life into our visual. The logo they perfectly captures our essence & has become instantly recognizable. We couldn't be happier the results!",
            src: img2,
            Name: "Smith Align",
            Profession: "Businessman",
        },

        {
            id: 3,
            ReviewTopic: "Innovative and professional",
            Review: "I can't say enough good things about them. Their team is not only incredibly talented but also highly professional. They listened to our ideas and brought to life in ways we couldn't have imagined. Their innovative approach and dedication to our project.",
            src: img3,
            Name: "Smith Align",
            Profession: "Milano Joe",
        },

        {
            id: 4,
            ReviewTopic: "Transformed our brand",
            Review: "Our partnership with Mthemeus transformed our brand from ordinary to extraordinary. Their branding expertise and design work elevated our marketing materials to a whole new level. Our customers have taken notice, and boost in brand recognition.",
            src: img1,
            Name: "Daniel Mark",
            Profession: "Marketing Director",
        },
    ];
    return (
        <>
            <div className="p-25 max-md:py-3 max-md:px-2 ">
                <div className="text-center px-25 pt-12 max-md:px-0">
                    <h1 className="leading-[4.6875rem] text-[4.375rem] font-bold max-md:font-[600] max-md:leading-[2.4375rem] max-md:text-[2.25rem] ">
                        Clients are always satisfied with us
                    </h1>
                </div>
                <div className="py-8 grid grid-cols-2 gap-8 max-lg:grid-cols-1 ">
                    {clients.map((client) => (
                        <div
                            key={client.id}
                            className="p-8 border-2 border-black rounded-xl hover:shadow-lg hover:shadow-black transition-all duration-500 ease-in-out cursor-pointer "
                        >
                            <img
                                src={stars}
                                alt="stars"
                                className="w-[11rem] pb-2 "
                            />
                            <h1 className="font-bold leading-[2.625rem] text-[2rem] pb-2 ">
                                {client.ReviewTopic}
                            </h1>
                            <p className="font-normal text-[1.125rem] leading-[1.875rem] ">
                                {client.Review}
                            </p>
                            <div className="flex justify-start gap-8 mt-8">
                                <div className="rounded-full border-2 border-black w-[4rem] h-[4rem] overflow-hidden ">
                                    <img
                                        src={client.src}
                                        alt="Client"
                                        className="w-full"
                                    />
                                </div>
                                <div>
                                    <h2 className="font-bold leading-[1.875rem] text-[1.3125rem] ">
                                        {client.Name}
                                    </h2>
                                    <p className="font-normal leading-[1.875rem] text-[1.3125rem] ">
                                        {client.Profession}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

function VerticalScrollText() {
    return (
        <div className="scroll-container">
            <div className="scroll-text p-8">
                <div className="flex gap-2 mx-14">
                    <img src={flower} alt="flower" />
                    <h1 className="text-center text-[2.1875rem] leading-[3.0625rem] font-bold px-4 max-md:font-[600] max-md:leading-[2.5rem] max-md:text-[1.9rem]">
                        LET'S CREATE NEW EXPERIENCES
                    </h1>
                    <img src={flower} alt="flower" />
                </div>

                <div className="flex gap-2 mx-14">
                    <h1 className="text-center text-[2.1875rem] leading-[3.0625rem] font-bold px-4">
                        LET'S CREATE NEW EXPERIENCES
                    </h1>
                    <img src={flower} alt="flower" />
                </div>

                <div className="flex gap-2 mx-14">
                    <h1 className="text-center text-[2.1875rem] leading-[3.0625rem] font-bold px-4">
                        LET'S CREATE NEW EXPERIENCES
                    </h1>
                    <img src={flower} alt="flower" />
                </div>

                <div className="flex gap-2 mx-14">
                    <h1 className="text-center text-[2.1875rem] leading-[3.0625rem] font-bold px-4">
                        LET'S CREATE NEW EXPERIENCES
                    </h1>
                    <img src={flower} alt="flower" />
                </div>

                <div className="flex gap-2 mx-14">
                    <h1 className="text-center text-[2.1875rem] leading-[3.0625rem] font-bold px-4">
                        LET'S CREATE NEW EXPERIENCES
                    </h1>
                    <img src={flower} alt="flower" />
                </div>

                <div className="flex gap-2 mx-14">
                    <h1 className="text-center text-[2.1875rem] leading-[3.0625rem] font-bold px-4">
                        LET'S CREATE NEW EXPERIENCES
                    </h1>
                    <img src={flower} alt="flower" />
                </div>
            </div>
        </div>
    );
}

function Team() {
    const members = [
        { src: member1, Name: "Andrew Mark", Role: "Creative Director", id: 1 },
        { src: member2, Name: "Jack Taylor", Role: "Senior Designer", id: 2 },
        { src: member3, Name: "Martine Joy", Role: "Project Manager", id: 3 },
        { src: member4, Name: "Adam Straw", Role: "Web Developer", id: 4 },
    ];
    return (
        <>
            <div className="p-25 max-md:py-3 max-md:px-2 ">
                <div className="text-center px-25 pt-12 max-lg:px-0">
                    <h1 className="leading-[4.6875rem] text-[4.375rem] font-bold max-md:font-[600] max-md:leading-[2.4375rem] max-md:text-[2.25rem] ">
                        We have a team of creative people
                    </h1>
                </div>
                <div className="grid grid-cols-4 gap-8 mt-12 max-lg:grid-cols-2 max-md:grid-cols-1">
                    {members.map((member) => (
                        <div key={member.id} className="text-center">
                            <div className="border-4 cursor-pointer border-black bg-[#ffffff] mb-4 rounded-xl ">
                                <img src={member.src} alt="Member" />
                            </div>

                            <h1 className="font-bold leading-[2.625rem] text-[1.875rem] ">
                                {member.Name}
                            </h1>

                            <p className="font-normal text-[1.3125rem] leading-[1.875rem] text-[rgb(12, 12, 12)] ">
                                {member.Role}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;
