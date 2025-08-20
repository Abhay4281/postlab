import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ContactUs = () => {
    const wordRefs = useRef([]);
    wordRefs.current = [];

    const formRefs = useRef([]);
    formRefs.current = [];

    const addToRefs = (el) => {
        if (el && !wordRefs.current.includes(el)) {
            wordRefs.current.push(el);
        }
    };

    const addFormRefs = (el) => {
        if (el && !formRefs.current.includes(el)) {
            formRefs.current.push(el);
        }
    };

    useEffect(() => {
      
        wordRefs.current.forEach((word, i) => {
            gsap.fromTo(
                word,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, delay: i * 0.05 }
            );
        });

  
        formRefs.current.forEach((field, i) => {
            gsap.fromTo(
                field,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, delay: i * 0.05 + 0.3 }
            );
        });
    }, []);

    const splitWords = (text) =>
        text.split(" ").map((word, idx) => (
            <span key={idx} ref={addToRefs} className="d-inline-block me-1">
                {word}
            </span>
        ));

    return (
        <>

            <div className="container py-5 border-bottom">
                <div className="row">
                    <div className="col-md-6 ">
                        <h5 style={{
                            fontSize: "36px",
                            position: "sticky",
                            top: "20px",   
                            background: "white", 
                            zIndex: 10
                        }}>{splitWords("We’d love to hear from you.")}</h5>
                    </div>

                    <div className="col-md-6">
                        <h5 style={{ fontSize: "36px" }} className="h6 mb-5">
                            {splitWords(
                                "Whether you’re interested in investing, joining the team, or just have a question, we’re here to help. Use the form below to send us a message — you’ll be able to choose where to direct your note, and someone from our team will get back to you."
                            )}
                        </h5>

                        <p className="mb-5">
                            {splitWords("For investor enquiries:")}
                            <br />
                            <a
                                href="mailto:invest@postlabs.com"
                                className="text-decoration-underline"
                                style={{ color: "black" }}
                            >
                                {splitWords("invest@postlabs.com")}
                            </a>
                        </p>

                        <p className="mb-5">
                            {splitWords("For careers and job applications:")}
                            <br />
                            <a
                                href="mailto:careers@postlabs.com"
                                className="text-decoration-underline"
                                style={{ color: "black" }}
                            >
                                {splitWords("careers@postlabs.com")}
                            </a>
                        </p>

                        <p className="mb-5">
                            {splitWords("For everything else:")}
                            <br />
                            {splitWords(
                                "Use the contact form below, and select the category that best fits your message."
                            )}
                        </p>
                    </div>
                </div>
            </div>


            <div className="container py-5 border-bottom">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-start"></div>

                    <div className="col-md-6">
                        <h5 style={{ fontSize: "18px" }} className="h6 mb-3">
                            {splitWords("YOUR NAME*")}
                        </h5>
                        <input
                            ref={addFormRefs}
                            type="text"
                            className="form-control contact-form-field w-input mb-4"
                            placeholder="Full name"
                            name="name"
                            id="name"
                            style={{ border: "none", boxShadow: "none", backgroundColor: "#f8f9fa" }}
                            required
                        />

                        <h5 className="mb-3">{splitWords("YOUR EMAIL*")}</h5>
                        <input
                            ref={addFormRefs}
                            type="email"
                            className="form-control contact-form-field w-input mb-4"
                            placeholder="Your email"
                            name="email"
                            id="email"
                            style={{ border: "none", boxShadow: "none", backgroundColor: "#f8f9fa" }}
                            required
                        />

                        <h5 className="mb-3">{splitWords("SUBJECT*")}</h5>
                        <input
                            ref={addFormRefs}
                            type="text"
                            className="form-control contact-form-field w-input mb-4"
                            placeholder="Subject"
                            name="subject"
                            id="subject"
                            style={{ border: "none", boxShadow: "none", backgroundColor: "#f8f9fa" }}
                            required
                        />

                        <h5 className="mb-3">{splitWords("YOUR MESSAGE*")}</h5>
                        <textarea
                            ref={addFormRefs}
                            className="form-control contact-form-field w-input mb-4"
                            rows="5"
                            placeholder="Type your message"
                            name="message"
                            id="message"
                            style={{ border: "none", boxShadow: "none", backgroundColor: "#f8f9fa" }}
                            required
                        ></textarea>

                        <button
                            ref={addFormRefs}
                            className="btn btn-dark mt-3 w-100"
                        >
                            {splitWords("SUBMIT REQUEST")}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
