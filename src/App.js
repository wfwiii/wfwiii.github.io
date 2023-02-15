import React from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab);

function App() {
  return (
    <div className="App">
      <header>
        <h1>Will Woods</h1>
        <p id="react">
          Built with React <FontAwesomeIcon icon={["fab", "react"]} />
        </p>
        <p id="tagline">
          Experienced Operations Manager Seeking Jr. Developer Role
        </p>
        <nav>
          <ul>
            <li>
              <a href="#About">About Me</a>
            </li>
            <li>
              <a href="#Education">Education</a>
            </li>
            <li>
              <a href="#TechnicalSkills">Technical Skills</a>
            </li>
            <li>
              <a href="#Experience">Experience</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="About">
          <div className="Text">
            <h2>About Me</h2>
            <p>Greetings! </p>
            <p>
              Are you on the lookout for a top-notch entry-level software
              engineer to join your team in Atlanta? Your search ends here. With
              strong technical profeciency, a background in operations
              management, and a steadfast work ethic, I am ready to help drive
              your company's growth and success.
              <p>
                My commitment to staying up-to-date with the latest software
                engineering and development trends, coupled with a lifelong
                passion for learning and a dedication to being a team player
                (and leader), makes me an ideal candidate for your organization.
                Join hands with me today, and let's steer your business towards
                new horizons.
              </p>
            </p>
          </div>
        </section>

        <section id="Education">
          <div className="Text">
            <h2>Education</h2>
            <h3>BA in Computer Science</h3>
            <p>Thomas Edison State University - Trenton, NJ</p>
            <p className="greyed">Present, Expected Fall 2023 Graduation</p>
            <h3>
              24-week Professional Development Certification in Full Stack Web
              Development
            </h3>
            <p>Georgia Tech</p>
          </div>
        </section>

        <section id="TechnicalSkills">
          <div className="Text">
            <h2>Technical Skills</h2>
            <div id="Skills">
              <ul className="column">
                Front-End:
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>JQuery</li>
                <li>React</li>
              </ul>
              <ul className="column">
                Back-End and Database:
                <li>Node.js</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Firebase</li>
              </ul>
              <ul className="column">
                Development Tools:
                <li>Git</li>
                <li>Github</li>
                <li>Heroku</li>
                LMS/CMS:
                <li>Docebo LMS</li>
                <li>Microsoft Dynamics Power User</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="Experience">
          <div className="Text">
            <h2>Experience</h2>
            <h3>
              Operations Manager, Computer Generated Solutions, Peachtree
              Corners, GA
            </h3>
            <p className="greyed">March 2020 - September 2022</p>
            <ul>
              <li>
                Managed 3 teams of 80+ technical support agents for Lenovo/IBM's
                ThinkPad business in US and Canada
              </li>
              <li>
                Implemented PowerBI reporting structure and created custom
                reports in Microsoft Dynamics for customer survey response
                results and agent-level progress reporting, leading to improved
                survey results and profitability
              </li>
              <li>
                Represented the company at client QBRs and developed/facilitated
                training for 400+ technical support specialists, including
                multi-week training courses for Sprint, T-Mobile, and Lenovo/IBM
              </li>
              <li>
                Worked with Lenovo to create standardized training programs for
                outsourced specialists in North America
              </li>
            </ul>
          </div>
        </section>

        <section id="Contact">
          <div className="Text">
            <h2>Contact</h2>
            <p>
              <a href="mailto:wfwIII@outlook.com?body=Hey, Will! I saw your website...">
                Drop me a line.
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer>
        <ul>
          <li>
            <a href="https://github.com/wfwiii/wfwiii.github.io">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/wwdailydev">
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
