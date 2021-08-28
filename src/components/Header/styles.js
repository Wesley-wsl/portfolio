import styled from 'styled-components';

export const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-around;
    padding: 15px;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
    animation: HeaderAnimation 1s linear;
    h1 {
        cursor: pointer;
        font-size: 18px;
        font-weight: bold;
    }

    nav ul {
        display: flex;
        list-style: none;

        li {
            margin: 0 20px;
            cursor: pointer;
            font-size: 15px;
        }
    }

    .socialMedias {
        display: flex;
        p:nth-child(1) {
            margin-right: 20px;
        }

        p {
            font-size: 20px;
            cursor: pointer;
        }
    }

    @keyframes HeaderAnimation {
        0% {
            opacity: 0;
            transform: translateY(-50px);
        }
        100% {
            opacity: 1;
            transform: translateY(0px);
        }
    }

    @media (max-width: 650px) {
        display: none;
    }
`;
