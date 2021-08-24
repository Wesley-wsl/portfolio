import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { HeaderStyle } from './styles';

export default function Header() {
    return (
        <HeaderStyle>
            <h1>&lt;Portfolio /&gt;</h1>
            <nav>
                <ul>
                    <li>Projects</li>
                    <li>Technologies</li>
                    <li>About</li>
                </ul>
            </nav>
            <div className="socialMedias">
                {' '}
                <p>
                    <AiFillGithub />
                </p>
                <p>
                    {' '}
                    <AiFillLinkedin />
                </p>
            </div>
        </HeaderStyle>
    );
}
