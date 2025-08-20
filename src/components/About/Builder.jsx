import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Builder = () => {
    const lettersRef = useRef([]);
    const arrowRef = useRef(null);

    const lines = [
        { text: "For Builders", fontSize: "clamp(2rem, 8vw, 7.25rem)" },
        {
            text: "We’re hiring. If you’re passionate about media, technology, and the future of",
            fontSize: "16px"
        },
        {
            text: "Canada’s digital ecosystem, come build with us. We’re always looking for great",
            fontSize: "16px"
        },
        {
            text: "people. Check out our jobs page for current opportunities.",
            fontSize: "16px"
        },
        {
            text: "careers@postlabs.com",
            fontSize: "24px"
        }


    ];

    useEffect(() => {
        lettersRef.current.forEach((lineLetters) => {
            gsap.fromTo(
                lineLetters,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    stagger: 0.01,
                    scrollTrigger: {
                        trigger: lineLetters[0],
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });

        if (arrowRef.current) {
            gsap.to(arrowRef.current, {
                y: -15,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: arrowRef.current,
                    start: "top 80%",
                },
            });
        }
    }, []);

    return (
        <section
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-end",
                padding: "40px",
                fontFamily: "'Inter Tight', Verdana, sans-serif",
                borderBottom: "1px solid #0000001a",
                textAlign: "right",
                background: "linear-gradient(to top, #ffe600, #fff)",
            }}
        >
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>
                {lines.map((line, index) => (
                    <h1
                        key={index}
                        style={{
                            fontSize: line.fontSize,
                            display: "inline-flex",
                            flexWrap: "wrap",
                            gap: "0.05rem",
                            margin: 0,
                            justifyContent: "flex-end",
                            textAlign: "left",
                        }}
                    >
                        {line.text.split("").map((char, i) => {
                            if (line.text.includes("@")) {
                                return (
                                    <a
                                        key={i}
                                        href={`mailto:${line.text}`}
                                        style={{
                                            color: "black",
                                            textDecoration: "underline",
                                            display: "inline-block",
                                        }}
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </a>
                                );
                            }

                            return (
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
                            );
                        })}
                    </h1>
                ))}
            </div>
        </section>
    );
};

export default Builder;
