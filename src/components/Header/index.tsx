import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-scroll';

import { HeaderStyle } from './styles';

export default function Header() {
    return (
        <HeaderStyle>
            <h1>&lt;Portfolio /&gt;</h1>
            <nav>
                <ul>
                    <li>
                        <Link
                            activeClass="active"
                            to="Projects"
                            spy={true}
                            smooth={true}
                            duration={1300}
                            alt="Go to projects"
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="Technologies"
                            spy={true}
                            smooth={true}
                            duration={2000}
                            alt="Go to see technologies"
                        >
                            Technologies
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="About"
                            spy={true}
                            smooth={true}
                            duration={2000}
                            alt="Go to about"
                        >
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="socialMedias">
                {' '}
                <p>
                    <a
                        href="https://github.com/Wesley-wsl"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Go to my github"
                    >
                        <AiFillGithub aria-label="github icon" />
                    </a>
                </p>
                <p>
                    <a href="#" aria-label="Go to my linkedin profile">
                        <AiFillLinkedin aria-label="Linkedin icon" />
                    </a>
                </p>
            </div>
        </HeaderStyle>
    );
}
