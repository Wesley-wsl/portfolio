import Header from '../../components/Header';
import ProjectCard from '../../components/ProjectCard';
import { DiReact, DiDatabase, DiZend } from 'react-icons/di';
import { Main, Introduction, Projects, Techs, About, Division } from './styles';
import { projects } from '../../projects/projects';
import { Link } from 'react-scroll';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { HeaderMobile } from '../../components/HeaderMobile';

export default function Home() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
            <Header />
            <HeaderMobile />
            <Main>
                <Introduction data-aos="fade-right">
                    <h2>
                        Welcome To <br /> My Personal Portfolio
                    </h2>
                    <p>
                        Hi, I&#39;m Wesley Westelley, a front end developer
                        focused on the best technologies in the market, I&#39;m
                        focused on acquiring knowledge to become a great full
                        stack developer.
                    </p>
                    <Link
                        activeClass="active"
                        to="Projects"
                        spy={true}
                        smooth={true}
                        duration={1300}
                    >
                        <button>Learn More</button>
                    </Link>

                    <Division />
                </Introduction>
                <h2 id="Projects" data-aos="fade-up">
                    Projects
                </h2>
                <Projects data-aos="flip-up">
                    {projects.map((project, index) => {
                        return (
                            <ProjectCard
                                name={project.name}
                                description={project.description}
                                img={project.img}
                                stacks={project.stacks}
                                live={project.live}
                                code={project.source}
                                key={index}
                            />
                        );
                    })}
                </Projects>
                <Division />
                <Techs
                    data-aos="fade-right"
                    data-aos-anchor-placement="center-bottom"
                    id="Technologies"
                >
                    <h2>Technologies</h2>
                    <p>
                        I&#39;ve work with a range of technologies in the web
                        development world.
                    </p>

                    <div>
                        <div>
                            <DiReact />
                            <h3>Front-End</h3>
                            <p>Experience with React.js</p>
                        </div>
                        <div>
                            <DiDatabase />
                            <h3>Back-End</h3>
                            <p>Experience with Node.js</p>
                        </div>
                        <div>
                            <DiZend />
                            <h3>UI/UX</h3>
                            <p>Basic knowledge with Figma</p>
                        </div>
                    </div>
                </Techs>
                <Division />
                <About data-aos="fade-up" id="About">
                    <h2>About Me</h2>
                    <p>
                        I&#39;m Wesley Westelley, a front end developer focused
                        on the best technologies in the market, I&#39;m focused
                        on acquiring knowledge to become a great full stack
                        developer.
                    </p>
                    <div>
                        <div>
                            <h3>2021</h3>
                            <p>Started my journey</p>
                        </div>
                    </div>
                    <Division />
                    <p>Email: wesleywestelley@gmail.com</p>
                </About>
            </Main>
        </>
    );
}
