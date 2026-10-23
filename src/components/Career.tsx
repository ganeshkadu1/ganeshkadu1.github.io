import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Analyst</h4>
                <h5>Searce Inc</h5>
              </div>
              <h3>2018</h3>
            </div>
            <p>
              Developed VBA code and advanced formulas to accelerate processing
              speed and improve data accuracy across logistics workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graduate Engineer</h4>
                <h5>TATA Technologies</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Created 3D CAD models of plastic components from non-parametric data
              inputs utilizing custom VBA Micro automation routines.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sr Member Technical Staff</h4>
                <h5>Centre for Computational Tech</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Committed 5,000+ lines of code across C, C++, C#, Python, and MySQL.
              Collaborated on architecture reviews and led internal automation
              workshops.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Software Engineer</h4>
                <h5>Wolters Kluwer</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Architecting modular Playwright UI, Data &amp; Web API frameworks
              integrated with Azure DevOps CI/CD. Spearheading LLM-driven
              autonomous validation agents and K6 performance benchmarking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
