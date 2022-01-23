import Aos from 'aos';
import { useEffect } from 'react';
import { DiReact, DiDatabase, DiZend } from 'react-icons/di';
import { Link } from 'react-scroll';

import Header from '../../components/Header';
import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../projects/projects';
import * as SG from '../../styles/global';
import * as S from './styles';

import 'aos/dist/aos.css';

export default function Home() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
            <Header />
            <S.Main id="Home">
                <S.Introduction data-aos="fade-right">
                    <SG.Title>
                        Welcome To <br /> My Personal Portfolio
                    </SG.Title>
                    <p>
                        I&#39;m Wesley Westelley, a full-stack developer focused
                        on the best technologies around JavaScript/TypeScript, I
                        develop complete web applications, from the backend to
                        the frontend.
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

                    <S.Division />
                </S.Introduction>
                <S.Projects data-aos="fade-up">
                    <SG.Title id="Projects" data-aos="fade-up">
                        Projects
                    </SG.Title>
                    {projects.map((project, index) => {
                        return (
                            <ProjectCard
                                name={project.name}
                                description={project.description}
                                img={project.img}
                                live={project.live}
                                source={project.source}
                                key={index}
                            />
                        );
                    })}
                </S.Projects>
                <S.Division />
                <S.Techs
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    id="Technologies"
                >
                    <h2>Technologies</h2>
                    <p>
                        I&#39;ve work with a range of technologies in the web
                        development world.
                    </p>

                    <div>
                        <S.ShowTechs>
                            <DiReact />
                            <h3>Front-End</h3>
                            <ul>
                                <li>Css</li>
                                <li>Html</li>
                                <li>Scss</li>
                                <li>Axios</li>
                                <li>Next.JS</li>
                                <li>React.JS</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>Apollo Client</li>
                                <li>Styled-Components</li>
                            </ul>
                        </S.ShowTechs>
                        <S.ShowTechs>
                            <DiDatabase />
                            <h3>Back-End</h3>
                            <ul>
                                <li>Jwt</li>
                                <li>Bcrypt</li>
                                <li>Node.JS</li>
                                <li>MongoDB</li>
                                <li>Express.JS</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>Apollo Server</li>
                            </ul>
                        </S.ShowTechs>
                        <S.ShowTechs>
                            <DiZend />
                            <h3>Tools</h3>
                            <ul>
                                <li>Jest</li>
                                <li>Eslint</li>
                                <li>Prettier</li>
                                <li>EditorConfig</li>
                            </ul>
                        </S.ShowTechs>
                    </div>
                </S.Techs>
                <S.Division />
                <S.About data-aos="fade-up" id="About">
                    <h2>About Me</h2>
                    <p>
                        I&#39;m Wesley Westelley, a full-stack developer focused
                        on the best technologies around JavaScript/TypeScript, I
                        develop complete web applications, from the backend to
                        the frontend.
                    </p>
                    <div>
                        <div>
                            <h3>2021</h3>
                            <p>Started my journey</p>
                        </div>
                    </div>
                    <S.Division />
                    <p>Email: wesleywestelley@gmail.com</p>
                </S.About>
            </S.Main>
        </>
    );
}
