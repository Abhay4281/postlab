import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const BuildingSection = () => {
    const lettersRef = useRef([]);
    const arrowRef = useRef(null);

    const lines = ["What We're", "Building"];

    useEffect(() => {
        gsap.fromTo(
            lettersRef.current,
            { y: -50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power3.out",
            }
        );

        gsap.to(arrowRef.current, {
            y: -15,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: 1,
        });
    }, []);



    return (
        <section
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#f8f8f2",
                padding: "40px",
                fontFamily: "'Inter Tight', Verdana, sans-serif",
                borderBottom: "1px solid #0000001a",
            }}
        >
            <div style={{ display: "flex", flexDirection: "column" }}>
                {lines.map((line, index) => (
                    <h1
                        key={index}
                        style={{
                            fontSize: "clamp(2rem, 8vw, 8.25rem)",
                            display: "inline-flex",
                            flexWrap: "wrap",
                            gap: "0.1rem",
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


        </section>



    );
};

export default BuildingSection;
