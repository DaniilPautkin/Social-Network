import React from 'react'
import { Formik, Form, Field } from 'formik'
import { FilterType } from '../../redux/users-reducer'
import { useSelector } from 'react-redux'
import { getUsersFilter } from '../../redux/users-selectors'

const UsersSearchForm: React.FC<PropsType> = ({ onFilterChanged }) => {
    const usersSearchFormValidate = (values: any) => {
        const errors: any = {}
        return errors
    }

    const filter = useSelector(getUsersFilter)

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
            enableReinitialize
            initialValues={{ term: filter.term, friend: String(filter.friend) as FriendFormType}}
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

type FriendFormType = 'true' | 'false' | 'null'

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

type FormType = {
    term: string
    friend: FriendFormType
}

export default UsersSearchForm
