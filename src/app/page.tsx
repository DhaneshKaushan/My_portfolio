"use client";
import Link from "next/link";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Swal from 'sweetalert2';


import { Menu } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <main>
      {/* ---------header------------ */}
      <header
        className={`header flex justify-end items-center transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-50" : "opacity-100"
        }`}
      >
        <div>
          <Link href={"#home"} className="logo ">
            Dhana.
          </Link>
        </div>
        <nav className="navbar">
          <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
            <SheetTrigger className="tablet:hidden">
              <Menu className="menu-icon mr-4" />
            </SheetTrigger>
            <SheetContent className="pt-4 text-3xl">
              <br />
              <br />
              <br />
              <Link href={"#home"} onClick={closeSidebar}>
                Home
              </Link>
              <br />
              <br />
              <br />
              <Link href={"#about"} onClick={closeSidebar}>
                About
              </Link>
              <br />
              <br />
              <br />
              <Link href={"#education"} onClick={closeSidebar}>
                Project
              </Link>
              <br />
              <br />
              <br />
              <Link href={"#skills"} onClick={closeSidebar}>
                Skills
              </Link>
              <br />
              <br />
              <br />
              <Link href={"#contact"} onClick={closeSidebar}>
                Contact
              </Link>
              <br />
            </SheetContent>
          </Sheet>
          <ul className="hidden tablet:flex gap-x-8 text-[1.7rem]">
            <li>
              <Link
                className="text-[var(--text-color)] font-bold ml-[3.5rem] transition duration-300 hover:text-[var(--main-color)] 
