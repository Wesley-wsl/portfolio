import styled from 'styled-components';

export const Main = styled.main`
    margin: 90px;
    @media (max-width: 850px) {
        margin-left: 20px;
    }
`;

export const Introduction = styled.section`
    margin-bottom: 140px;

    p {
        max-width: 700px;
        line-height: 30px;
    }

    button {
        background: -webkit-linear-gradient(
            90deg,
            rgba(16, 19, 25, 1) 45%,
            rgba(27, 27, 36, 1) 100%
        );
        background: linear-gradient(
            90deg,
            rgba(16, 19, 25, 1) 45%,
            rgba(27, 27, 36, 1) 100%
        );

        width: 130px;
        height: 40px;
        margin-top: 30px;
        margin-left: 10px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        transition: transform 0.2s linear;

        &:hover {
            transform: translateY(-5px);
        }
    }
`;

export const Projects = styled.section`
    h2 {
        display: block;
        width: 100%;
    }
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;

    @media (max-width: 500px) {
        gap: 0;
        margin-left: 50px;
    }
`;

export const Techs = styled.section`
    > p {
        margin-bottom: 20px;
    }

    div {
        display: flex;
        flex-wrap: wrap;
        margin-right: 80px;
        align-items: flex-start;
        margin-top: 30px;
    }
`;

export const About = styled.section`
    > p {
        margin: 20px 0px;
    }

    div {
        display: flex;

        div {
            flex-direction: column;
            position: relative;
            &::after {
                content: '';
                position: absolute;
                top: 5px;
                right: 20px;
                height: 2px;
                width: 40px;
                background: linear-gradient(
                    90deg,
                    rgba(16, 19, 25, 1) 45%,
                    rgba(27, 27, 36, 1) 100%
                );
            }

            h3 {
                margin-bottom: 5px;
            }
        }
    }
    margin-bottom: 50px;
`;

export const Division = styled.div`
    width: 100px;
    height: 5px;
    margin: 40px 0px;
    border-radius: 5px;
    background: -webkit-linear-gradient(
        90deg,
        rgba(16, 19, 25, 1) 45%,
        rgba(27, 27, 36, 1) 100%
    );
    background: linear-gradient(
        90deg,
        rgba(16, 19, 25, 1) 45%,
        rgba(27, 27, 36, 1) 100%
    );
`;

export const ShowTechs = styled.ul`
    flex-direction: column;
    margin-right: 50px;

    svg {
        margin-bottom: 5px;
        font-size: 20px;
    }

    ul {
        list-style: none;

        li {
            position: relative;
            font-size: 14px;
            margin-top: 10px;
            padding-left: 15px;
            letter-spacing: 4px;
        }

        li::before {
            content: '▹';
            position: absolute;
            left: 0px;
            top: 3px;
            color: #fff;
            font-size: var(--fz-sm);
            line-height: 12px;
            margin-right: 20px;
            align-items: center;
        }

        margin-bottom: 30px;
    }

    h3 {
        letter-spacing: 4px;
    }
`;
