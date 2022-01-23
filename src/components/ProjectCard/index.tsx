import { IProjects } from '../../@types';
import { Division } from '../../pages/Home/styles';
import { Card, Demo } from './styles';

import 'aos/dist/aos.css';

export default function ProjectCard({
    img,
    name,
    description,
    source,
    live,
}: IProjects) {
    return (
        <Card data-aos="fade-up">
            <img src={img} alt="Project image" />

            <h3>{name}</h3>
            <Division className="division" />

            <p className="description">{description}</p>

            <Demo>
                <a href={source} target="_blank" rel="noreferrer">
                    Code
                </a>
                <a href={live} target="_blank" rel="noreferrer">
                    Live
                </a>
            </Demo>
        </Card>
    );
}
