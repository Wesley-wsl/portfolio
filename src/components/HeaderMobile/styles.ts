import styled from 'styled-components';

import { INavMobile } from '../../@types';

export const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px;

    @media (min-width: 651px) {
        display: none;
    }
`;

export const Menu = styled.div`
    cursor: pointer;
    position: relative;
    opacity: 0.6;
    transition: all 0.2s linear;
    z-index: 999;
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

export const NavBarMobile = styled.nav`
    display: ${({ active }: INavMobile) => (active ? 'block' : 'none')};
    background-color: var(--background);
    animation: appear 0.2s linear;
    transition: all 0.2 linear;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    li:nth-child(1) {
        margin-top: 50px;
    }

    li {
        list-style: none;
        padding: 15px;
        align-items: center;
        justify-content: center;
        display: flex;
        gap: 10px;
        user-select: none;
        svg {
            font-size: 20px;
        }
        a {
            cursor: pointer;
        }
    }

    @keyframes appear {
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
