import "./styles/MobileTechStack.css";

const categories = [
  {
    name: "AI & Autonomous QA",
    skills: [
      "OpenAI Agents SDK",
      "Autonomous QA Agents",
      "RAG Pipelines",
      "LLM APIs",
      "MCP Tools",
      "Prompt Engineering",
    ],
  },
  {
    name: "Automation & Quality Engineering",
    skills: [
      "Playwright",
      "Selenium",
      "Robot Framework",
      "Cypress",
      "PyTest",
      "REST Assured",
      "Test Architecture",
    ],
  },
  {
    name: "Languages & Frameworks",
    skills: [
      "Python",
      "C#",
      ".NET Core",
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "SQL",
    ],
  },
  {
    name: "DevOps, Cloud & Systems",
    skills: [
      "Azure DevOps",
      "CI/CD Pipelines",
      "Git & GitHub",
      "Docker",
      "MSIX",
      "WixToolset",
      "PostgreSQL",
      "MongoDB",
    ],
  },
];

const MobileTechStack = () => {
  return (
    <div className="mobile-techstack" id="skills">
      <h2>
        Core <span>Tech Stack</span>
      </h2>
      <p className="mobile-techstack-subtitle">
        Technologies, tools &amp; frameworks I leverage to engineer robust systems
      </p>

      <div className="mobile-techstack-grid">
        {categories.map((cat, idx) => (
          <div className="mobile-tech-card" key={idx}>
            <div className="mobile-tech-category">{cat.name}</div>
            <div className="mobile-tech-badges">
              {cat.skills.map((skill, sIdx) => (
                <span className="mobile-tech-badge" key={sIdx}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileTechStack;
