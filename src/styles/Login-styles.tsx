import styled from 'styled-components'
import Form from 'antd/lib/form/Form'
import { Checkbox, Input, Button } from 'antd'

export const StyledLoginForm = styled(Form)`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    Input {
        margin: 10px 0px 10px 0px;
    }
`

export const SubmitLoginButton = styled(Button)``

export const InputFormContainer = styled(Input)`
    margin-bottom: 10px;
`

export const CheckBox = styled(Checkbox)`
    :hover {
        margin-top: 5px;
        margin-bottom: 5px;
        user-select: none;
        transform: scale(1.1);
    }
`

export const Captcha = styled.img`
    margin: 10px 0px 10px 0px;
    border-radius: 10px;
`
