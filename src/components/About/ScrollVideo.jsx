import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollVideo = () => {
    const containerRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        const trigger = containerRef.current;
        const video = videoRef.current;

        gsap.fromTo(
            video,
            { width: "40vw", height: "40vh", borderRadius: "20px" },
            {
                width: "100vw",
                height: "100vh",
                borderRadius: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: trigger,
                    start: "top 80%",   // start when the top of section is at 80% of viewport
                    end: "top 20%",     // end when the top reaches 20% of viewport
                    scrub: true,
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(st => st.kill()); // cleanup
        };
    }, []);

    return (
        <section
            ref={containerRef}
            style={{
                height: "200vh",
                position: "relative",
            }}
        >
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                style={{
                    width: "40vw",
                    height: "40vh",
                    objectFit: "cover",
                    borderRadius: "20px",
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    transformOrigin: "center center",
                }}
            >
                <source
                    src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2%2F682e229ec192a9f049ae0b4a_post-labs-video-1-transcode.mp4"
                    type="video/mp4"
                />
                <source
                    src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2%2F682e229ec192a9f049ae0b4a_post-labs-video-1-transcode.webm"
                    type="video/webm"
                />
            </video>
        </section>
    );
};

export default ScrollVideo;
