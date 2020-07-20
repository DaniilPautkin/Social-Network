import React from 'react'
import { Formik, Form, Field } from 'formik'
import { FilterType } from '../../redux/users-reducer'

const UsersSearchForm: React.FC<PropsType> = ({ onFilterChanged }) => {
    const usersSearchFormValidate = (values: any) => {
        const errors: any = {}
        return errors
    }

    const submit = (
        values: FormType,
        { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
    ) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false 
        }

        onFilterChanged(filter)
        setSubmitting(false)
    }

    return (
        <Formik
            initialValues={{ term: '', friend: 'null' }}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field type='text' name='term' />
                    <Field as="select" name="friend">
             <option value="null">All</option>
             <option value="true">Only followed</option>
             <option value="false">Only unfollowed</option>
           </Field>
                    <button type='submit' disabled={isSubmitting}>
                        Find
                    </button>
                </Form>
            )}
        </Formik>
    )
}

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

type FormType = {
    term: string
    friend: 'true' | 'false' | 'null'
}

export default UsersSearchForm
