import React, { useState } from 'react';
import burgerIcon from "../../img/burger-icon.png";
import styled from 'styled-components';
import { BASE_URL } from '../../Base_URL';
import {useNavigate} from "react-router-dom"
import { ButtonPrimary } from '../Buttons';
 

const LoginFormContainer = styled.div`
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
  margin: 30px auto;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  min-height: 300px;
  background: rgb(252, 175, 1);
  background: linear-gradient(218deg, rgb(252 175 1 / 60%) 0%, rgb(255 165 0 / 58%) 100%);
  box-shadow: 2px 2px 6px #000;
`;

export const TextInput = styled.input`
  &::placeholder {
    font-weight: 500;
    letter-spacing: 1px;
    font-size: 16px;
  }
  border: none;
  border-radius: 5px;
  outline: transparent;
  border: 2px solid #171717;
  margin-bottom: 15px;
  width: 100%;
  padding: 12px 15px;
`;

const Logo = styled.img`
  width: 120px;
  margin-bottom: 20px;
  height: auto;
`;

const Form = styled.form`
  width: 90%;
  margin-left: -10px;
  padding-bottom: 25px;
  display: flex;
  margin: 0 auto;
  flex-flow: column;

  & > input {
    width: 90%;
    margin-bottom: 15px;
    border: none;
    box-shadow: ${(props) => props.theme.inputShadow};
  }

  & > input:focus {
    outline: 2px solid ${(props) => props.theme.darkYellow};
    outline-style: auto;
  }

  & > input[type='submit'] {
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

const ErrorServerMessage = styled.small`
  text-align: center;
  font-size: 16px;
  margin: 5px auto 15px;
`;


export default function SimpleLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [serverError, setServerError] = useState('');
  const [isFormLoading, setIsFormLoading] = useState(false);

  const navigate = useNavigate(); // Get the navigate function from useNavigate

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsFormLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const json = await response.json();

      if (json.user) {
        setServerError('');
        // Handle successful login, update state or redirect
        console.log('Login successful:', json.user);

        const { user } = json;

        if (user.name === 'admin') {
          // Navigate to the admin dashboard
          navigate('/dashboard/myProducts');
        } else if (user.name === 'moderator') {
          // Navigate to the moderator dashboard
          navigate('/dashboard/myProducts');
        } else {
          // Navigate to the default menu page for other users
          navigate('/menu');
        }
      } else {
        setServerError(json.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setServerError('An error occurred. Please try again.');
    }

    setIsFormLoading(false);
  };

  return (
    <LoginFormContainer>
      <Logo src={burgerIcon} alt="LogoBrand" />
      <Form onSubmit={handleSubmit}>
        <TextInput
          placeholder="Email"
          type="email"
          value={email}
          name="email"
          onChange={handleEmailChange}
        />

        <TextInput
          placeholder="Password"
          type="password"
          value={password}
          name="userNewPassword"
          onChange={handlePasswordChange}
        />

        <ButtonPrimary disabled={isFormLoading} as="input" type="submit" value="Sign Up" />
      </Form>

      {serverError && <ErrorServerMessage>{serverError}</ErrorServerMessage>}
    </LoginFormContainer>
  );
}