import styled from "styled-components";
import { DefaultCurrensy, Footer, selectCurrensyObj, useAppSelector, CurrensyInterface, Header } from './';



function App() {
  const currensyObj: CurrensyInterface = useAppSelector(selectCurrensyObj);

  return (

    <>
      {!currensyObj.defaultCurrensy.trim() ? <DefaultCurrensy /> : null}

      <ExternalWrapper>
        <Header />
        <Footer />
      </ExternalWrapper>
    </>

  )

}

const ExternalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`




export default App;

