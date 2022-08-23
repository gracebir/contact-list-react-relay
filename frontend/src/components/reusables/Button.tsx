import styled from "styled-components"

export enum ButtonType {
    submit="submit",
    reset="reset",
    button="button"
}

type buttonProps = {
    text: string
    type: ButtonType
}

const ButtonStyled = styled.button`
    padding: .7em 1.3em;
    color: var(--color-white-dark-mode);
    background-color: var(--color-dark-blue);
    border: none;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: bold;
    border-radius: 50px;
    cursor: pointer;
    transition: ease-in-out .5s;
    &:hover{
        background-color: hsl(208, 24%, 16%);
    }
`

function Button({
    text,
    type
}: buttonProps) {
  return (
    <ButtonStyled type={type}>
      {text}
    </ButtonStyled>
  )
}

export default Button
