import styled from "styled-components";




interface Props {

}

function Header({ }: Props) {
    return (
        <ExternalWrapper>
            <Title>Currensy Converter</Title>
            <NavWrapper>
                <ConverterLink>Converter</ConverterLink>
                <CoursesLink>Courses</CoursesLink>
            </NavWrapper>
        </ExternalWrapper>
    )
}

const NavWrapper = styled.div`

`
const ConverterLink = styled.a`
    margin-right: 50px;
    cursor: pointer;
    padding: 5px;
`
const CoursesLink = styled.a`
    cursor: pointer;
    padding: 5px;
`

const ExternalWrapper = styled.div`
    font-family: Gilroy;
    padding: 40px 100px 40px 40px;
    border-bottom: 1px solid #F2F3F4;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.p`
    font-size: 24px;
`

export default Header;