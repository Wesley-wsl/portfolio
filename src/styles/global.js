import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
    --green-bold: #01ff2c;
    --color-green: #49d260;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    color: var(--color-green);
}

a {
    text-decoration: none;
    color: #fff;
}

body {
    color: #fff;
    background-color: #000400;
}

.division {
    width: 100px;
    height: 5px;
    margin: 35px 0px;
    border-radius: 15px;

    background: #000000;
    background: -webkit-linear-gradient(to right, #000000, #0f9b0f);
    background: linear-gradient(to right, #000000, #0f9b0f);
}
`;
