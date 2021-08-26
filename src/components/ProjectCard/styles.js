import styled from 'styled-components';

export const Card = styled.div`
    max-width: 360px;
    border-radius: 10px;
    box-shadow: 1px 1px 10px 0px #1488cc;
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
        margin: 15px auto;
        height: 3px;
        background: #00416a;
    }

    p {
        max-width: 300px;
        text-align: justify;
        margin: 5px auto;
    }

    .labelStack {
        text-align: center;
        margin: 10px auto;
    }

    .stacks {
        display: flex;
        p {
            max-width: 350px;
            border-radius: 6px;
            text-align: center;
            text-shadow: 1px 1px 10px #fff;
        }
    }
`;

export const Demo = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 10px 0;

    a {
        background-color: #000;
        padding: 7px;
        border-radius: 10px;
        margin-bottom: 10px;
    }
`;
