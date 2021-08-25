import styled from 'styled-components';

export const Card = styled.div`
    /* margin-top: 80px; */
    max-width: 360px;
    background-color: #000900;
    border-radius: 10px;
    img {
        max-width: 360px;
    }

    h3 {
        font-size: 30px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
    }

    .division {
        margin: 7px auto;
        height: 3px;
    }

    p {
        max-width: 300px;
        text-align: justify;
        margin: 5px auto;
    }

    .labelStack {
        color: var(--green-bold);
        text-align: center;
        margin: 10px auto;
    }

    .stacks {
        display: flex;
        p {
            max-width: 90px;
            border-radius: 6px;
            text-align: center;
            text-shadow: 0px 0px 10px #00ff00;
        }
    }

    .demo {
        display: flex;
        justify-content: space-around;
        margin: 10px 0;

        a {
            background-color: #001700;
            padding: 7px;
            border-radius: 10px;
            margin-bottom: 10px;
        }
    }
`;
