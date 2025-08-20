import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Builder from "./About/Builder";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

const ScrollStack = () => {
    const builderRef = useRef(null);

    useEffect(() => {
        // Animate Builder up as we scroll
        gsap.to(builderRef.current, {
            yPercent: -100, // move it up completely
            ease: "none",
            scrollTrigger: {
                trigger: builderRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true, // tie animation to scroll
            },
        });
    }, []);

    return (
        <div style={{ position: "relative" }}>
            {/* Builder is sticky so Footer is revealed from below */}
            <div
                ref={builderRef}
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 2,
                }}
            >
                <Builder />
            </div>

            {/* Footer is underneath */}
            <div style={{ position: "relative", zIndex: 1 }}>
                <Footer />
            </div>
        </div>
    );
};

export default ScrollStack;
