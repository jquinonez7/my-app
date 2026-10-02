import "./About.css";
import { useEffect, useRef, useState } from "react";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";

const About = () => {
  const [open, setOpen] = useState(false);
  const [printed, setPrinted] = useState(false);
  const boothRef = useRef(null);

  // the photo only starts printing once the booth scrolls into view
  useEffect(() => {
    const el = boothRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setPrinted(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPrinted(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <section id="about" className="about-container">
        <img
          src="/images/gems/gem-flower-diamond.png"
          alt=""
          className="gem-accent"
          style={{ width: "46px", top: "18px", right: "6%", transform: "rotate(8deg)" }}
        />
        <img
          src="/images/gems/gem-bow-pink.png"
          alt=""
          className="gem-accent"
          style={{ width: "38px", bottom: "24px", left: "4%", transform: "rotate(-10deg)" }}
        />
        <img
          src="/images/gems/gem-cherry.png"
          alt=""
          className="gem-accent"
          style={{ width: "26px", top: "16px", left: "5%", transform: "rotate(10deg)" }}
        />
        <img
          src="/images/gems/gem-heart-skyblue.png"
          alt=""
          className="gem-accent"
          style={{ width: "26px", bottom: "22px", right: "4%", transform: "rotate(-8deg)" }}
        />
        <div className="about-content">

          {/* Photobooth (right side on desktop, via CSS order) — the photo prints out of the slot */}
          <div className={`photobooth${printed ? " is-printed" : ""}`} ref={boothRef}>
            <div className="booth-face">
              <div className="booth-plate">
                <span>Photos delivered here</span>
                <i className="booth-arrow" aria-hidden="true" />
              </div>
              <div className="booth-led" aria-hidden="true" />
              <div className="booth-bezel">
                <div className="booth-slot" />
                <div className="booth-window">
                  <figure className="booth-photo">
                    <img
                      src="/images/about/me-photo.webp"
                      alt="Jade smiling on the beach at sunset"
                      decoding="async"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>

          {/* Left Side */}
          <div className="about-text-container">
            <h1 className="about-title">About Me</h1>

            <p className="about-text">
              Hi! I’m Jade Quinonez :) I’m a Computer Science student at CSULB with a
              concentration in Software Development. I have experience working with
              Python, Java, HTML, CSS, JavaScript, and C++. I’ve used tools and
              frameworks such as React, Vue.js, Tailwind CSS, Git, GitHub, and Linux.

              Beyond coding, I enjoy spending time with my dog{" "}
              <span
                className="butters-link"
                onClick={() => setOpen(true)}
              >
                Butters
              </span>
              , she’s a 4-year-old Aussie. I also love fashion, cars, and traveling.
            </p>
          </div>

          {/* ASCII Art (disabled — replaced by the photobooth above)
          <div className="ascii-art">
            <pre>
              {`⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢰⣿⡿⠗⠀⠠⠄⡀⠀⠀⠀⠀
⠀⠀⠀⠀⡜⢁⣀⡀⠀⠀⠀⠈⠑⢶⣶⡄
⢀⣶⣦⣸⠈⢿⣟⡇⠀⠀⣀⣀⠀⠘⡿⠃
⠀⢿⣿⣿⣄⠒⠀⠠⢶⡂⢫⣿⢇⢀⠃⠀
⠀⠈⢿⡿⣿⣿⣶⣤⣀⣄⣀⣂⡠⠊⠀⠀
⠀⠀⠀⡇⠀⠀⠉⠙⠛⠿⣿⣿⣧⠀⠀⠀
⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠘⣿⣿⡇⠀⠀
⠀⠀⠀⣿⣧⡤⠄⣀⣀⣀⣴⡟⠿⠃⠀⠀
⠀⠀⠀⢻⣿⣿⠉⠉⢹⣿⣿⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠉⠁⠀⠀⠀⠉⠁⠀⠀⠀⠀⠀`}
            </pre>
          </div>
          */}

        </div>
      </section>

      {/* Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          layout="center"
          size="md"
          variant="soft"
          className="butters-modal"
        >
          <ModalClose
            sx={{
              color: "rgb(203, 13, 105)",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "#ffe2f1",
                color: "rgb(203, 13, 105)"
              },
              "&:active": {
                backgroundColor: "#ffe2f1",
                color: "rgb(203, 13, 105)"
              }
            }}
          />

<Typography
  level="h4"
  sx={{ color: "rgb(203, 13, 105)" }}
>
  Jade & Butters
</Typography>

          <img
            src="/images/IMG_3701.jpg"
            alt="Jade and Butters"
            className="butters-image"
          />

        </ModalDialog>
      </Modal>
    </>
  );
};

export default About;