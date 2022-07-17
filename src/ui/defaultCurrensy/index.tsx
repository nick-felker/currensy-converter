import styled from "styled-components";
import { useAppDispatch, changeCurrensyObj } from '../../';

interface Props {

}

function DefaultCurrensy({ }: Props) {
    const dispatch = useAppDispatch();

    return (
        <>
            <BlackOverlay />
            <ExternalWrapper>
                <ModalTitle draggable={'false'}>Select your default currensy</ModalTitle>
                <CurrensyList>
                    <CurrensyElem onClick={() => dispatch(changeCurrensyObj({ defaultCurrensy: 'dollar' }))} draggable={'false'} src="./images/dollarIcon.png" />
                    <CurrensyElem onClick={() => dispatch(changeCurrensyObj({ defaultCurrensy: 'euro' }))} draggable={'false'} src="./images/euroIcon.png" />
                    <CurrensyElem onClick={() => dispatch(changeCurrensyObj({ defaultCurrensy: 'pound' }))} draggable={'false'} src="./images/poundIcon.png" />
                    <CurrensyElem onClick={() => dispatch(changeCurrensyObj({ defaultCurrensy: 'dollar' }))} draggable={'false'} src="./images/rubleIcon.png" />
                    <CurrensyElem onClick={() => dispatch(changeCurrensyObj({ defaultCurrensy: 'yen' }))} draggable={'false'} src="./images/yenIcon.png" />
                </CurrensyList>
            </ExternalWrapper>
        </>
    )
}

const BlackOverlay = styled.div`
    background-image: url('./images/bg.svg');
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;

`

const CurrensyList = styled.div`
    display: flex;
`

const CurrensyElem = styled.img`
    width: 50px;
    cursor: pointer;
    :hover{
        opacity: 0.5;
        transition: 0.5s;
    }
    margin-right: 15px;
    :nth-child(5){
        margin-right: 0px;  
    }
`

const ModalTitle = styled.p`
    margin-bottom: 30px;
    font-size: 24px;
    user-select: none;  

`

const ExternalWrapper = styled.div`
    border-radius: 10px;
    position: absolute;
    background-color: white;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%); 
    font-family: Gilroy;
    padding: 45px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`


export default DefaultCurrensy;