active:text-[var(--main-color)]"
                href={"#home"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-[var(--text-color)] font-bold ml-[3.5rem] transition duration-300 hover:text-[var(--main-color)] 
active:text-[var(--main-color)]"
                href={"#about"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-[var(--text-color)] font-bold ml-[3.5rem] transition duration-300 hover:text-[var(--main-color)] 
active:text-[var(--main-color)]"
                href={"#education"}
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                className="text-[var(--text-color)] font-bold ml-[3.5rem] transition duration-300 hover:text-[var(--main-color)] 
active:text-[var(--main-color)]"
                href={"#skills"}
              >
                Skills
              </Link>{" "}
            </li>
            <li>
              <Link
                className="text-[var(--text-color)] font-bold ml-[3.5rem] transition duration-300 hover:text-[var(--main-color)] 
active:text-[var(--main-color)]"
                href={"#contact"}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/*-------------- home section-------------- */}

      <section
        className={`home bg-[url('../../public/4.png')] bg-cover bg-center transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-50" : "opacity-100"
        }`}
        id="home"
      >
        <div className="home-content">
          <h1>
            Hi, I'm<span> Dhanesh Kaushan </span>{" "}
          </h1>
          <div className="text-animated">
            <h3>Full Stack Developer</h3>
          </div>
          <p>
            I'm a passionate Full Stack Developer currently honing my skills. On
            the front-end, I’ve worked with React.js and Tailwind CSS to create
            responsive and dynamic user interfaces. As I continue my journey,
            I’m diving deeper into back-end technologies to build comprehensive,
            full-stack applications. Stay tuned as I continue to expand my skill
            set and bring innovative ideas to life!
          </p>

          <div className="btn-box">
            <Link
              href={"https://www.linkedin.com/in/dhaneshkaushan/"}
              className="btn"
              target="_blank"
            >
              Hire me
            </Link>
            <Link
              href={"https://www.linkedin.com/in/dhaneshkaushan/"}
              className="btn"
              target="_blank"
            >
              Let's talk
            </Link>
          </div>
          <div className="flex-space-x-4 home-sci">
            <Link
              href="https://www.linkedin.com/in/dhaneshkaushan/"
              target="_blank"
              rel="noopener noreferrer"
              className="bx-bx1-linkedin"
            >
              <LinkedInIcon className="icon" sx={{ fontSize: 25 }} />
            </Link>
            <Link
              href={"https://github.com/DhaneshKaushan"}
              target="_blank"
              className="bx-bx1-github"
            >
              <GitHubIcon className="icon" sx={{ fontSize: 25 }} />
            </Link>
            <Link
              href="mailto:dhaneshkaushan@gmail.com"
              target="_blank"
              className="bx-bx1-x"
            >
              <MailIcon className="icon" sx={{ fontSize: 25 }} />
            </Link>
          </div>
        </div>

        <div className="home-imgHover"></div>
      </section>

      {/* --------------About Section------------- */}

      <section className="about" id="about">
        <h2 className="heading">
          About <span>Me</span>
        </h2>

        <div className="about-image relative w-[25rem] h-[25rem] rounded-full flex justify-center items-center">
          <Image
            src="/1.png"
            alt="Profile Image"
            width={225}
            height={225}
            className="Image rounded-full border-[.2rem] border-[var(--main-color)]"
          />
          <span className="circle-spin absolute"></span>
        </div>

        <div className="about-content">
          <h2>Full Stack Developer</h2>
          <p className="about-para">
            Hello, I'm Dhanesh Kaushan, an enthusiastic Computer Science
            undergraduate at the University of Colombo School of Computing 🎓. I
            am passionate about full-stack development and dedicated to creating
            innovative software solutions while continuously improving my
            technical skills. Skilled in Java, JavaScript, React.js, and Spring
            Boot, I excel in delivering creative solutions. I thrive in
            collaborative environments, leveraging my adaptability and
            problem-solving skills to drive impactful projects forward. Feel
            free to connect with me!
          </p>

          <div className="btn-box btns">
            <a href="#about" className="btn">
              Read More
            </a>
          </div>
        </div>
      </section>

      {/* -----------------------project section--------------------------- */}

      <section className="education" id="education">
        <h2 className="heading">
          My <span>Projects </span>
        </h2>

        <div className="education-row">
          <div className="education-column">
            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <h3>C & A Indoor Net</h3>
                  </div>
                  <p>
                    Our team implemented a comprehensive system to manage all
                    internal operations at C & A Indoor Net. The project focused
                    on automating and optimizing the reservation management
                    system, ensuring efficient handling of booking requests,
                    cancellations, and customer inquiries.
                    <br />
                    <br />
                    Technologies Used : HTML, CSS, JavaScript, PHP, MySQL
                    <br />
                    <br />
                    <Link
                      href="#"
                      className="text-blue-500 hover:underline ml-2"
                      target="_blank"
                    >
                      Read More
                    </Link>
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <h3>La Fresca</h3>
                  </div>
                  <p>
                    The Caf´e Management System is a platform designed to
                    streamline daily operations for La Fresca’s branches,
                    integrating online and offline processes,enhancing
                    efficiency and customer satisfaction.
                    <br />
                    <br />
                    Technologies Used : React Js, SpringBoot, MongoDB
                    <br />
                    <br />
                    <Link
                      href="#"
                      className="text-blue-500 
                      hover:underline ml-2"
                      target="_blank"
                    >
                      Read More
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --------------2nd column----------- */}

          <div className="education-column">
            {/* <h3 className="title">Experience</h3> */}
            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <h3>C & A Cricket Shop</h3>
                  </div>
                  <p>
                    We developed a fully-functional e-commerce platform for C &
                    A Indoor Cricket Shop, designed to streamline inventory
                    management, order placement, and customer engagement. The
                    platform enables users to browse products, place orders, and
                    manage their accounts with ease, providing a seamless
                    shopping experience.
                    <br />
                    <br />
                    Technologies Used : HTML, CSS, JavaScript, PHP, MySQL,
                    Python
                    <br />
                    <br />
                    <Link
                      href="#"
                      className="text-blue-500 
                      hover:underline ml-2"
                      target="_blank"
                    >
                      Read More
                    </Link>
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <h3>Travel World </h3>
                  </div>
                  <p>
                    Developed a travel booking platform using the MERN stack,
                    featuring tour booking, user reviews, secure authentication,
                    and responsive UI. Managed RESTful APIs and MongoDB for
                    efficient data handling and scalability.
                    <br />
                    <br />
                    Technologies Used : Node.js, Express.js, React.js , MongoDB
                    <br />
                    <br />
                    <Link
                      href="#"
                      className="text-blue-500 
                       hover:underline ml-2"
                      target="_blank"
                    >
                      Read More
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------skill section--------------------------- */}
      <section className="skills" id="skills">
        <h2 className="heading">
          My <span>Skills</span>
        </h2>

        <div className="skills-row">
          <div className="skills-column">
            <div className="skills-box">
              <div className="skills-content">
                <div className="content">
                  <div className="year">
                    <h3>Programming Languages</h3>
                  </div>
                  <p>Java, C/C++, JavaScript, PHP, HTML, CSS</p>
                </div>
              </div>
              <div className="skills-content">
                <div className="content">
                  <div className="year">
                    <h3>Frameworks & Libraries</h3>
                  </div>
                  <p>
                    React.js, Next.js, Tailwind CSS, Bootstrap, Node.js,
                    Express.js, Spring Boot
                  </p>
                </div>
              </div>
              <div className="skills-content">
                <div className="content">
                  <div className="year">
                    <h3>Tools & Platforms</h3>
                  </div>
                  <p>Git, GitHub, Postman, VS Code, IntelliJ, Figma, Jira</p>
                </div>
              </div>
            </div>
          </div>

          {/* ----------------------For another Column--------------------------- */}
          <div className="skills-column">
            <div className="skills-box">
              <div className="skills-content">
                <div className="content">
                  <div className="year">
                    <h3>Databases</h3>
                  </div>
                  <p>MySQL, MongoDB</p>
                </div>
              </div>
              <div className="skills-content">
                <div className="content">
                  <div className="year">
                    <h3>Language Proficiency</h3>
                  </div>
                  <p>English, Sinhala</p>
                </div>
              </div>
              <div className="skills-content">
                <div className="content">
                  <div className="year">
                    <h3>Competencies</h3>
                  </div>
                  <p>
                    Problem Solving, Self-Motivation, Leadership, <br />
                    Time Management, Communication,
                    <br />
                    Ability to work as part of a team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
          {/* ----------------------For another Column--------------------------- */}

      

      {/* <section className="contact" id="contact">
        <center></center>
        <h2 className="heading">
          Contact <span>Me!</span>
        </h2>

        <form action="#">
          <div className="input-box">
            <div className="input-field">
              <input type="text" placeholder="Full Name" required />
              <span className="focus"></span>
            </div>
            <div className="input-field">
              <input type="text" placeholder="Email Address" required />
              <span className="focus"></span>
            </div>
          </div>

          <div className="input-box">
            <div className="input-field">
              <input type="string" placeholder="Mobile Number" required />
              <span className="focus"></span>
            </div>
            <div className="input-field">
              <input type="text" placeholder="Email Subject" required />
              <span className="focus"></span>
            </div>
          </div>
          <div className="textarea-field">
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Your Message"
              required
            ></textarea>
            <span className="focus"></span>
          </div>

          <div className="btn-box btns">
            <a href="#contact" className="btn">
              Submit
            </a>
          </div>
        </form>
      </section> */}
      <section className="contact" id="contact">
        <center></center>
        <h2 className="heading">
          Contact <span>Me!</span>
        </h2>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement; // Explicitly cast to HTMLFormElement
            const formData = {
              fullName: (
                form.elements.namedItem("fullName") as HTMLInputElement
              ).value,
              email: (form.elements.namedItem("email") as HTMLInputElement)
                .value,
              mobile: (form.elements.namedItem("mobile") as HTMLInputElement)
                .value,
              subject: (form.elements.namedItem("subject") as HTMLInputElement)
                .value,
              message: (
                form.elements.namedItem("message") as HTMLTextAreaElement
              ).value,
            };

            const res = await fetch("/api/sendEmail", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            });

          
            if (res.ok) {
              Swal.fire({
                icon: 'success',
                title: 'Email sent successfully!',
                showConfirmButton: false,
                timer: 2500 // Duration in milliseconds before the alert closes automatically
              });
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Error sending email.',
                text: 'Please try again later.', // Optional additional text
                confirmButtonText: 'OK'
              });
            }
            
          }}
        >
          <div className="input-box">
            <div className="input-field">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                required
              />
              <span className="focus"></span>
            </div>
            <div className="input-field">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
              <span className="focus"></span>
            </div>
          </div>

          <div className="input-box">
            <div className="input-field">
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                required
              />
              <span className="focus"></span>
            </div>
            <div className="input-field">
              <input
                type="text"
                name="subject"
                placeholder="Email Subject"
                required
              />
              <span className="focus"></span>
            </div>
          </div>
          <div className="textarea-field">
            <textarea
              name="message"
              cols={30}
              rows={10}
              placeholder="Your Message"
              required
            ></textarea>
            <span className="focus"></span>
          </div>

          <div className="btn-box btns">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </section>

      {/* --------------footer-------------- */}

      <footer className="footer">
        <div className="footer-text">
          <p>© 2024 Dhanesh Kaushan. All rights reserved.</p>
        </div>

        <div className="footer-iconTop">
          <Link href="/" className=" bg-cyan-500 bx-bx1-arrowUpWardIcon">
            <ArrowUpwardIcon className="icon" sx={{ fontSize: 25 }} />
          </Link>
        </div>
      </footer>
    </main>
  );
}
