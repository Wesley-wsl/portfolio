import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-scroll';

import { HeaderMobile } from '../HeaderMobile';
import * as S from './styles';

export default function Header() {
    return (
        <S.HeaderStyle>
            <h1>
                <Link
                    activeClass="active"
                    to="Home"
                    spy={true}
                    smooth={true}
                    duration={1300}
                    alt="Go to projects"
                >
                    &lt;Portfolio /&gt;
                </Link>
            </h1>
            <S.NavBar>
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
            </S.NavBar>
            <S.SocialMedia>
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
                    <a
                        href="https://www.linkedin.com/in/wesley-westellley-116852226/"
                        aria-label="Go to my linkedin profile"
                    >
                        <AiFillLinkedin aria-label="Linkedin icon" />
                    </a>
                </p>
            </S.SocialMedia>

            <HeaderMobile />
        </S.HeaderStyle>
    );
}
