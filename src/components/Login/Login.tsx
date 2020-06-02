import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { login } from '../../redux/auth-reducer'
import { AppStateType } from '../../redux/redux-store'
import { required } from '../../utils/validators/validators'
import sform from '../common/FormsControls/FormsControl.module.css'
import {
    createField,
    Input,
    GetStringKeys,
} from '../common/FormsControls/FormsControls'
import s from './Login.module.css'

type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<
    LoginFormValuesType,
    LoginFormOwnProps
> &
    LoginFormOwnProps> = ({ handleSubmit, error, captchaUrl, children }) => {
    return (
        <form className={s.form} onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKeys>(
                'Email',
                'email',
                [required],
                Input
            )}
            <br />
            {createField<LoginFormValuesTypeKeys>(
                'Password',
                'password',
                [required],
                Input,
                {
                    type: 'password',
                }
            )}
            {/* {createField<LoginFormValuesTypeKeys>(
                undefined,
                'rememberMe',
                [],
                Input,
                { type: 'checkbox' },
                'remember me'
            )} */}

            {captchaUrl && (
                <img alt="" className={s.captcha} src={captchaUrl} />
            )}
            <div>
                {error && <div className={sform.formSummaryError}>{error}</div>}
                {captchaUrl &&
                    createField<LoginFormValuesTypeKeys>(
                        'Symbols from image',
                        'captcha',
                        [required],
                        Input,
                        {}
                    )}
            </div>
            <div>
                <button className={s.submitButton}>Login</button>
            </div>
        </form>
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

const Login: React.FC<MapStateToPropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(
            formData.email,
            formData.password,
            formData.rememberMe,
            formData.captcha
        )
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    )
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login })(Login)
