/* eslint-disable react/prop-types */
import { Card, Demo } from './styles';

export default function ProjectCard(props) {
    return (
        <>
            <Card>
                <img src={props.img} alt="Project image" />

                <h3>{props.name}</h3>
                <div className="division" />

                <p>{props.description}</p>
                <p className="labelStack">Stacks</p>
                <div className="stacks">
                    <p>{props.stacks}</p>
                </div>

                <Demo>
                    <a href={props.code} target="_blank" rel="noreferrer">
                        Code
                    </a>
                    <a href={props.live} target="_blank" rel="noreferrer">
                        Live
                    </a>
                </Demo>
            </Card>
        </>
    );
}
