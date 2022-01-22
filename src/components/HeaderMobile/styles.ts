import styled from 'styled-components';

export const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    max-width: 450px;
    margin: 0 auto;
    h1 {
        cursor: pointer;
        font-size: 18px;
        font-weight: bold;
    }
    padding: 15px;

    @media (min-width: 651px) {
        display: none;
    }
`;

export const Menu = styled.div`
    cursor: pointer;
    position: relative;
    div {
        height: 2px;
        background-color: #fff;
        width: 30px;
        margin-bottom: 6px;
    }
`;

/* display: ${({ active }: boolean) => (active ? 'block' : 'none')}; */
export const NavBarMobile = styled.nav`
    background-color: #000039;
    border-radius: 10px;
    position: absolute;
    top: 40px;
    right: 10px;
    z-index: 1;
    animation: appear 0.2s linear;
    li {
        list-style: none;
        padding: 15px;

        display: flex;
        gap: 10px;
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
