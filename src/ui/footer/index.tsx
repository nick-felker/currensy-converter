import styled from "styled-components";



interface Props {

}

function Footer({ }: Props) {
    return (
        <ExternalWrapper>
            <a href="https://www.freepik.com/vectors/60s-background">60s background vector created by freepik - www.freepik.com</a>

        </ExternalWrapper>
    )
}

const ExternalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 40px;
`


export default Footer;