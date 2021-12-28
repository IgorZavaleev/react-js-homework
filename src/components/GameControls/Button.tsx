import { FC } from "react";
import styled from "@emotion/styled";

export type ButtonProps = {
  caption: string;
  onClick: (any) => void;
  selected: boolean;
  disabled: boolean;
  dataTestId: string;
};

const StyledButton = styled.button<{ selected: boolean; disabled: boolean }>`
  border: 1px solid #eee;
  border-radius: 3px;
  background-color: ${(props) =>
    props.disabled ? "#ffffff" : props.selected ? "#ffff11" : "#0000ff"};
  ${(props) => props.disabled || "cursor: pointer;"}
  fontsize: 15;
  padding: 3px 10px;
  margin: 10;
  color: ${(props) => (props.selected || props.disabled ? "black" : "white")};
`;

export const Button: FC<ButtonProps> = (props) => (
  <StyledButton
    {...(props.disabled || { onClick: props.onClick })}
    selected={props.selected}
    disabled={props.disabled}
    data-testid={props.dataTestId}
  >
    {props.caption}
  </StyledButton>
);
