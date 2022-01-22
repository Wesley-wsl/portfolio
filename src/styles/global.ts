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

::-webkit-scrollbar              { background-color: #000011;}
::-webkit-scrollbar-button       { background-color: #00004f; border-radius: 5px;}
::-webkit-scrollbar-track        { background-color: #00002f; }
::-webkit-scrollbar-thumb        { background-color: #00008f; border-radius: 10px;}
`;
