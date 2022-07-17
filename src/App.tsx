import styled from "styled-components";
import { DefaultCurrensy, Footer, selectCurrensyObj, useAppSelector, CurrensyInterface } from './';



function App() {
  const currensyObj: CurrensyInterface = useAppSelector(selectCurrensyObj);

  return (

    <>
      {!currensyObj.defaultCurrensy.trim() ? <DefaultCurrensy /> : null}

      <ExternalWrapper>

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

