import { FieldValidatorType } from '../../../utils/validators/validators'
import React from 'react'
import s from './FormsControl.module.css'
import { Field, WrappedFieldProps, WrappedFieldMetaProps } from 'redux-form'

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormControlPropsType> = ({
    meta: { touched, error },
    children
}) => {
    const hasError = touched && error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>{children}</div>
            {hasError && <span>{error} </span>}
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = props => {
    const { input, meta, ...restProps } = props
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
        </FormControl>
    )
}

export const Input = (props: any) => {
    const { input, meta, ...restProps } = props
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    )
}

export function createField<FormKeysType extends string>(
    placeholder: string | undefined,
    name: FormKeysType,
    validators: Array<FieldValidatorType>,
    component: React.FC<WrappedFieldProps>,
    props?: {},
    text?: string
) {
    return (
        <div>
            <Field
                placeholder={placeholder}
                name={name}
                component={component}
                className={s.input}
                validate={validators}
                {...props}
            />
            {text}
        </div>
    )
}
