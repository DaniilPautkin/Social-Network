import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { login } from '../../redux/auth-reducer'
import { AppStateType } from '../../redux/redux-store'
import { StyledDefaultButton } from '../../styles/App-styles'
import { FormSummaryError } from '../../styles/FormsControls-styles'
import { Captcha, StyledLoginForm } from '../../styles/Login-styles'
import { required } from '../../utils/validators/validators'
import {
    createField,
    GetStringKeys,
    RFInput,
} from '../common/FormsControls/FormsControls'

type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<
    InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> &
        LoginFormOwnProps
> = ({ handleSubmit, error, captchaUrl, children }) => {
    return (
        <StyledLoginForm>
            {/* <Text>Login</Text> */}
            {createField<LoginFormValuesTypeKeys>(
                'Email',
                'email',
                [required],
                RFInput,
                {},
                'Email'
            )}
            {createField<LoginFormValuesTypeKeys>(
                'Password',
                'password',
                [required],
                RFInput,
                {
                    type: 'password',
                },
                'Password'
            )}
            {/* {createField<LoginFormValuesTypeKeys>(
                undefined,
                'rememberMe',
                [],
                RFCheckbox,
                {},
                'remember me'
            )} */}

            {captchaUrl && <Captcha src={captchaUrl} />}
            <div>
                {error && <FormSummaryError>{error}</FormSummaryError>}
                {captchaUrl &&
                    createField<LoginFormValuesTypeKeys>(
                        'Symbols from image',
                        'captcha',
                        [required],
                        RFInput,
                        {}
                    )}
            </div>
            <div>
                <StyledDefaultButton onClick={handleSubmit}>
                    Login
                </StyledDefaultButton>
            </div>
        </StyledLoginForm>
    )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
    form: 'login',
})(LoginForm)

type MapStateToPropsType = {
    captchaUrl: string | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    login: (
        email: string,
        password: string,
        rememberMe: boolean,
        captcha: string
    ) => void
}

export type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>

export const LoginPage: React.FC = (props) => {
    const captchaUrl = useSelector(
        (state: AppStateType) => state.auth.captchaUrl
    )
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)

    const dispatch = useDispatch()

    const submit = (formData: LoginFormValuesType) => {
        dispatch(
            login(
                formData.email,
                formData.password,
                formData.rememberMe,
                formData.captcha
            )
        )
    }

    return (
        <>
            {isAuth ? (
                <Redirect to={'/profile'} />
            ) : (
                <LoginReduxForm onSubmit={submit} captchaUrl={captchaUrl} />
            )}
        </>
    )
}
