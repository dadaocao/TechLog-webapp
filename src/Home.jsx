import './Home.css';

import Carousel from './Carousel';

function Home() {

    return (
        <div>

            <h2 className="home__title">
                Why did I shift into tech field?
            </h2>

            <p className="home__content">
                I am currently an Information Systems Graduate Student. But for the past five years, I have been an
                Applied Psychology student and a research assistant. I have been working on improving individuals’ work
                performance by leveraging theoretical analysis, questionnaire investigation, and data analysis.
                <p></p>

                My previous major taught me how to think and analyze problems, but the longer I stay in the world of
                theory, the more I discovered that I lack the power to turn theoretical research into implementation and
                improve people's lives directly.
                <p></p>

                This led to my interest in developing software solutions that can help people overcome real-world
                challenges in a more efficient and effective way. As a result, I decided to pursue a graduate degree in
                Information Systems, where I have gained expertise in full-stack engineering, such as Java, HTML, CSS,
                and JavaScript to build my broader vision.
                <p></p>

                From here I'm going to embark on a career as a Software Development Engineer and a Woman in Tech.
            </p>

            <p className="home__content">
                Switching to STEM gave me a career turn, and also gave me a sense of control over my life.
                <p></p>

                Three years ago, I felt angry and powerless when I saw the news “AI learned human sexism when Amazon
                used it to screen resumes”.But now as an incoming software engineer and a woman in tech, things like
                that can only arouse my
                fighting spirit.
                <p></p>

                Thanks for the motto that gives me strength:
                <p></p>

                "Code doesn’t have gender, but the people who code do."
                <p></p>
                <div> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;———Jen Krieger (VP @ GitHub)</div>
            </p>

            <Carousel></Carousel>


        </div>
    );
}

export default Home;