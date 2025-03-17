import React from "react";
import "../../styles/ContactMe.css"
import * as Yup from "yup"
import { Formik, Form, Field, ErrorMessage } from "formik";

const ContactMe = () => {


    return (
        <>
            <header className="ticket-aboutme__header contactme__header">

                <h1 className="ticket-aboutme__header--title">Contactame</h1>
            </header>
            <div class="separator-container"><div class="separator-ui"></div></div>
            <section className="ticket-row contactme__container">
                <article className="contactme-card">
                    <Formik
                        initialValues={
                            {
                                name: "",
                                email: "",
                                phone: "",
                                message: ""
                            }
                        }
                        validationSchema={Yup.object({
                            name: Yup.string()
                                .required("🚫 Requerido"),
                            email: Yup.string()
                                .email("🚫 Email invalido")
                                .required("🚫 Requerido"),
                            phone: Yup.number()
                                .required("🚫 Requerido")
                                .positive("🚫 Numero invalido")
                                .typeError("🚫 Numero invalido")
                                .integer("🚫 Numero invalido"),

                            message: Yup.string()
                                .required("Requerido")
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            console.log(values)
                            setSubmitting(false)
                        }}
                    >
                        <Form className="contactme-card__container">
                            <div className="contactme-test">
                                <div className="left-contactme">
                                    <div className="contactme-card__item">
                                        <Field
                                            className="input-contactme ad"
                                            name="name"
                                            type="text"
                                            placeholder="Nombre"
                                        >

                                        </Field>
                                        <span className="control-errormessage">
                                            <ErrorMessage name="name" className="input-error" />
                                        </span>
                                    </div>
                                    <div className="contactme-card__item">
                                        <Field
                                            className="input-contactme ad"
                                            name="email"
                                            type="email"
                                            placeholder="Email"
                                        >

                                        </Field>
                                        <span className="control-errormessage">
                                            <ErrorMessage name="email" className="input-error" />
                                        </span>
                                    </div>
                                    <div className="contactme-card__item">
                                        <Field
                                            className="input-contactme ad"
                                            name="phone"
                                            type="int"
                                            placeholder="Numero de teléfono"
                                        >

                                        </Field>
                                        <span className="control-errormessage">
                                            <ErrorMessage name="phone" className="input-error" />
                                        </span>
                                    </div>
                                </div>
                                <div className="right-contactme">
                                    <div className="contactme-card__item">
                                        <Field
                                            className="input-contactme textarea ad"
                                            name="message"
                                            type="textbox"
                                            placeholder="Mensaje"
                                        >

                                        </Field>
                                        <span className="control-errormessage">
                                            <ErrorMessage name="message" className="input-error" />
                                        </span>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            <div className="contactme-card__submit">
                                    <button type="submit" className="button-contactme">Enviar</button>
                                </div>
                        </Form>
                    </Formik>
                </article>

            </section>


        </>
    )
}
export default ContactMe;