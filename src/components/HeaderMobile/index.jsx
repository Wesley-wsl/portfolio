import { Menu, HeaderStyle, NavBarMobile } from './styles';
import { Link } from 'react-scroll';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { useState } from 'react';

export function HeaderMobile() {
    const [Active, setActive] = useState(false);

    return (
        <>
            <HeaderStyle>
                <h1>&lt;Portfolio /&gt;</h1>
                <Menu onClick={() => setActive(!Active)}>
                    <div />
                    <div />
                    <div />
                </Menu>
                <NavBarMobile active={Active}>
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

                        <li>
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
                        </li>
                    </ul>
                </NavBarMobile>
            </HeaderStyle>
        </>
    );
}
