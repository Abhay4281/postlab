import React, { useState } from "react";
import FooterMarquee from "./FooterMarque";

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(`Subscribed with: ${email}`);
        setEmail("");
    };

    return (
        <>
            <FooterMarquee />
            <footer style={{ backgroundColor: "#111", color: "#fff", padding: "60px 20px" }}>

                <div
                    className="footer-container"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        backgroundColor: "#111",
                        padding: "40px",
                        color: "#fff",
                    }}
                >

                    <div
                        className="footer-left"
                        style={{
                            flex: "1 1 50%",
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            paddingRight: "20px",
                        }}
                    >
                        <a href="/" className="logo-link w-inline-block">
                            <img
                                src="https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/682786273e6c31f3343c6700_postlabs-logo-white.svg"
                                alt="Post Labs logo white"
                                className="footer-logo"
                                style={{ width: "150px" }}
                            />
                        </a>
                    </div>


                    <div
                        className="footer-right"
                        style={{
                            flex: "1 1 50%",
                            maxWidth: "400px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            paddingLeft: "20px",
                        }}
                    >
                        <ul
                            className="footer-links w-list-unstyled"
                            style={{ listStyle: "none", padding: 0, margin: 0 }}
                        >
                            <li>
                                <a href="/about" style={{ color: "#fff" }}>
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/contact" style={{ color: "#fff" }}>
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="/contact" style={{ color: "#fff" }}>
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" style={{ color: "#fff" }}>
                                    Cookie Policy
                                </a>
                            </li>
                        </ul>

                        <h2 style={{ marginTop: "30px" }}>Sign Up for Our Newsletter</h2>
                        <form
                            onSubmit={handleSubmit}
                            style={{ display: "flex", marginTop: "10px", width: "100%" }}
                        >
                            <input
                                type="email"
                                placeholder="Email Address"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{
                                    padding: "10px",
                                    borderRadius: "4px 0 0 4px",
                                    border: "none",
                                    flex: 1,
                                    fontSize: "16px",
                                }}
                            />
                            <button
                                type="submit"
                                style={{
                                    padding: "10px 20px",
                                    borderRadius: "0 4px 4px 0",
                                    border: "none",
                                    backgroundColor: "black",
                                    color: "#fff",
                                    cursor: "pointer",
                                }}
                            >

                            </button>
                        </form>
                    </div>
                </div>


                {/* Bottom Copyright Section */}
                <div
                    className="copyright"
                    style={{
                        marginTop: "50px",
                        borderTop: "1px solid #333",
                        paddingTop: "20px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "5px",
                        fontSize: "14px",
                        color: "#aaa",
                    }}
                >
                    <div className="copyright-text">© 2025 Post Labs, Inc. All rights reserved.</div>
                    <div className="copyright-text">
                        Designed by{" "}
                        <a
                            href="https://gohrvst.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="copyright-link"
                            style={{ color: "#aaa" }}
                        >
                            HRVST
                        </a>
                        .
                    </div>
                </div>
            </footer>
        </>


    );
};

export default Footer;
