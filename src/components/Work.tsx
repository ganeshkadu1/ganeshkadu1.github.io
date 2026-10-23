import { useRef } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    id: "01",
    title: "LLM-based Autonomous Automation",
    category: "AI & Agentic QA",
    org: "Wolters Kluwer",
    tools: "Python, LLM APIs, OpenAI Agents SDK, RAG, MCP Tools",
    image: "/images/project_ai_agent.jpg",
    link: "https://github.com/ganeshkadu1",
  },
  {
    id: "02",
    title: "Enterprise Test Automation Framework",
    category: "Software Engineering",
    org: "Wolters Kluwer",
    tools: "Playwright, Python, JavaScript, .NET, REST APIs, C#, Azure DevOps",
    image: "/images/project_playwright.jpg",
    link: "https://github.com/ganeshkadu1",
  },
  {
    id: "03",
    title: "AutoDesk ADIX Modernization",
    category: "Systems & Deployment",
    org: "Autodesk",
    tools: "C++, C#, Python, Selenium, WixToolset, MSIX",
    image: "/images/project_adix.jpg",
    link: "https://github.com/ganeshkadu1",
  },
  {
    id: "04",
    title: "AutoDesk Electrical Automation",
    category: "Industrial Automation",
    org: "Autodesk",
    tools: "Python, Robot Framework, Selenium, LISP",
    image: "/images/project_electrical.jpg",
    link: "https://github.com/ganeshkadu1",
  },
];

const Work = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const flexRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const workEl = containerRef.current;
      const flexEl = flexRef.current;
      if (!workEl || !flexEl) return;
      if (window.innerWidth <= 1024) return;

      const getScrollAmount = () => {
        const boxes = flexEl.querySelectorAll<HTMLElement>(".work-box");
        if (boxes.length === 0) return 600;
        const lastBox = boxes[boxes.length - 1];
        const rightEdge = lastBox.offsetLeft + lastBox.offsetWidth;
        const viewportWidth = window.innerWidth;
        return Math.max(rightEdge - viewportWidth + 120, 600);
      };

      const scrollDistance = () => Math.max(getScrollAmount() * 1.5, 1200);

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: workEl,
          start: "top top",
          end: () => `+=${scrollDistance()}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          id: "work",
        },
      });

      timeline.to(flexEl, {
        x: () => -getScrollAmount(),
        ease: "none",
      });

      const handleRefresh = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", handleRefresh);

      return () => {
        window.removeEventListener("resize", handleRefresh);
        timeline.kill();
        ScrollTrigger.getById("work")?.kill();
      };
    },
    { scope: containerRef }
  );

  return (
    <div className="work-section" id="work" ref={containerRef}>
      <div className="work-container section-container">
        <h2>
          Featured <span>Projects</span>
        </h2>
        <div className="work-flex" ref={flexRef}>
          {projects.map((project) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.id}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.org} • {project.category}</p>
                  </div>
                </div>
                <h4>Technologies & Tools</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.title}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
