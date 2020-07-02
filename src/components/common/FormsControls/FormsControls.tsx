import Text from 'antd/lib/typography/Text'
import React from 'react'
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form'
import {
    ErrorSpan,
    StyledCheckbox,
    StyledField,
    StyledInput,
    StyledTextArea,
} from '../../../styles/FormsControls-styles'
import { FieldValidatorType } from '../../../utils/validators/validators'
import s from './FormsControl.module.css'

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormControlPropsType> = ({
    meta: { touched, error },
    children,
}) => {
    const hasError = touched && error
    return (
        // FIX: className
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                <div>{children}</div>
                {hasError && <ErrorSpan>{error} </ErrorSpan>}
            </div>
        </div>
    )
}

export const RFTextarea: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, ...restProps } = props
    return (
        <FormControl {...props}>
            <StyledTextArea {...input} {...restProps} />
        </FormControl>
    )
}

export const RFInput = (props: any) => {
    const { input, meta, ...restProps } = props
    return (
        <FormControl {...props}>
            <StyledInput {...input} {...restProps} />
        </FormControl>
    )
}

export const RFCheckbox = (props: any) => {
    const { input, meta, ...restProps } = props
    return (
        <FormControl {...props}>
            <StyledCheckbox {...input} {...restProps} />
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
        <StyledField>
            {!!text ? <Text>{text}</Text> : ''}
            <Field
                placeholder={placeholder}
                name={name}
                component={component}
                validate={validators}
                {...props}
            />
        </StyledField>
    )
}

export type GetStringKeys<T> = Extract<keyof T, string>
