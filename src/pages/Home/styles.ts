import styled from 'styled-components';

export const Main = styled.main`
    max-width: 760px;
    margin: 60px auto;
    @media (max-width: 850px) {
        margin-left: 20px;
    }
`;

export const Introduction = styled.section`
    margin-bottom: 70px;
    p {
        max-width: 430px;
        font-size: 19px;
        line-height: 30px;
    }

    button {
        background: #1488cc;
        background: -webkit-linear-gradient(to right, #2b32b2, #1488cc);
        background: linear-gradient(to right, #2b32b2, #1488cc);

        width: 130px;
        height: 40px;
        margin-top: 30px;
        margin-left: 10px;
        border-radius: 15px;
        color: #fff;
        border: none;
        cursor: pointer;
        transition: transform 0.3s linear;
        &:hover {
            transform: scale(120%);
        }
    }
`;

export const Projects = styled.section`
    div:nth-child(1),
    div:nth-child(2) {
        margin-top: 55px;
    }

    div {
        transition: transform 0.3s ease-in-out;
        &:hover {
            transform: scale(105%);
        }
    }

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    justify-content: center;

    @media (max-width: 1050px) {
        grid-template-columns: 1fr;
        max-width: 360px;
        margin: 0 auto;
    }
    @media (max-width: 760px) {
        margin-left: 0px;
        gap: 50px;
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
        margin-top: 30px;

        div {
            flex-direction: column;

            svg {
                margin-bottom: 5px;
                font-size: 20px;
            }

            h3 {
                font-size: 20px;
            }

            p {
                max-width: 200px;
                margin-top: 7px;
            }
        }
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
                background: #1f5fc0;
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
    border-radius: 15px;

    background: #1488cc;
    background: -webkit-linear-gradient(to right, #2b32b2, #1488cc);
    background: linear-gradient(to right, #2b32b2, #1488cc);
`;
