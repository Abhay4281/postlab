import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const FooterMarquee = () => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        const marquee = marqueeRef.current;

        gsap.to(marquee, {
            x: "-50%",
            duration: 20,
            repeat: -1,
            ease: "linear",
            pin: true,
        });
    }, []);

    return (
        <section style={{ width: "100%", background: "#111", overflow: "hidden", padding: "40px 0" }}>
            <div
                ref={marqueeRef}
                style={{
                    display: "inline-flex",
                    whiteSpace: "nowrap",
                }}
            >
             
                <div style={{ display: "inline-flex", marginRight: "50px", fontSize: "80px", color: "#fff" }}>
                    Ready to Build the Future of Canadian Media?{" "}
                    <a href="/contact-us" style={{ marginLeft: "20px", textDecoration: "underline", color: "#fff" }}>
                        Contact Us
                    </a>

                    <span style={{ display: "inline-flex", marginLeft: "20px", height: "1rem" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57" fill="none">
                            <path d="M5.09082 0.823242L50.0605 45.7861L49.667 2.61621L49.665 2.36133L49.9199 2.36426L55.5625 2.42969L55.8076 2.43262L55.8096 2.67773L56.25 55.998L56.252 56.252L55.998 56.25C49.1732 56.1848 39.2577 56.1118 29.3418 56.0303L29.0938 56.0273V56.0107C19.2533 55.93 9.4295 55.8577 2.66113 55.793L2.41699 55.791L2.41309 55.5479L2.32422 49.9463L2.31934 49.6895L2.57617 49.6924C8.9767 49.7576 16.4211 49.815 24.0859 49.8721L34.5908 49.9512L44.9131 50.043L45.791 50.0527L0.823242 5.08984L0.646484 4.91309L0.823242 4.73633L4.7373 0.823242L4.91406 0.646484L5.09082 0.823242Z" fill="white" stroke="white" strokeWidth="0.5" />
                        </svg>
                    </span>

                </div>


                <div style={{ display: "inline-flex", marginRight: "50px", fontSize: "80px", color: "#fff" }}>
                    Ready to Build the Future of Canadian Media?{" "}
                    <a href="/contact-us" style={{ marginLeft: "20px", textDecoration: "underline", color: "#fff" }}>
                        Contact Us
                    </a>

                    <span style={{ display: "inline-flex", marginLeft: "20px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57" fill="none">
                            <path d="M5.09082 0.823242L50.0605 45.7861L49.667 2.61621L49.665 2.36133L49.9199 2.36426L55.5625 2.42969L55.8076 2.43262L55.8096 2.67773L56.25 55.998L56.252 56.252L55.998 56.25C49.1732 56.1848 39.2577 56.1118 29.3418 56.0303L29.0938 56.0273V56.0107C19.2533 55.93 9.4295 55.8577 2.66113 55.793L2.41699 55.791L2.41309 55.5479L2.32422 49.9463L2.31934 49.6895L2.57617 49.6924C8.9767 49.7576 16.4211 49.815 24.0859 49.8721L34.5908 49.9512L44.9131 50.043L45.791 50.0527L0.823242 5.08984L0.646484 4.91309L0.823242 4.73633L4.7373 0.823242L4.91406 0.646484L5.09082 0.823242Z" fill="white" stroke="white" strokeWidth="0.5" />
                        </svg>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default FooterMarquee;
