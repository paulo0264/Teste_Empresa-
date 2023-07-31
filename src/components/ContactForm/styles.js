import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 100%;
  max-width: 500px;
  margin-bottom: 50px;
  
  /* border: 1px solid #ccc;
  border-radius: 8px; */

  h1 {
    margin-bottom: 20px;
    font-size: 30px;
    font-family: Inter;
  }
  
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  textarea {
    width: 36.25rem;
    max-width: 95%;
    height: 6.3125rem;
    border: none;
    border-radius: 0.9375rem;
    background: #F2F2F2;
    padding: 0.8rem;
    font-family: Inter;
    font-size: 1.25rem;
  }
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  width: 36.25rem;
  max-width: 95%;
  height: 3.9375rem;
  border: none;
  border-radius: 0.9375rem;
  background: #F2F2F2;
  padding: 0.8rem;
  font-family: Inter;
  font-size: 1.25rem;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 4px;
  border-radius: 0.9375rem;
`;

export const SubmitButton = styled.button`
  width: 12.5rem;
  padding: 0.5rem 4.0625rem;
  background-color: rgb(122, 23, 220);
  color: #fff;
  border: none;
  border-radius: 3.125rem;
  font-family: Inter;
  cursor: pointer;
  gap: 0.625rem;
`;