import styled from "styled-components";
import { forwardRef } from "react";

interface Props {
    placeholder: string;
    value: string;
    onChange: any;
}


const Input = forwardRef<HTMLInputElement, Props>((props: Props, ref) => (
    <>
        <Root ref={ref} type={'number'} {...props} />
    </>
));

const Root = styled.input`

`
export default Input;