import image1 from './image1.jpeg';
import image2 from './image2.jpeg';

import './About.css';
import './Main.css';

import SDE from "./SDE";

function About({setPage}) {
    return (
        <div className="panels">
            <div className="panel1">
                <img className="panel__pic1" src={image1} alt="this is a photo of an office desk" width="200px"
                     height="200px"></img>
                <div className="panel__text1">
                    <h2 className="panel__title">Software Engineering</h2>
                    <p className="panel__text">
                        Software Development Engineer (SDE) is a role that involves designing, developing, and
                        maintaining software systems.
                        <p></p>
                        SDEs work on the full software development lifecycle, from gathering requirements to testing and
                        deployment.
                        <p></p>
                        They typically have a strong foundation in programming languages like Java, Python, or C++, and
                        use tools like Git, JIRA, and AWS.
                    </p>
                </div>

                <li className="about__links">
                    <p>
                        Click
                        <a
                            className="about__link"
                            href={"/sde.html"}
                            onClick={(e) => {
                                e.preventDefault();
                                setPage('SDE');
                            }}
                        >
                            {` ${"HERE"} `}
                        </a>
                        to know more about Software Engineering
                    </p>
                </li>
            </div>

            <div className="panel2">
                <img className="panel__pic2" src={image2} alt="this is a photo of a man surrounding by 3 screens"
                     width="200px"
                     height="200px"></img>
                <div className="panel__text2">
                    <h2 className="panel__title">Other Technical Roles</h2>
                    <p className="panel__text">
                        On the other hand, non-SDE roles like testing, network security, and big data engineering
                        involve specialized skills and responsibilities.
                        <p></p>
                        Testing professionals ensure that software products meet quality standards through various
                        testing methodologies, while network security experts protect systems from cyber threats and
                        attacks.
                        <p></p>
                        Big data engineers are responsible for designing and maintaining large-scale data processing
                        systems that can handle massive amounts of data.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;