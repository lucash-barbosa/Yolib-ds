import React, { ReactNode } from "react";
import styled from "styled-components";

export interface YoCardProps {
  children: ReactNode
}

const StyledCard = styled.div`
  width: 551px;
  height: 374px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 48px;
`;

export const YoCard = ({children}: YoCardProps) => {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  );
};