import styled from "styled-components";

const BannerStyledWrapper = styled.div`
    height: 80vh;
    padding: 1em 2rem;
    display: flex;
    justify-content: center;
    @media (min-width: 45rem) {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 2em 7rem;
    }
`

const BannerText = styled.p`
    font-family: 'Fraunces', serif;
    font-size: 3em;
    letter-spacing: 1px;
    width: 100%;
    line-height: 1;
    text-align: center ;

    @media (min-width: 45rem) {
        font-size: 5em;
        text-align: start;
        width: 85%;
    }
`;

const BannerButton = styled.button`
    padding: 1em 4em;
    border: none;
    background-color: var(--color-very-dark-blue-dark);
    color: var(--color-white-dark-mode);
    border: 1px solid var(--color-white-dark-mode);
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 1.2em;
    cursor: pointer;
    @media (min-width: 45rem){
        width: 70%;
        font-size: 1.5em;
        padding: .8em 4em;
        &:hover{
            background-color: var(--color-very-dark-very);
            color: #fff;
        }
    }
`

const BannerElt = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5em;
    margin: auto 0;
    @media (min-width: 45rem) {
        width: 50%;
    }
`

function Banner() {
  return (
    <BannerStyledWrapper>
        <BannerElt>
            <BannerText>
                Keep adding your favorate Movies.
            </BannerText>
            <BannerButton>See Movies</BannerButton>
        </BannerElt>
    </BannerStyledWrapper>
  )
}

export default Banner
