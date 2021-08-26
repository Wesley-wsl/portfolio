import Header from '../../components/Header';
import ProjectCard from '../../components/ProjectCard';
import { DiReact, DiDatabase, DiZend } from 'react-icons/di';
import { Main, Introduction, Projects, Techs, About, Division } from './styles';
import { projects } from '../../projects/projects';

export default function Home() {
    return (
        <>
            <Header />
            <Main>
                <Introduction>
                    <h2>
                        Welcome To <br /> My Personal Portfolio
                    </h2>
                    <p>
                        The purpose of JavaScript Mastery is tto help aspiring
                        and established developers to take their development
                        skills to ther next level and build awesome apps.
                    </p>
                    <button>Learn More</button>
                    <Division />
                </Introduction>
                <h2>Projects</h2>
                <Projects>
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
                <Techs>
                    <h2>Technologies</h2>
                    <p>
                        I&#39;ve worked with a range a technologies in the web
                        development world
                    </p>

                    <div>
                        <div>
                            <DiReact />
                            <h3>Front-End</h3>
                            <p>Knowledge with React.js</p>
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
                <About>
                    <h2>About Me</h2>
                    <p>
                        The purpose of JavaScript Mastery is to help aspiring
                        and established developers to take their development to
                        the next level and build awesome apps.
                    </p>
                    <div>
                        <div>
                            <h3>2021</h3>
                            <p>Started my journey</p>
                        </div>
                    </div>
                    <p>Email: wesleywestelley@gmail.com</p>
                </About>
            </Main>
        </>
    );
}
