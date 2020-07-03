import { Checkbox, Input } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import styled from 'styled-components'
import { Colors } from './App-styles'

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
    cursor: default;
    padding: 3px;
    display: inline;
    border: 2px solid ${Colors.defaultRed};
    border-radius: 5px;
    color: ${Colors.defaultRed};
`

export const StyledTextArea = styled(TextArea)`
    resize: none;
    border-radius: 5px;
    /* margin: 0px 5px 0px 5px; */
    :hover,
    :active,
    :focus {
        box-shadow: none;
        border: 1px solid ${Colors.defaultGreen};
    }
`

export const StyledCheckbox = styled(Checkbox)`
    .ant-checkbox-checked .ant-checkbox-inner {
        background-color: ${Colors.defaultGreen};
        border-color: ${Colors.defaultGreen};
    }
`

export const StyledInput = styled(Input)`
    border-radius: 5px;
    transition: 0.3s ease-in-out;
    :hover,
    :active,
    :focus {
        box-shadow: none;
        border: 1px solid ${Colors.defaultGreen};
    }
    /* margin: 0px 5px 0px 5px; */
`

export const StyledField = styled.div`
    /* padding: 10px; */
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    font-weight: 500;
    Text {
        cursor: default;
        margin-left: 0;
    }
    input[type='checkbox'] {
        cursor: pointer;
        margin-left: 5px;
        margin-right: 5px;
        height: 13px;
        width: 13px;
        min-width: 13px;
    }
    /* margin-bottom: 5px; */
`

export const ErrorSpan = styled.div`
    padding: 10px !important;
    /* margin: 10px !important; */
    display: none !important;
`
