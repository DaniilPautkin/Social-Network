import styled from 'styled-components'
import TextArea from 'antd/lib/input/TextArea'
import { Input } from 'antd'

/* 
export const FormError = styled.formControl.error input,
.formControl.error textarea 
`
    border: 2px solid red;
`

export const  = styled.formControl.error span `
    color: red
` */

export const FormSummaryError = styled.div`
    display: inline;
    border: 2px solid red;
    border-radius: 5px;
    color: red;
    padding: 5px;
`

export const StyledTextArea = styled(TextArea)`
    resize: none;
    border-radius: 5px;
    /* margin: 0px 5px 0px 5px; */
`

export const StyledInput = styled(Input)`
    border-radius: 5px;
    /* margin: 0px 5px 0px 5px; */
`
