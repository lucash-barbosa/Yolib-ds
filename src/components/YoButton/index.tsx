import React from "react";
import styled, { css } from "styled-components";

export interface YoButtonProps {
  text?: string
  kind?: "primary" | "secundary"
  onClick?: () => void
}

const StyledButton = styled.button<YoButtonProps>`
  background: ${(props: YoButtonProps) => props.kind  === "primary" ? "#EB9B00" : "#FFF"};
  padding: 16px 32px;
  border: 2px solid #EB9B00;
  color: ${(props: YoButtonProps) => props.kind  === "primary" ? "#FFF" : "#EB9B00"};
  font-size: 20px;
  cursor: pointer;
  ${(props: YoButtonProps) => props.kind  === "primary" 
    ? css`
      &:hover {
        background: #B87900;
        border: 2px solid #B87900;
      }
    `
    : css`
      &:hover {
        background: #FFF;
        border: 2px solid #B87900;
        color: #B87900;
      }
    `
}
`;

export const YoButton = ({ text, onClick, kind = "primary" } : YoButtonProps) => {
  return (
    <StyledButton onClick={onClick} kind={kind}>
      {text}
    </StyledButton>
  );
};