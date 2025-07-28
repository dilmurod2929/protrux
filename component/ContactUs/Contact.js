import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 90px auto 0;
  padding: 40px 24px;
  border-radius: 12px;

  @media screen and (max-width: 768px) {
    margin-top: 40px;
    padding: 24px 16px;
  }
`;

export const Title = styled.h2`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: 112%;
  letter-spacing: -1.6px;
  margin-bottom: 32px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const FormBlock = styled.div`
  max-width: 420px;
  width: 100%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Subtitle = styled.p`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.18px;
  max-width: 730px;
  margin-bottom: 36px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 24px;
    max-width: 100%;
  }
`;

export const Label = styled.label`
  color: #0f111c;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.13px;
  font-size: 0.95rem;
  font-weight: 600;
  margin: 16px 0 8px;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    margin: 12px 0 6px;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  outline: none;
  padding: 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.14px;
  @media screen and (max-width: 768px) {
    font-size: 0.95rem;
  }
`;
export const ImgInput = styled.img``;

export const Textarea = styled.textarea`
  width: 100%;
  border: 1px solid #d7d8e0;
  border-radius: 8px;
  margin-top: 8px;
  padding: 12px 16px;
  resize: vertical;
  min-height: 120px;
  margin-bottom: 24px;
  font-size: 14px;
  font-family: Inter;
  font-style: normal;
  line-height: 20px;
  letter-spacing: -0.14px;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #3b82f6;
    outline: none;
  }

  @media screen and (max-width: 768px) {
    padding: 10px 14px;
    font-size: 0.95rem;
    min-height: 100px;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 16px;

  margin: 16px 0 26px 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;

  input[type="radio"] {
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 5px solid #d0d5dd;
    background-color: #fff;
    transition: border-color 0.2s ease;

    &:checked {
      border-color: #1d72e9;
    }

    &:focus {
      outline: none;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  background-color: #007bff;
  color: white;
  border: none;
  font-weight: 600;
  border-radius: 24px;
  padding: 14px 24px 14px 32px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s ease;
  color: var(--Light-mode-White, #fff);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.14px;
  &:hover:not(:disabled) {
    background-color: #005dc1;
  }

  &:disabled {
    background-color: #a3c2f0;
    cursor: not-allowed;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.95rem;
    padding: 10px 18px;
  }
`;

export const IconInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #d7d8e0;
  border-radius: 8px;
  padding: 12px 16px;
  margin-top: 8px;
  margin-bottom: 24px;
  background: #fff;
  color: #666;
  transition: border-color 0.2s ease;

  svg {
    font-size: 1.1rem;
  }

  &:focus-within {
    border-color: #3b82f6;
  }

  @media screen and (max-width: 768px) {
    padding: 10px 14px;

    svg {
      font-size: 1rem;
    }
  }
`;
