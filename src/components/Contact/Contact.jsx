import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Contact = () => {
    const lettersRef = useRef([]);

    const lines = ["Let's Talk"];

    useEffect(() => {

        const allLetters = lettersRef.current.flat();
        gsap.fromTo(
            allLetters,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: "power2.out" }
        );
    }, []);

    return (
        <section
            style={{
                display: "flex",
                width: "1520px",
                height: "344px",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#f8f8f2",
                padding: "40px",
                fontFamily: "'Inter Tight', Verdana, sans-serif",
                borderBottom: "1px solid #0000001a",
                fontWeight: "400",
            }}
        >

            <div style={{ display: "flex", flexDirection: "column" }}>
                {lines.map((line, index) => (
                    <h1
                        key={index}
                        style={{
                            fontSize: "clamp(2rem, 8vw, 7.25rem)",
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

export default Contact;
