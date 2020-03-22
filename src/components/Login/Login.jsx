import React from 'react';
import { reduxForm } from "redux-form";
import { createField, Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import s from "./Login.module.css"
import sform from '../common/FormsControls/FormsControl.module.css'

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form className={s.form} onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, { type: "password" })}
            {createField(null, "rememberMe", [], Input, { type: "checkbox" }, "remember me")}

            {captchaUrl && <img alt='' className={s.captcha} src={captchaUrl} />}
            <div>
                {error && <div className={sform.formSummaryError}>
                    {error}
                </div>
                }
                {captchaUrl && createField('Symbols from image', 'captcha', [required], Input, {})
                }
            </div>
            <div>

                <button className={s.submitButton}>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
}
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);