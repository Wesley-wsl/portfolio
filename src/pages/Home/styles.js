import styled from 'styled-components';

export const Main = styled.main`
    max-width: 760px;
    margin: 60px auto;
`;

export const Introduction = styled.section`
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
    }
`;

export const Projects = styled.section`
    div:nth-child(1),
    div:nth-child(2) {
        margin-top: 55px;
    }

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 100px;
`;

export const Techs = styled.section`
    > p {
        margin-bottom: 20px;
    }

    div {
        display: flex;
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
                max-width: 150px;
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
                background: #005aa7;
                background: -webkit-linear-gradient(to right, #005aa7, #fffde4);
                background: linear-gradient(to right, #005aa7, #fffde4);
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
