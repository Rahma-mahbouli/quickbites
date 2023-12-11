import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import axios from "axios";
import styled from 'styled-components';
import { LoaderSpinner } from './../LoaderSpinner';
import trayIcon from '../../img/tray.svg';
import {
  FormCard,
  Form,
  Logo,
 
  ErrorMessage,
} from '../auth/SignupForm';
import { Button, ButtonPrimary } from '../Buttons';

export const StyledSection = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  margin: 0 0 40px;
  background-size: 100% 100%;
`;

export const FormTitle = styled.h2`
  text-transform: uppercase;
  font-size: 25px;
  margin-bottom: 20px;
  margin-top: -10px;

  @media screen and (min-width: 760px) {
    font-size: 45px;
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  margin: 10px auto;
  align-items: center;

  & > input {
    transform: scale(1.5);
    margin: 5px 10px 0;
    cursor: pointer;
  }

  & > small {
    margin-left: 5%;
  }

  & > input[type="file"] {
    width: 50%;
  }

  & > label {
    font-weight: 600;
    font-size: 20px;
  }
`;

export const ThisFormCard = styled(FormCard)`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  background: #fff;
  box-shadow: none;
`;

export const ThisForm = styled(Form)`
  max-width: 95%;
  width: 95%;
  margin: 0 auto;

  & > input {
    background: #f0f0f0;
  }

  & > input:focus,
  & > textarea:focus {
    outline: 2px solid #ccc;
    outline-style: auto;
  }
`;

export const TextInput = styled.input.attrs((props) => ({
  type: 'text',
}))`
  &::placeholder {
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 1px;
  }

  background: #f0f0f0;
  border: none;
  border-radius: 5px;
  outline: none;
  margin-bottom: 15px;
  width: 95%;
  padding: 12px 15px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 450px) {
    & > input {
      transform: scale(0.8);
    }
  }
`;

export const LoadButton = styled(ButtonPrimary)`
  transform: scale(0.9);
`;

export const ResetButton = styled(Button)`
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
  transform: scale(0.9);
  outline: none;
  border: none;
`;

export const Description = styled.textarea`
  max-width: 90%;
  width: 90%;
  border: none;
  outline: none;
  box-shadow: inset 1px 1px 6px 0px #ccc;
  padding: 12px 10px 12px 20px;
  min-height: 200px;
  max-height: 200px;
  border: none;
  background: #f0f0f0;
  border-radius: 5px;

  &::placeholder {
    font-weight: 500;
    font-size: 17px;
    letter-spacing: 1px;
  }

  @media screen and (max-width: 500px) {
    min-width: 95%;
  }
}`;

export const DropZone = styled.input`
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
  position: relative;
  max-width: 50%;
  min-width: 200px;
  height: 45px;
  display: inline-block;
  margin: 25px auto;
  cursor: pointer;
  outline: none;
  transition: all 0.5s ease;

  &:before {
    background-color: ${(props) => props.theme.black};
    color: white;
    display: flex;
    justify-content: center;
    font-size: 17px;
    font-weight: 600;
    align-items: center;
    border-radius: 3px;
    content: 'Select Image';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const OptionList = styled.select`
  color: rgb(0 0 0 / 50%);
  padding: 10px;
  width: 90%;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  margin: 0;
  border: none;
  margin-bottom: 20px;
  background: #f3f3f3;
  box-shadow: ${(props) => props.theme.inputShadow};
  text-transform: capitalize;

  @media screen and (max-width: 500px) {
    min-width: 95%;
  }
`;

export const Option = styled.option`
  &:checked {
    background: #fcba1c;
  }
`;

export function CategoriesOptionsInput({
 
  categories,
  defaultValue,
}) {
  return (
    <OptionList
      name="category"
      defaultValue={defaultValue || categories[0]}
    >
      {categories?.map((cat) => (
        <Option key={cat?._id} value={cat?.name}>
          {cat?.name}
        </Option>
      ))}
    </OptionList>
  );
}

export function ProductNameInput({
 
  defaultValue,
}) {
  return (
    <Fragment>
      
      <TextInput
        
        placeholder="Name..."
        data-testid="name"
        defaultValue={defaultValue || ''}
        name="name"
      />
    </Fragment>
  );
}

export function ProductSizeInput({
 
  defaultValue,
}) {
  return (
    <Fragment>
      
      <TextInput
         
        placeholder="Quantity/Size..."
        data-testid="size"
        name="size"
        defaultValue={defaultValue || ''}
      />
    </Fragment>
  );
}

export function ProductDescriptionTextArea({
 
  defaultValue,
}) {
  return (
    <Fragment>
 
      <Description
        placeholder="Description..."
        
        defaultValue={defaultValue || ''}
        name="description"
        data-testid="description"
      ></Description>
    </Fragment>
  );
}

export function ProductPriceInput({
 
  defaultValue,
}) {
  return (
    <Fragment>
      

      <TextInput
        placeholder="Price..."
        
        name="price"
        data-testid="price"
        defaultValue={defaultValue || ''}
      />
    </Fragment>
  );
}

export function ImageUploader({
 
  isNotRequired,
}) {
  return (
    <Fragment>
      

      <DropZone
        id="imgInput"
        type="file"
        name="img"
      ></DropZone>
    </Fragment>
  );
}

export function FormButtons() {
  return (
    <ButtonsWrapper>
      <LoadButton as="input" type="submit" value="Upload" />
      <ResetButton as="input" type="reset" value="Abort" />
    </ButtonsWrapper>
  );
}

export function ProductState(props) {
  let state = props?.state || false;

  return (
    <CheckboxWrapper>
      <label htmlFor="state">Publish:</label>
      <input
        id="state"
        type="checkbox"
        defaultChecked={state}
        name="state"
      />
    </CheckboxWrapper>
  );
}

export default function UpdateNewProductForm() {
  const [formIsLoading, setFormIsLoading] = useState(false);
  const [formError, setFormError] = useState(null);
  const [categories, setCategories] = useState([]);
  console.log('categories',categories)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Fetch categories from your API
        const res = await axios.get("http://localhost:7000/api/categories");
      
        setCategories(res.data.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    // Call the fetchCategories function when the component mounts
    fetchCategories();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);
    setFormIsLoading(true);

    try {
      // Your form submission logic here
      const formData = new FormData(e.target);
      const response = await fetch('/api/products', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const result = await response.json();
        setFormError(result.message || 'Failed to submit the form.');
      } else {
        // Handle success, e.g., redirect or show a success message
        console.log('Form submitted successfully');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormError('Failed to submit the form. Please try again.');
    } finally {
      setFormIsLoading(false);
    }
  };

  return (
    <StyledSection>
      <ThisFormCard>
        <Logo src={trayIcon} alt="new-product"></Logo>
        <ThisForm onSubmit={handleSubmit}>
          <FormTitle>Upload new products</FormTitle>

          <ProductNameInput  />

          <ProductSizeInput  />

          <ProductPriceInput  />
          <CategoriesOptionsInput
           
            categories={categories}
          />
          <ProductDescriptionTextArea  />

          <ProductState state="checked" />

          <ImageUploader  />
          {formIsLoading && (
            <LoaderSpinner small data-testid="spinner" />
          )}
          <FormButtons />
        </ThisForm>
      </ThisFormCard>
    </StyledSection>
  );
}
