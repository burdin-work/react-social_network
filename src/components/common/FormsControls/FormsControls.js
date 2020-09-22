import React from "react";
import styles from './FormsControls.module.css';
import {Field} from "redux-form";


export const FormControl = ({meta: {touched, error}, children}) => {

    const hasError = touched && error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}


export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><div className={styles.textareaWrap}><textarea {...input} {...restProps} className={styles.textarea}/></div></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}


export const createField = (placeholder, name, validators, component, props = {}, text ="") => (
    <>
        <Field placeholder={placeholder}
               name={name}
               component={component}
               validate={validators}
               {...props}
        />{text}
    </>
);