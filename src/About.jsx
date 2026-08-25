import "./About.css";
import { useState } from "react";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";

const About = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section id="about" className="about-container">
        <div className="about-content">

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

          {/* ASCII Art */}
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
            src="/IMG_3701.jpg"
            alt="Jade and Butters"
            className="butters-image"
          />

        </ModalDialog>
      </Modal>
    </>
  );
};

export default About;