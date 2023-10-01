import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Register.css";
import Form from "../Form/Form";
import logo from "../../images/logo.svg";
import CallbackValidation from "../../utils/CallbackValidation";
import MainApi from "../../utils/MainApi";
import useLogin from "../../hooks/useLogin";

function Register() {
  const formCallbackValidation = CallbackValidation();
  const { login } = useLogin();
  const [error, setError] = useState(false);
  const { email, password, name } = formCallbackValidation.values;
  const { values, onFocus, handleChange, isFocused, errors } =
    formCallbackValidation;

  const navigate = useNavigate();

  async function handleRegister(name, email, password) {
    try {
      console.log('name', name);
      console.log('email', email);
      console.log('password', password);
      await MainApi.register(name, email, password);
      await login(email, password);
      navigate("/signin");
    }
    catch (e) {
      setError(e.message);
      console.error(e);
    }
  }

  const submitHandle = (evt) => {
    evt.preventDefault();
    handleRegister(name, email, password);
    formCallbackValidation.resetForm();
  };

  return (
    <section className="register">
      <div className="register__container">
        <Link to="/">
          <img className="register__logo" src={logo} alt="Логотип" />
        </Link>
        <h1 className="register__title">Добро пожаловать!</h1>
        <Form
          submitText={{
            buttonText: "Зарегистрироваться",
            promt: " Уже зарегистрированы?",
            route: "/signin",
            linkText: "Войти",
          }}
          registeredError={error}
          validation={formCallbackValidation}
          submitHandle={submitHandle}
          formName="register"
          className="register__form"
        >
          <fieldset className="register__fieldset">
            <label className="register__label" htmlFor="name">
              Имя
            </label>
            <input
              type="text"
              placeholder="Введите имя"
              id="name"
              name="name"
              className={`form__input ${errors.name && "form__input-invalid"}`}
              minLength="2"
              maxLength="30"
              value={values.name || ""}
              onFocus={onFocus}
              onChange={handleChange}
            />
            <span className="form__input-error">
              {isFocused && errors.name}
            </span>
          </fieldset>
        </Form>
      </div>
    </section>
  );
}

export default Register;