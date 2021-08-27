import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { HeaderStyle } from './styles';
import { Link } from 'react-scroll';

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
                    >
                        <AiFillGithub />
                    </a>
                </p>
                <p>
                    <a href="#">
                        <AiFillLinkedin />
                    </a>
                </p>
            </div>
        </HeaderStyle>
    );
}
