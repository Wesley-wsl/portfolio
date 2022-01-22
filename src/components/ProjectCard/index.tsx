import { IProjects } from '../../@types';
import { Card, Demo } from './styles';

export default function ProjectCard({
    img,
    name,
    description,
    stacks,
    source,
    live,
}: IProjects) {
    return (
        <>
            <Card>
                <img src={img} alt="Project image" />

                <h3>{name}</h3>
                <div className="division" />

                <p>{description}</p>
                <p className="labelStack">Stacks</p>
                <div className="stacks">
                    <p>{stacks}</p>
                </div>

                <Demo>
                    <a href={source} target="_blank" rel="noreferrer">
                        Code
                    </a>
                    <a href={live} target="_blank" rel="noreferrer">
                        Live
                    </a>
                </Demo>
            </Card>
        </>
    );
}
