import React from "react";
import "./Login.css";
import CallbackValidation from "../../utils/CallbackValidation";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import Form from "../Form/Form";
import { useCurrentUser } from "../../utils/CurrentUserContext";

function Login() {
  const formCallbackValidation = CallbackValidation();
  const { login, error } = useCurrentUser();
  const navigate = useNavigate();
  const { email, password } = formCallbackValidation.values;
  
  const submitHandle = async (evt) => {
    evt.preventDefault();
    await login(email, password);
    navigate("/movies/all");
    formCallbackValidation.resetForm();
  };

  return (
    <section className="login">
      <div className="login__container">
        <Link to="/">
          <img className="login__logo" src={logo} alt="Логотип" />
        </Link>
        <h1 className="login__title">Рады видеть!</h1>
        <Form
          submitText={{
            buttonText: " Войти ",
            promt: " Зарегистрироваться ",
            route: "/signup",
            linkText: " Регистрация ",
          }}
          submitHandle={submitHandle}
          validation={formCallbackValidation}
          formName="login"
          loginError={error}
        />
      </div>
    </section>
  );
}

export default Login;