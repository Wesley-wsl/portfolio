import styled from 'styled-components';

export const Card = styled.div`
    max-width: 450px;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: 1px 1px 10px 0px #000;
    margin-bottom: 30px;
    transition: all 0.2s ease-in-out;
    img {
        width: 350px;
        height: 200px;
        object-fit: cover;
    }

    h3 {
        font-size: var(--fz-sm-heading);
        margin: 0 auto;
        display: flex;
        justify-content: center;
        letter-spacing: 4px;
        margin-top: 3px;
    }

    .division {
        margin: 15px auto;
    }

    p {
        max-width: 300px;
        text-align: justify;
        margin: 5px auto;
        text-shadow: 0px 0px 3px var(--background);
    }

    .description {
        height: 120px;
        overflow: hidden;
    }

    @media (max-width: 417px) {
        width: 270px;
        padding: 20px;
        img {
            width: 200px;
            height: 100px;
        }
    }
`;

export const Demo = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 30px 0;

    a {
        background-color: #111;
        padding: 7px;
        border-radius: 10px;
        margin-bottom: 10px;
        transition: all 0.2s linear;
        &:hover {
            transform: translateY(-4px);
        }
    }
`;
