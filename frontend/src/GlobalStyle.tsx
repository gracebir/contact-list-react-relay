import { createGlobalStyle  } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --color-dark-blue: hsl(209,23%,22%);
        --color-very-dark-blue-dark: hsl(0, 1%, 13%);
        --color-very-dark-very: hsl(0, 1%, 11%);
        --color-dark-gray-light: hsl(211, 0%, 89%);
        --color-very-light-gray-light-bg: hsl(0,0%,98%);
        --color-red-error: hsl(0, 98%, 26%);
        --color-focus-input: hsl(148, 89%, 19%);
        --color-white-dark-mode: hsl(0, 33%, 99%);
    }

    body{
        /* font-family: 'Fraunces', serif; */
        font-family: 'Montserrat', sans-serif;
        background-color: var(--color-very-dark-blue-dark);
        color: var(--color-white-dark-mode);
        overflow-x: hidden;
        height: 100vh;
        width: 100%
    }
`