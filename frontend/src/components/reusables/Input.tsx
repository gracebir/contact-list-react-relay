import  styled  from 'styled-components'

type inputProps = {
    name: string
    type: string
    placeholder?: string
    isError: boolean
    isFocus?: boolean
    width?: string
    errorMsg?: string
}

const Input = styled.input<inputProps>`
    padding: .5rem 1em;
    border: ${props => props.isError ? `2px solid var(--color-red-error)`: `none`};
    border-radius: 50px;
    font-weight: bold;
    font-size: 16px;
    font-family: 'Nunito Sans', sans-serif;
    width: ${props => props.width};
    &:focus-visible{
        outline: none;
    }

    &:focus{
        border: 2px solid var(--color-focus-input);
    }
`

const ErrorParagraph = styled.p`
    color: var(--color-red-error);
    font-weight: bold;
    font-size: 14px ;
    margin-left: 1.2em;
`

const InputControl = styled.div`
    display: flex;
    flex-direction: column;
    gap: .3em;
    
`

function InputComponent({
name,
type,
placeholder,
width,
isError=false,
errorMsg
}: inputProps) {
  return (
    <InputControl>
      <Input isError={isError} width={width} name={name} type={type} placeholder={placeholder}/>
      { isError ? <ErrorParagraph>{errorMsg}</ErrorParagraph>: null}
    </InputControl>
  )
}

export default InputComponent
