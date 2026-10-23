import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:Contact.ganeshkadu@gmail.com" data-cursor="disable">
                Contact.ganeshkadu@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+919373553151" data-cursor="disable">
                +91 9373553151
              </a>
            </p>
            <h4>Location</h4>
            <p>Pune, India</p>
          </div>
          <div className="contact-box">
            <h4>Social & Links</h4>
            <a
              href="https://github.com/ganeshkadu1"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/ganesh-kadu"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="mailto:Contact.ganeshkadu@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h4>Education</h4>
            <p style={{ color: "#fff", fontSize: "14px", lineHeight: "1.5", marginBottom: "15px" }}>
              B.E. in Mechanical Engineering (2018)<br />
              <span style={{ color: "var(--accentColor)", fontSize: "13px" }}>
                SPPU University | PCCOE | Pune, IN
              </span>
            </p>
            <h2>
              Designed and Developed <br /> by <span>Ganesh Kadu</span>
            </h2>
            <h5>
              <MdCopyright /> {new Date().getFullYear()}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
