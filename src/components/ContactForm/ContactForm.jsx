import css from './ContactForm.module.css';

import {Formik, Form, Field, ErrorMessage} from 'formik';
import {useId} from 'react';
import * as Yup from 'yup';

const ContactForm = ({initialValues, onSubmit}) => {
    const nameId = useId();
    const numberId = useId();

    const ContactFormSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        number: Yup.string()
            .min(3, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
    });

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={ContactFormSchema}
        >
            <Form className={css.form}>
                <div className={css.group}>
                    <label htmlFor={nameId}>Name</label>
                    <Field type="text" name="name" id={nameId}/>
                    <ErrorMessage className={css.message} name="name" component="span"/>
                </div>
                <div className={css.group}>
                    <label htmlFor={numberId}>Number</label>
                    <Field type="text" name="number" id={numberId}/>
                    <ErrorMessage className={css.message} name="number" component="span"/>
                </div>
                <button className={css.submit} type="submit">
                    Add contact
                </button>
            </Form>
        </Formik>
    )
}

export default ContactForm;