import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GridSections = () => {
    const sections = [
        {
            text: "Post Labs is building a homegrown \nplatform designed for Canadians and the\nfuture of Canadian media.",
            icon: "https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68266ea52e91d548861b8d20_icon-1-transparent.svg",
        },
        {
            text: "At its core is PostOS, our \nmade-in-Canada publishing engine that \nconnects local voices, communities, and trusted journalism in one seamless digital\nexperience.",
            icon: "https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68267094af8c90b6a17e323a_icon-2-transparent.svg",
        },
        {
            text: "Built by Canadians, for Canadians\nPostOS is more than just technology\n—it’s a way to bring our stories home.",
            icon: "https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68267087adfa3ad7422b8753_icon-3-transparent.svg",
        },
    ];

    const lettersRef = useRef([]);

    useEffect(() => {
       
        const allLetters = gsap.utils.toArray(".anim-letter");

        gsap.fromTo(
            allLetters,
            { opacity: 0, x: -20 }, 
            {
                opacity: 1,
                x: 0,
                duration: 0.5,
                ease: "power3.out",
                stagger: 0.02, 
                scrollTrigger: {
                    trigger: ".grid-section", 
                    start: "top 80%",
                },
            }
        );
    }, []);


    return (
        <div className="container no-padding" >
            <div className="row">


                <div className="col-12 col-md-6 d-flex flex-column justify-content-between">

                    <div className="grid-section mb-5">

                        <p
                            className="no-margin max-w-650"
                            style={{ fontSize: "clamp(2rem, 8vw, 36px)", lineHeight: 1.3 }}
                        >
                            {sections[0].text.split("\n").map((line, lineIndex) => (
                                <React.Fragment key={lineIndex}>
                                    {line.split("").map((char, i) => (
                                        <span
                                            key={i + lineIndex * 1000}
                                            ref={(el) => (lettersRef.current[i + lineIndex * 1000] = el)}
                                            className="anim-letter"
                                            style={{ display: "inline-block" }}
                                        >
                                            {char === " " ? "\u00A0" : char}
                                        </span>
                                    ))}
                                    <br />
                                </React.Fragment>
                            ))}
                        </p>

                        <img src={sections[0].icon} alt="" className="img-fluid mt-3" />
                    </div>


                    <div className="grid-section mt-5">
                        <p
                            className="no-margin max-w-650"
                            style={{ fontSize: "clamp(2rem, 8vw, 36px)", lineHeight: 1.3 }}
                        >
                            {sections[2].text.split("\n").map((line, lineIndex) => (
                                <React.Fragment key={lineIndex}>
                                    {line.split("").map((char, i) => (
                                        <span
                                            key={i + lineIndex * 1000}
                                            ref={(el) => (lettersRef.current[i + lineIndex * 1000] = el)}
                                            className="anim-letter"
                                            style={{ display: "inline-block" }}
                                        >
                                            {char === " " ? "\u00A0" : char}
                                        </span>
                                    ))}
                                    <br />
                                </React.Fragment>
                            ))}
                        </p>

                        <img src={sections[2].icon} alt="" className="img-fluid mt-3" />
                    </div>
                </div>

                <div className="col-12 col-md-6 d-flex align-items-center">
                    <div className="grid-section">
                        <p
                            className="no-margin max-w-650"
                            style={{ fontSize: "clamp(2rem, 8vw, 36px)", lineHeight: 1.3 }}
                        >
                            {sections[1].text.split("\n").map((line, lineIndex) => (
                                <React.Fragment key={lineIndex}>
                                    {line.split("").map((char, i) => (
                                        <span
                                            key={i + lineIndex * 2000}
                                            ref={(el) => (lettersRef.current[i + lineIndex * 2000] = el)}
                                            className="anim-letter"
                                            style={{ display: "inline-block" }}
                                        >
                                            {char === " " ? "\u00A0" : char}
                                        </span>
                                    ))}
                                    <br />
                                </React.Fragment>
                            ))}
                        </p>

                        <img src={sections[1].icon} alt="" className="img-fluid mt-3" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridSections;
