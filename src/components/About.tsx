import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Senior Software Engineer with 7+ years of expertise developing enterprise-grade automation frameworks and scalable systems using Playwright, Python, and .NET. Innovator in Generative AI, building autonomous QA agents and RAG pipelines to streamline engineering quality and release confidence.
        </p>
        <div className="about-highlights">
          <span className="about-pill">Senior Software Engineer</span>
          <span className="about-pill">7+ Years Experience</span>
          <span className="about-pill">Playwright &amp; .NET</span>
          <span className="about-pill">GenAI &amp; RAG Pipelines</span>
          <span className="about-pill">Autonomous QA Agents</span>
          <span className="about-pill">2x Code Game Winner</span>
        </div>
      </div>
    </div>
  );
};

export default About;
