import styled from 'styled-components';

export const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-around;
    height: 70px;
    align-items: center;
    transition: all 0.2s linear;
    animation: HeaderAnimation 1s linear;
    background-color: var(--background-header);
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    left: 0;
    z-index: 99;
    backdrop-filter: blur(12px);

    @media (max-width: 650px) {
        justify-content: space-between;
        padding-left: 20px;
    }

    h1 {
        cursor: pointer;
        font-size: var(--fz-lg);
        font-weight: bold;
        opacity: 0.6;
        transition: all 0.2s linear;
        &:hover {
            opacity: 1;
            transform: translateY(-4px);
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
`;

export const SocialMedia = styled.div`
    display: flex;

    p:nth-child(1) {
        margin-right: 20px;
    }

    p {
        font-size: var(--fz-xl);
        cursor: pointer;
        opacity: 0.6;
        transition: all 0.2s linear;
        &:hover {
            opacity: 1;
            transform: translateY(-4px);
        }
    }

    @media (max-width: 650px) {
        display: none;
    }
`;

export const NavBar = styled.nav`
    ul {
        display: flex;
        list-style: none;

        li {
            user-select: none;
            margin: 0 20px;
            cursor: pointer;
            font-size: var(--fz-md);
            opacity: 0.6;
            transition: all 0.2s linear;

            &:hover {
                opacity: 1;
                transform: translateY(-4px);
            }
        }
    }

    @media (max-width: 650px) {
        display: none;
    }
`;

export const ToggleMobile = styled.div`
    cursor: pointer;
    position: relative;
    opacity: 0.6;
    transition: all 0.2s linear;

    &:hover {
        opacity: 1;
    }

    div {
        height: 2px;
        background-color: #fff;

        width: 30px;
        margin-bottom: 6px;
    }
`;
