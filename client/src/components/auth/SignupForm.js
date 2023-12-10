import styled from "styled-components";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import useSignupForm from "../../hooks/useSignupForm";
import { ButtonPrimary } from "../Buttons";
import burgerIcon from "../../img/burger-icon.png";
import { TextInput, ErrorMessage } from "../contact/ContactForm";
import { LoaderSpinner } from "../LoaderSpinner";

export const FormCard = styled.article`
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
  margin: 30px auto;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  min-height: 600px;
  background: rgb(252, 175, 1);
  background: linear-gradient(
    218deg,
    rgb(252 175 1 / 60%) 0%,
    rgb(255 165 0 / 58%) 100%
  );
  box-shadow: 2px 2px 6px #000;

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const Logo = styled.img`
  width: 120px;
  margin-bottom: 20px;
  height: auto;
`;

export const Form = styled.form`
  width: 90%;
  margin-left: -10px;
  padding-bottom: 25px;
  display: flex;
  margin: 0 auto;
  flex-flow: column;
  align-items: center;

  & > input {
    width: 90%;
    margin-bottom: 15px;
    border: none;
    box-shadow: ${(props) => props.theme.inputShadow};
  }

  & > ${LoaderSpinner} {
    margin-bottom: 10px;
  }

  & > input:focus,
  & > textarea:focus {
    outline: 2px solid ${(props) => props.theme.darkYellow};
    outline-style: auto;
  }

  & > input[type="submit"] {
    box-shadow: none;
    outline: none;
  }

  @media screen and (max-width: 500px) {
    width: 90%;

    & > input {
      width: 95%;
    }
  }
`;

export const ErrorServerMessage = styled(ErrorMessage)`
  text-align: center;
  font-size: 16px;
  margin: 5px auto 15px;
`;

export const FormLink = styled(Link)`
  margin-bottom: 20px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
  color: ${(props) => props.theme.black};

  &:hover {
    color: #fff;
  }
`;

export function UserNameInput({ register, errors, defaultValue }) {
  return (
    <Fragment>
      {errors.userName && (
        <ErrorMessage>{errors.userName.message}</ErrorMessage>
      )}

      <TextInput
        placeholder="Your name..."
        name="userName"
        type="text"
        defaultValue={defaultValue || ""}
        data-testid="nameInput"
      
        style={{ borderColor: errors.userName && "#bf0000" }}
      />
    </Fragment>
  );
}

export function UserLastNameInput({ register, errors, defaultValue }) {
  return (
    <Fragment>
      {errors.userLastName && (
        <ErrorMessage>{errors.userLastName.message}</ErrorMessage>
      )}

      <TextInput
        type="text"
        placeholder="Your last name..."
        data-testid="lastNameInput"
        defaultValue={defaultValue || ""}
        name="userLastName"
        
        style={{ borderColor: errors.userLastName && "#bf0000" }}
      />
    </Fragment>
  );
}

export function UserEmailInput({ errors, name }) {
  return (
    <Fragment>
      {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}

      <TextInput
        type="email"
        placeholder="Your email..."
        name={name}
        data-testid="emailInput"
        style={{ borderColor: errors[name] && "#bf0000" }}
      />
    </Fragment>
  );
}

export function UserPasswordInput({
  errors,
  placeholder,
  name = "userPassword",
}) {
  return (
    <Fragment>
      {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}

      <TextInput
        placeholder={placeholder}
        type="password"
        name={name}
        data-testid="passwordInput"
        style={{ borderColor: errors[name] && "#bf0000" }}
      />
    </Fragment>
  );
}

export function UserNewPasswordInput({ errors, placeholder }) {
  return (
    <Fragment>
      {errors.userNewPassword && (
        <ErrorMessage>{errors.userNewPassword.message}</ErrorMessage>
      )}

      <TextInput
        placeholder={placeholder}
        type="password"
        name="userNewPassword"
        style={{ borderColor: errors.userNewPassword && "#bf0000" }}
      />
    </Fragment>
  );
}

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    isFormLoading,
    serverError,
  } = useSignupForm();

  return (
    <FormCard>
      <Logo src={burgerIcon} alt="LogoBrand" />
      <Form data-testid="singUpForm" onSubmit={handleSubmit(onSubmit)}>
        <UserNameInput errors={errors} />
        <UserLastNameInput errors={errors} />
        <UserEmailInput errors={errors} />
        <UserPasswordInput errors={errors} placeholder="Your password..." />

        <ErrorServerMessage>{serverError}</ErrorServerMessage>

        <FormLink to="/authentication/login">
          Already have an account? <b>Login</b>{" "}
        </FormLink>

        <ButtonPrimary as="input" type="submit" value="Sign Up" />

        {isFormLoading && <LoaderSpinner data-testid="spinner" small />}
      </Form>
    </FormCard>
  );
}
