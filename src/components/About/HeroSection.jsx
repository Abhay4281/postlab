import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroSection = () => {
    const lettersRef = useRef([]);
    const arrowRef = useRef(null);

    const lines = ["The Future of", "News Starts Here"];

    useEffect(() => {
        lettersRef.current.forEach((line, i) => {
            gsap.fromTo(
                line,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.05,
                    delay: i * 0.8,
                    ease: "power1.out",
                }
            );
            gsap.to(arrowRef.current, {
                y: -15,
                duration: 1,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
                delay: 1,
            });
        });
    }, []);

    return (
        <section
            className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between min-vh-100 bg-light px-3 px-md-5"
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#f8f8f2",
                padding: "40px",
                fontFamily: "'Inter Tight', Verdana, sans-serif",
            }}
        >
           
            <div
                className="d-flex flex-column text-center text-md-start"
                style={{ display: "flex", flexDirection: "column" }}>
                {lines.map((line, index) => (
                    <h1
                        key={index}
                        style={{
                            // fontSize: "130px",
                            fontSize: "clamp(2rem, 6vw, 144px)",
                            display: "inline-flex",
                            flexWrap: "wrap",
                            gap: "0.1rem",
                            fontFamily: "'Inter Tight', Verdana, sans-serif",
                            margin: 0,
                        }}
                    >
                        {line.split("").map((char, i) => (
                            <span
                                key={i}
                                ref={(el) => {
                                    if (!lettersRef.current[index]) lettersRef.current[index] = [];
                                    lettersRef.current[index][i] = el;
                                }}
                                style={{ display: "inline-block" }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </h1>
                ))}
            </div>


            <img
                ref={arrowRef}
                src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68238111591ea94a69065212_Vector.svg"
                alt="Down arrow"
                className="mt-4 mt-md-0 hero-arrow"
                style={{
                    opacity: 1,
                }}
            />
        </section>


    );
};

export default HeroSection;
