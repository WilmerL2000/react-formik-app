import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";

const Formulario = () => {
  const regexName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validate={(values) => {
          let errors = {};

          if (!values.name) {
            errors.name = "Por favor ingrese un nombre";
          } else if (!regexName.test(values.name)) {
            errors.name = "El nombre solo puede contener letras y espacios";
          }

          if (!values.email) {
            errors.email = "Por favor ingrese un correo electronico";
          } else if (!regexEmail.test(values.email)) {
            errors.email =
              "El correo solo puede contener letras, numeros, puntos, guiones";
          }

          if (!values.password) {
            errors.password = "Por favor ingrese una contraseña";
          } else if (!regexPassword.test(values.password)) {
            errors.password =
              "La contraseña debe ser mayor de 8 digitos y menos de 15 digitos, contener al menos una mayuscula y un caracter especial";
          }

          return errors;
        }}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          resetForm();
          setTimeout(() => {
            setSubmitting(false);
          }, 200);
          toast.success("Formulario enviado");
        }}
      >
        {({ isSubmitting }) => (
          <>
            <Form className="formulario">
              <h1>Formulario con Formik</h1>
              <div>
                <label htmlFor="name">Nombre</label>
                <Field type="text" name="name" id="name" placeholder="Juan" />
                <ErrorMessage className="error" name="name" component="div" />
              </div>
              <div>
                <label htmlFor="email">Correo</label>
                <Field
                  type="text"
                  name="email"
                  id="email"
                  placeholder="ejemplo@gmail.com"
                />
                <ErrorMessage className="error" name="email" component="div" />
              </div>
              <div>
                <label htmlFor="password">Contrasena</label>
                <Field
                  type="text"
                  name="password"
                  id="password"
                  placeholder="Qfneu13!"
                />
                <ErrorMessage
                  className="error"
                  name="password"
                  component="div"
                />
              </div>
              <button className="" type="submit" disabled={isSubmitting}>
                Enviar
              </button>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default Formulario;
