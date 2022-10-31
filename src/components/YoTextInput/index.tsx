import React from "react";
import styled from "styled-components";

export interface YoTextInputProps {
  name: string
  placeholder?: string
  type?: "text" | "email" | "password" | "date"
  label?: string
  value: string
  onChange: (value: string) => void
}

const StyledInput = styled.input`
    font-size: 16px;
    line-height: 24px;
    color: #002F52;
    padding: 8px 24px;
    border: 1px solid #002F52;
    border-radius: 45px;
    width: 100%;
    box-sizing: border-box;

    &:focus{
        outline: none;
    }
`;

const StyledLabel = styled.label`
    color: #002F52;
    display: block;
    font-weight: 700;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 16px;
    margin-bottom: 8px;
`;

export const YoTextInput = ({ placeholder, label, name, value, onChange,  type = "text" } : YoTextInputProps) => {
  return (
    <>
      <StyledLabel htmlFor="">{label}</StyledLabel>
      <StyledInput id={name} type={type} value={value} placeholder={placeholder} onChange={event => onChange(event.target.value)} />
    </>
  );
};