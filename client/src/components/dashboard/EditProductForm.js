import styled from "styled-components";
import useEditProductForm from "../../hooks/useEditProductForm";
import { LoaderSpinner } from "./../LoaderSpinner";
import { Logo } from "../auth/SignupForm";
import {
  ThisFormCard,
  ThisForm,
  ProductDescriptionTextArea,
  ProductSizeInput,
  ProductPriceInput,
  CategoriesOptionsInput,
  ProductNameInput,
  ImageUploader,
  FormButtons,
  StyledSection,
  FormTitle,
  ProductState,
} from "./CreateNewProductForm";
import editIcon from "../../img/pencil-edit-form.svg";

const EditIcon = styled(Logo)`
  transform: scale(0.75);
`;

export default function UpdateNewProductForm() {
  const {
    categories,
    register,
    handleSubmit,
    errors,
    onSubmit,
    productToEdit,
    formIsLoading,
  } = useEditProductForm();

  return (
    <StyledSection>
      <ThisFormCard>
        <EditIcon src={editIcon} alt="new-product"></EditIcon>
        <ThisForm
          enctype="multipart/form-data"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormTitle>Editar {productToEdit?.name}</FormTitle>

          <ProductNameInput
            
            errors={errors}
            defaultValue={productToEdit.name}
          />

          <ProductSizeInput
            
            errors={errors}
            defaultValue={productToEdit.size}
          />

          <ProductPriceInput
            
            errors={errors}
            defaultValue={productToEdit.price}
          />

          <CategoriesOptionsInput
            
            errors={errors}
            categories={categories}
            defaultValue={productToEdit.category}
          />

          <ProductDescriptionTextArea
            defaultValue={productToEdit.description}
            
            errors={errors}
          />

          <ImageUploader  errors={errors} isNotRequired />
          <ProductState state={productToEdit?.active ? "checked" : false} />

          {formIsLoading && <LoaderSpinner small />}

          <FormButtons />
        </ThisForm>
      </ThisFormCard>
    </StyledSection>
  );
}
