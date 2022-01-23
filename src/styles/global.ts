import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-sm-heading: 25px;
    --fz-heading: 40px;
    --background: #0a0c10;
    --backgrond-header: #0a0c10b5;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Quicksand ,Arial, Helvetica, sans-serif;
    color: #fff;
    letter-spacing: 1px;
}

a {
    text-decoration: none;
}

p {
    opacity: 0.8;
    font-weight: 300;
    font-size: var(--fz-md);
    line-height: 30px;
}

body {
    color: #fff;
    background-color: var(--background);
}

::-webkit-scrollbar              { background-color: #000011;}
::-webkit-scrollbar-track        { background-color: #000; }
::-webkit-scrollbar-thumb        {
    background-color: var(--background);
    border-radius: 3px;
    transition: all 1s linear;
    &:hover {
        background-color: #0c0c10;
    }
    }
`;

export const Title = styled.h2`
    margin-bottom: 20px;
    font-size: clamp(25px, 6vw, var(--fz-heading));
    margin-bottom: 20px;
    font-weight: 500;
`;
