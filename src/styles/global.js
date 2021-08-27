import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Lora,Arial, Helvetica, sans-serif;
    color: #fff;
}

a {
    text-decoration: none;
}

p {
    opacity: 0.8;
}

body {
    color: #fff;
    background-color: #00001f;
}

h2 {
        margin-bottom: 20px;
        font-size: 42px;
        margin-bottom: 20px;
    }
`;
