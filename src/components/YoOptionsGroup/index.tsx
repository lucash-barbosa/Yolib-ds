import React, { useState } from "react";
import styled from "styled-components";

const StyledSection = styled.section<{ selected: boolean }>`
  width: 194px;
  height: 88px;
  background: ${props => props.selected ? "linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)" : "#FFF"};
  border: 1px solid;
  border-color: ${props => props.selected ? "#002F52" : "#EB9B00"};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin: 10px;
  font-family: sans-serif;
  cursor: pointer;
  
  header {
    color: ${props => props.selected ? "#FFF" : "#EB9B00"};
    font-size: 12px;
  }

  strong {
    color: ${props => props.selected ? "#FFF" : "#EB9B00"};;
    font-size: 16px;
    font-weight: 700;
  }

  footer {
    color: ${props => props.selected ? "#FFF" : "rgba(0, 0, 0, .54)"};
    font-size: 12px;
    font-weight: 400;
  }
`;

export interface YoOptionGroup {
  id: number
  title: string
  body: string
  footer: string
}

export interface YoOptionsGroupProps {
  options: YoOptionGroup[],
  defaultValue?: YoOptionGroup | null,
  onChange?: (option: YoOptionGroup) => void,
}

export const YoOptionsGroup = ({ options, onChange, defaultValue } : YoOptionsGroupProps) => {
  const [select, setSelect] = useState<YoOptionGroup | null>(defaultValue ?? null);

  const onSelect = (option: YoOptionGroup): void => {
    setSelect(option);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <>
      {options.map(option => 
        <StyledSection onClick={() => onSelect(option)} key={option.id} selected={select?.id === option.id}>
          <header>
            {option.title}
          </header>
          <div>
            <strong>
              {option.body}
            </strong>
          </div>
          <footer>
            {option.footer}
          </footer>
        </StyledSection>
      )}
    </>
  );
};
