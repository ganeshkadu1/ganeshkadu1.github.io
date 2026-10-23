import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { MdMenu, MdClose } from "react-icons/md";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);
    ScrollTrigger.refresh();

    let links = document.querySelectorAll(".header ul.desktop-nav a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);

  const handleMobileNavClick = (targetId: string) => {
    setMenuOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          GK
        </a>
        <a
          href="mailto:Contact.ganeshkadu@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          Contact.ganeshkadu@gmail.com
        </a>
        <ul className="desktop-nav">
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#career" href="#career">
              <HoverLinks text="EXPERIENCE" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>

        <button
          className="mobile-nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          data-cursor="disable"
        >
          {menuOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      <div className={`mobile-nav-menu ${menuOpen ? "open" : ""}`}>
        <ul className="mobile-nav-links">
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleMobileNavClick("#about");
              }}
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#career"
              onClick={(e) => {
                e.preventDefault();
                handleMobileNavClick("#career");
              }}
            >
              EXPERIENCE
            </a>
          </li>
          <li>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                handleMobileNavClick("#work");
              }}
            >
              WORK
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                handleMobileNavClick("#skills");
              }}
            >
              SKILLS
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleMobileNavClick("#contact");
              }}
            >
              CONTACT
            </a>
          </li>
        </ul>
        <a
          href="mailto:Contact.ganeshkadu@gmail.com"
          className="mobile-nav-email"
          onClick={() => setMenuOpen(false)}
        >
          Contact.ganeshkadu@gmail.com
        </a>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
