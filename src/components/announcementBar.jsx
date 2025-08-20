"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./announcementBar.css";

const AnnouncementBar = () => {
    const textRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            textRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
            }
        );
    }, []);

    return (
        <section id="top" className="announcement-bar">
            <div ref={textRef} data-animation="fadeup">
                Help shape the future of digital journalism — we’re hiring!
            </div>
        </section>
    );
};

export default AnnouncementBar;
