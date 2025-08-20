import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import gsap from "gsap";

const Header = () => {
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
        <div
            ref={textRef} data-animation="fadeup"
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px",
                borderBottom: "1px solid #0000001a",
            }}
        >
            <div>
                <a
                    href="/"
                    aria-current="page"
                    style={{ display: "inline-block", textDecoration: "none" }}
                >
                    <img
                        src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68227dfdc407523fbe5b56e7_post-labs-logo.svg"
                        alt="Post Labs logo"
                        style={{
                            width: "150px",
                            opacity: 1,
                            paddingLeft: "15px",
                        }}
                    />
                </a>
            </div>

            <div style={{ textAlign: "right" }}>
                <p
                    style={{
                        fontSize: "16px",
                        fontFamily: '"Inter Tight", Verdana, sans-serif',
                        color: "#333",
                        lineHeight: 1.4,
                        marginBottom: 0,
                        paddingRight: "40px"
                    }}
                >
                    We’re building the backbone of Canadian digital media —
                </p>
                <p
                    style={{
                        fontSize: "16px",
                        fontFamily: '"Inter Tight", Verdana, sans-serif',
                        color: "#333",
                        lineHeight: 1.4,
                        marginBottom: 0,
                        paddingRight: "40px"
                    }}
                >
                    a next-gen platform that gives creators the tools to thrive.
                </p>
            </div>
        </div>
    );
};

export default Header;
