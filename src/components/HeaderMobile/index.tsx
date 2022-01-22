import { useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-scroll';

import { Menu, HeaderStyle, NavBarMobile } from './styles';

export function HeaderMobile() {
    const [Active, setActive] = useState(false);

    return (
        <>
            <HeaderStyle>
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
                                onClick={() => setActive(false)}
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
                                onClick={() => setActive(false)}
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
                                onClick={() => setActive(false)}
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
                                    onClick={() => setActive(false)}
                                >
                                    <AiFillGithub />
                                </a>
                            </p>
                            <p>
                                <a href="#" onClick={() => setActive(false)}>
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
