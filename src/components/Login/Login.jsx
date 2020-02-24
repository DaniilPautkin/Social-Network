import React from 'react';
import s from "./Login.module.css"
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login, logout } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom';
import ss from './../common/FormsControls/FormsControl.module.css'


const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit} className={s.form} action="">
        <div>
            <Field placeholder={"login"} name={"email"} component={Input} className={s.input} validate={[required]} />
        </div>
        <div>
            <Field placeholder={"password"} name={"password"} type="password" component={Input} className={s.input} validate={[required]} />
        </div>
        <div>
            <Field component={Input} name={"rememberMe"} type={"checkbox"} className={s.checkbox} /> remember me
            </div>
        {props.error && <div className={ss.formSummeryError}>{props.error}</div>}
        <div>

            <button className={s.submitButton}>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to="/profile" />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login, logout })(Login)