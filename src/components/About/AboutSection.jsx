import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CardSection = () => {
  const cards = [
    {
      img: "https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68239a34145625a862ba3d54_icon-1.svg",
      text: "Empowering Creators.",
    },
    {
      img: "https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68239b7ac5ddc2008b2da9b7_icon-2.svg",
      text: "Transforming Publishing.",
    },
    {
      img: "https://cdn.prod.website-files.com/681dfdff4444ca819f7050a2/68239b7ab5708009ef8f649e_icon-3.svg",
      text: "Reclaiming Canadian Media.",
    },
  ];

  const cardRefs = useRef([]);

  useEffect(() => {
    // Card1 animation - move left, scale up
    gsap.to(cardRefs.current[0], {
      x: "-115%",
      duration: 0.6,
      scale: 1,
      scrollTrigger: {
        trigger: cardRefs.current[0],
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });

    // Card2 - stays in center, optional slight scale
    gsap.to(cardRefs.current[1], {
      scale: 1,
      duration: 0.6,
      scrollTrigger: {
        trigger: cardRefs.current[1],
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });

    // Card3 animation - move right, scale up
    gsap.to(cardRefs.current[2], {
      x: "115%",
      duration: 0.6,
      scale: 1,
      scrollTrigger: {
        trigger: cardRefs.current[2],
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section style={{ padding: "80px 40px", backgroundColor: "#f8f8f2", position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "center", position: "relative", height: "500px" }}>
        {cards.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            style={{
              backgroundColor: "black",
              height: "450px",
              width: "450px",
              padding: "60px 40px",
              borderRadius: "40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              flex: "0 0 300px",
              position: "absolute", // stack on top of each other
            }}
          >
            <div
              style={{
                backgroundColor: "black",
                borderRadius: "40px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "350px",
                width: "100%",
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              }}
            >
              <img src={card.img} alt="" style={{ alignSelf: "flex-start" }} />
              <div
                style={{
                  fontSize: "36px",
                  lineHeight: 1.4,
                  color: "white",
                  textAlign: "left",
                }}
              >
                <div>{card.text.split(" ")[0]}</div>
                <div>{card.text.split(" ").slice(1).join(" ")}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSection;
