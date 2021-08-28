import styled from 'styled-components';

export const Card = styled.div`
    max-width: 350px;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: 1px 1px 10px 0px #1488cc;
    img {
        max-width: 350px;
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
        width: 60px;
        background: #005aa7;
    }

    p {
        max-width: 300px;
        text-align: justify;
        margin: 5px auto;
        text-shadow: 0px 0px 3px #005aa7;
    }

    .labelStack {
        text-align: center;
        margin: 10px auto;
    }

    .stacks {
        display: flex;
        p {
            max-width: 350px;
            text-align: center;
        }
    }
`;

export const Demo = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 10px 0;

    a {
        background-color: #005;
        padding: 7px;
        border-radius: 10px;
        margin-bottom: 10px;
    }
`;
