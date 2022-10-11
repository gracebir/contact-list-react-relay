import styled from "styled-components"
import { devices } from "../../../breakpoints";

const NavStyled = styled.nav`
    background-color: var(--color-very-dark-very);
    padding: 1.3em 7em;
    display: flex;
    position: sticky;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 9999;
    color: var(--color-dark-gray-light);
    justify-content: space-between;
    box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.75);
    @media ${devices.mobileM} {
        padding: 1.3em 2em;
        align-items: center;
    }

    @media ${devices.mobileS} {
        padding: 1.3em 1em;
        align-items: center;
    }

    @media ${devices.desktop} {
        padding: 1.3em 7em;
    }

    @media ${devices.tablet} {
        padding: 1.3em 3em;
    }

    @media ${devices.laptop} {
        padding: 1.3em 7em;
        z-index: 1000;
    }

    @media ${devices.desktop} {
        padding: 1.3em 7em;
        z-index: 1000;
    }
`;

const NavLink = styled.li`
    list-style: none;
    font-weight: bold;
    font-size: 1.1em;
    cursor: pointer;
    &:hover{
        color: var(--color-white-dark-mode);
    }

    @media ${devices.mobileM} {
        font-size: 1em;
    }

    @media ${devices.mobileS} {
        font-size: 1em;
    }
    
`

const NavItems = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5em;
`

const LoginButton = styled.button`
    padding: .5em 1em;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    color: var(--color-dark-gray-light);
    background-color: var(--color-very-dark-very);
    font-size: 1.1em;
    border: 1px solid var(--color-dark-gray-light);
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        color: var(--color-white-dark-mode);
    }
    @media ${devices.mobileS} {
        font-size: 1em;
    }
`

const NavLogoStyled = styled.h3`
    font-weight: 900;
    font-family: 'Fraunces', serif;
    font-size: 25px;
    line-height: 1;
    letter-spacing: .1em;
    cursor: pointer;
    &:hover{
        color: var(--color-white-dark-mode);
    }

    @media ${devices.mobileM} {
        font-size: 23px;
    }

    @media ${devices.tablet} {
        font-size: 20px;
    }

    @media ${devices.mobileS} {
        font-size: 23px;
    }
`

function Nav() {
  return (
    <NavStyled>
     <NavLogoStyled>Movie.</NavLogoStyled>
      <NavItems>
        <NavLink>Adding</NavLink>
        <LoginButton>Login</LoginButton>
      </NavItems>
    </NavStyled>
  )
}

export default Nav
