import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./ContactForm.css";

const validationSchema = Yup.object({
  nombre: Yup.string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .required("El nombre es requerido"),
  email: Yup.string()
    .email("Correo electrónico no válido")
    .required("El correo electrónico es requerido"),
  asunto: Yup.string()
    .min(2, "El asunto debe tener al menos 2 caracteres")
    .required("El asunto es requerido"),
  mensaje: Yup.string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .required("El mensaje es requerido"),
});

const ContactForm: React.FC = () => {
  return (
    <div className="contact-form-container">
      <Formik
        initialValues={{ nombre: "", email: "", asunto: "", mensaje: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            setSubmitting(false);
            alert("Mensaje enviado");
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="contact-form">
            <div className="form-field d-flex gap-3">
              <div>
                <label className="label-form" htmlFor="nombre">
                  Nombre
                </label>
                <Field type="text" name="nombre" className="input-field" />
                <ErrorMessage
                  name="nombre"
                  component="div"
                  className="error-text"
                />
              </div>
              <div>
                <label className="label-form" htmlFor="email">
                  Email
                </label>
                <Field type="email" name="email" className="input-field" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-text"
                />
              </div>
            </div>

            <div className="form-field"></div>

            <div className="form-field">
              <label className="label-form" htmlFor="asunto">
                Asunto
              </label>
              <Field type="text" name="asunto" className="input-field" />
              <ErrorMessage
                name="asunto"
                component="div"
                className="error-text"
              />
            </div>

            <div className="form-field">
              <label className="label-form" htmlFor="mensaje">
                Mensaje
              </label>
              <Field
                as="textarea"
                name="mensaje"
                className="input-field textarea-field"
              />
              <ErrorMessage
                name="mensaje"
                component="div"
                className="error-text"
              />
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="submit-button label-form"
                disabled={isSubmitting}
              >
                Enviar Mensaje
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
