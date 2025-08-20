import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const chars = textRef.current.querySelectorAll(".char");

        // Initial grey color
        gsap.set(chars, { color: "#ccc" });

        // Scroll-triggered color change
        gsap.to(chars, {
            color: "#000",
            ease: "none",
            stagger: {
                each: 0.02,
                from: "start",
            },
            scrollTrigger: {
                trigger: textRef.current,
                start: "top 80%",
                end: "bottom 20%",
                scrub: true,
            },
        });
    }, []);

    const lines = [
        "Post Labs is rethinking",
        "how digital media works",
        "for Canadians. Our",
        "mission is simple: make",
        "journalism profitable,",
        "sustainable, and trusted –",
        "built for Canadians, by",
        "Canadians.",
    ];

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                flexDirection: "column",
                minHeight: "150vh", // taller to allow scrolling
                padding: "20px",
                backgroundColor: "#f8f8f2",
                fontSize: "clamp(2rem, 8vw, 3.25rem)",
                lineHeight: 1.2,
            }}
        >
            <p ref={textRef}>
                {lines.map((line, i) => (
                    <React.Fragment key={i}>
                        {line.split("").map((char, index) => (
                            <span
                                key={index}
                                className="char"
                                style={{ display: "inline-block", whiteSpace: "pre" }}
                            >
                                {char}
                            </span>
                        ))}
                        <br />
                    </React.Fragment>
                ))}
            </p>
        </div>
    );
};

export default About;
