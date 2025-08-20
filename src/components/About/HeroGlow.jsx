import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroGlow() {
    const glowRef = useRef(null);

    useEffect(() => {
        const glow = glowRef.current;

        // Start at center of screen on refresh
        gsap.set(glow, {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            opacity: 0.8,
            scale: 1,
        });

        // Move with cursor
        const handleMouseMove = (e) => {
            gsap.to(glow, {
                x: e.clientX - 150, // center the glow around cursor
                y: e.clientY - 150,
                duration: 0.6,
                ease: "power3.out",
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            className="hero-glow-container"
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 2, 
                pointerEvents: "none", 
            }}
        >
            <div
                ref={glowRef}
                className="hero-glow"
                style={{
                    backgroundImage: `url(https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/6824ade8d12d0b0ba2ecdae9_pl-gradient.svg)`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    width: 1000,
                    height: 1000,
                    borderRadius: "50%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    opacity: 0.8,
                    mixBlendMode: "screen", 
                }}
            ></div>
        </div>
    );
}
